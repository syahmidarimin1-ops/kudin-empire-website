"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="
        min-h-screen
        bg-[url('/hero-bg.jpg')]
        bg-cover
        bg-center
        bg-fixed
        scroll-smooth
      "
    >

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-[#f3efe8]/95 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Kudin Empire"
              width={60}
              height={60}
              priority
            />
            <span className="text-2xl font-extrabold text-black">
              Kudin Empire
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-bold text-black">
            <a href="#home">Home</a>
            <a href="#produk">Produk</a>
            <a href="#runcit">Runcit</a>
            <a href="#borong">Borong</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#hubungi">Hubungi</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/60123945754"
            target="_blank"
            className="hidden md:inline-block rounded-full bg-black px-6 py-3 font-extrabold text-white hover:bg-gray-900 transition"
          >
            Order WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black text-3xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col gap-4 px-6 py-6 text-lg font-extrabold text-black">
              {[
                ["Home", "#home"],
                ["Produk", "#produk"],
                ["Runcit", "#runcit"],
                ["Borong", "#borong"],
                ["Tentang Kami", "#tentang"],
                ["Hubungi", "#hubungi"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}

              <a
                href="https://wa.me/60123945754"
                className="mt-4 rounded-lg bg-black px-6 py-4 text-center text-white font-extrabold"
                onClick={() => setOpen(false)}
              >
                Order WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center justify-center px-6 text-center"
      >
        <div className="max-w-5xl bg-white/95 p-14 rounded-2xl shadow-xl">

          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-black">
            Santan Segar 100% Asli
          </h1>

          <p className="mb-6 text-3xl font-extrabold text-black">
            Tanpa Bahan Pengawet
          </p>

          <ul className="mb-10 text-xl font-extrabold text-black space-y-3">
            <li>✔ Diproses setiap hari</li>
            <li>✔ Sesuai untuk restoran & peniaga</li>
          </ul>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/60123945754?text=Order%20Runcit%20Santan"
              className="rounded-xl bg-black px-12 py-5 text-xl font-extrabold text-white"
            >
              Order Runcit
            </a>
            <a
              href="https://wa.me/60123945754?text=Order%20Borong%20Santan"
              className="rounded-xl bg-black px-12 py-5 text-xl font-extrabold text-white"
            >
              Order Borong
            </a>
          </div>

          <p className="mt-8 text-lg font-extrabold text-black">
            🚚 Penghantaran sekitar Kuala Lumpur & Selangor
          </p>
          <p className="text-base font-bold text-black">
            (Luar kawasan tertakluk kepada minimum order)
          </p>
        </div>
      </section>

      {/* ================= PRODUK ================= */}
      <section id="produk" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-14 text-center text-4xl font-extrabold text-black bg-white/90 inline-block px-10 py-4 rounded-xl">
            Produk Santan Kami
          </h2>

          <div id="runcit" className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {["500g", "1kg", "5kg", "10kg"].map((size) => (
              <div key={size} className="bg-white/95 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-extrabold text-black mb-3">
                  Santan {size}
                </h3>
                <p className="font-bold text-black mb-6">
                  Santan segar diproses harian
                </p>
                <a
                  href={`https://wa.me/60123945754?text=Order%20Santan%20${size}`}
                  className="inline-block bg-black text-white px-8 py-4 rounded-lg font-extrabold"
                >
                  Order WhatsApp
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="hubungi" className="py-20 px-6">
        <div className="mx-auto max-w-7xl bg-white/95 text-black p-12 rounded-2xl grid md:grid-cols-3 gap-10">

          <div>
            <h4 className="text-2xl font-extrabold mb-3">Kudin Empire</h4>
            <p className="font-extrabold">Pemproses & pengedar santan segar</p>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-3">Hubungi Kami</h4>
            <p className="text-2xl font-extrabold">📞 012-394 5754</p>
            <p className="text-xl font-extrabold">📍 Kuala Lumpur & Selangor</p>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-3">Media Sosial</h4>
            <p className="font-extrabold">TikTok</p>
            <p className="font-extrabold">Instagram</p>
          </div>

        </div>

        <div className="mt-10 text-center text-sm font-extrabold text-black">
          © {new Date().getFullYear()} Kudin Empire. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
