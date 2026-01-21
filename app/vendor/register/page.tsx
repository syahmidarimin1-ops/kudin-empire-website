"use client";

import { useState } from "react";

export default function VendorRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [vendorId, setVendorId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // ✅ Nombor rasmi WhatsApp syarikat
  const COMPANY_WHATSAPP = "60123945754";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setVendorId(null);
    setWhatsappUrl(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const shopName = formData.get("shopName") as string;
    const address = formData.get("address") as string;

    try {
      const res = await fetch("/api/vendor/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          shopName,
          address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Pendaftaran gagal");
      }

      const generatedVendorId = data.vendorId;
      setVendorId(generatedVendorId);

      const message = `
Assalamualaikum,

Pendaftaran Vendor Baru berjaya ✅

Butiran Vendor:
Nama: ${name}
No Telefon Vendor: ${phone}
Nama Kedai: ${shopName}
Alamat: ${address}

Vendor ID:
${generatedVendorId}

Sila tekan HANTAR dan simpan Vendor ID ini untuk rujukan akan datang.

– Sistem Kudin Empire
      `.trim();

      const waUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(
        message
      )}`;

      // ✅ SIMPAN URL (JANGAN AUTO OPEN)
      setWhatsappUrl(waUrl);

      form.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center">
        Create Vendor Account
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <input
          name="name"
          placeholder="Nama Penuh"
          required
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          placeholder="Nombor Telefon (contoh: 0123456789)"
          required
          className="w-full border p-3 rounded"
        />

        <input
          name="shopName"
          placeholder="Nama Kedai"
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="address"
          placeholder="Alamat Kedai"
          required
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded"
        >
          {loading ? "Creating..." : "Create Vendor"}
        </button>
      </form>

      {error && (
        <p className="mt-6 text-red-600 text-center">{error}</p>
      )}

      {vendorId && (
        <div className="mt-8 bg-green-100 p-4 rounded text-center">
          <p className="font-semibold">Vendor ID anda:</p>
          <p className="text-2xl font-bold mt-2">{vendorId}</p>
        </div>
      )}

      {whatsappUrl && (
        <div className="mt-6 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded font-semibold"
          >
            Hantar ke WhatsApp
          </a>

          <p className="text-sm text-gray-500 mt-2">
            Sila klik butang di atas untuk hantar maklumat ke WhatsApp
          </p>
        </div>
      )}
    </section>
  );
}
