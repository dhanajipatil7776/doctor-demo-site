import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://clinic-boost-3.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("ok") is True


def test_get_clinic(api):
    r = api.get(f"{BASE_URL}/api/clinic")
    assert r.status_code == 200
    data = r.json()
    for k in ["name", "tagline", "phone", "whatsapp", "address", "hours"]:
        assert k in data
    assert data["name"] == "Dr. Sharma Dental Clinic"
    assert data["phone"].startswith("+91")
    assert isinstance(data["hours"], dict)


def test_create_appointment_and_persist(api):
    payload = {
        "name": "TEST_User Pytest",
        "phone": "+919876500001",
        "service": "Teeth Whitening",
        "preferred_date": "2026-02-01",
        "preferred_time": "11:00",
        "notes": "TEST_pytest entry",
    }
    r = api.post(f"{BASE_URL}/api/appointments", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["service"] == payload["service"]
    assert "id" in data and len(data["id"]) > 0
    assert data["status"] == "new"
    assert "_id" not in data

    # GET list and check it's there & sorted desc, no _id
    r2 = api.get(f"{BASE_URL}/api/appointments")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    assert all("_id" not in x for x in items)
    ids = [it["id"] for it in items]
    assert data["id"] in ids
    # Created should be among the most recent (index 0 is most recent overall)
    # Verify sort desc
    timestamps = [it["created_at"] for it in items]
    assert timestamps == sorted(timestamps, reverse=True)


def test_create_appointment_validation_missing_fields(api):
    r = api.post(f"{BASE_URL}/api/appointments", json={"name": "x"})
    assert r.status_code == 422


def test_create_appointment_validation_short_name(api):
    r = api.post(f"{BASE_URL}/api/appointments", json={
        "name": "A", "phone": "+919876500002", "service": "Dental Check-up"
    })
    assert r.status_code == 422
