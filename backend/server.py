from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Dr. Sharma Dental Clinic API")
api_router = APIRouter(prefix="/api")


# --- Models ---
class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    service: str
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    notes: Optional[str] = ""
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class AppointmentCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=6, max_length=20)
    service: str = Field(..., min_length=2, max_length=100)
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    notes: Optional[str] = ""


class ClinicInfo(BaseModel):
    name: str
    tagline: str
    phone: str
    whatsapp: str
    address: str
    hours: dict


# --- Static clinic info ---
CLINIC = {
    "name": "Dr. Sharma Dental Clinic",
    "tagline": "Caring smiles. Trusted hands. Andheri West, Mumbai.",
    "phone": "+919876543210",
    "whatsapp": "919876543210",
    "address": "204, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053",
    "hours": {
        "Mon - Sat": "10:00 AM - 8:30 PM",
        "Sunday": "By appointment only",
    },
}


# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "Dr. Sharma Dental Clinic API", "ok": True}


@api_router.get("/clinic", response_model=ClinicInfo)
async def get_clinic():
    return ClinicInfo(**CLINIC)


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate):
    appt = Appointment(**payload.model_dump())
    doc = appt.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.appointments.insert_one(doc)
    return appt


@api_router.get("/appointments", response_model=List[Appointment])
async def list_appointments():
    items = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except Exception:
                it['created_at'] = datetime.now(timezone.utc)
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
