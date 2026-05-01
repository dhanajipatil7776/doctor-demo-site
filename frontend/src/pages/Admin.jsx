import React, { useEffect, useState } from "react";
import axios from "axios";
import { RefreshCw, Phone, MessageCircle } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true);
    setErr("");
    try {
      const { data } = await axios.get(`${API}/appointments`);
      setItems(data || []);
    } catch (e) {
      setErr("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-stone-900 tracking-tight">
              Appointment Requests
            </h1>
            <p className="text-stone-600 mt-1 text-sm">
              All booking requests submitted from the website.
            </p>
          </div>
          <button
            onClick={load}
            data-testid="admin-refresh-button"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium hover:border-sky-700 transition"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {err && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {err}
          </div>
        )}

        <div className="mt-8 space-y-3" data-testid="admin-list">
          {items.length === 0 && !loading && (
            <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center text-stone-500">
              No appointment requests yet.
            </div>
          )}
          {items.map((it) => (
            <div
              key={it.id}
              data-testid={`admin-item-${it.id}`}
              className="bg-white border border-stone-200 rounded-2xl p-5 grid sm:grid-cols-[1fr_auto] gap-4"
            >
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display font-semibold text-stone-900">
                    {it.name}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    {it.service}
                  </span>
                </div>
                <div className="mt-1 text-sm text-stone-600">
                  {it.preferred_date || "Any date"}
                  {it.preferred_time ? ` • ${it.preferred_time}` : ""}
                </div>
                {it.notes && (
                  <div className="mt-2 text-sm text-stone-700 bg-stone-50 rounded-lg p-3">
                    {it.notes}
                  </div>
                )}
                <div className="mt-2 text-xs text-stone-400">
                  {new Date(it.created_at).toLocaleString()}
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:items-end">
                <a
                  href={`tel:${it.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-600 text-white px-3.5 py-2 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" />
                  {it.phone}
                </a>
                <a
                  href={`https://wa.me/${it.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-2 text-sm font-medium"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
