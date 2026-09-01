"use client";

import { useState, useEffect } from "react";
import { 
  ArrowIcon, 
  CheckIcon, 
  CodeIcon, 
  CustomLayoutIcon, 
  DealIcon, 
  DesignIcon, 
  DomainIcon, 
  PriceIcon, 
  ProjekinBrandLogo,
  RevisionIcon, 
  RocketIcon, 
  SearchIcon, 
  StarIcon, 
  SupportIcon, 
  WhatsAppIcon, 
  ZapSpeedIcon 
} from "./icons";
import { agencyPricingPlans, faqCategories, features, projectCards, serviceItems, studentPricingPlans, testimonials, type ServiceItem, type PricingCategory } from "./data";

export function ProblemSection() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-[#040316] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute -top-32 right-[-5%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-indigo-600/25 to-purple-600/15 blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[28rem] w-[28rem] rounded-full bg-rose-600/10 blur-[130px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">TANTANGAN BISNIS</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Bisnis Anda Sudah Siap Go Digital?
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
            {[
              "Belum punya website & kredibilitas brand di internet",
              "Website lama lambat, tidak responsive, dan sulit di-update",
              "Proses operasional & transaksi masih manual",
              "Kesulitan menjangkau calon pelanggan potensial secara online",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3.5 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-rose-500/40 hover:bg-rose-500/10">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs">
                  ✕
                </span>
                <span className="text-sm font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-slate-950 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(79,70,229,0.15)] sm:p-8 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_25px_60px_rgba(79,70,229,0.25)]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">SOLUSI PROJEKIN</p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Kami ubah tantangan bisnis Anda menjadi produk digital modern yang terukur & berkinerja tinggi.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["STRATEGY", "Pemetaan fitur & arsitektur data bisnis"],
                ["DESIGN", "UI/UX kustom, estetis, & conversion-focused"],
                ["LAUNCH", "Kode bersih, cepat, & mudah di-scale"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-white/[0.08]">
                  <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">{title}</div>
                  <p className="text-xs leading-5 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#030211] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute top-1/2 left-[-10%] h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-transparent blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute top-[20%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-purple-600/15 blur-[130px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">LAYANAN UTAMA</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Solusi Digital untuk Berbagai Skala Bisnis
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service) => (
            <article key={service.title} className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] hover:border-indigo-500/50 hover:bg-white/[0.07] hover:shadow-[0_25px_50px_rgba(99,102,241,0.2)]">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M5 18.5V7.5l7-4 7 4v11l-7 4-7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12 4.5v15" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 7.5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition">{service.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">{service.description}</p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="font-bold text-emerald-400">{service.categoryBadge}</span>
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="inline-flex items-center gap-1 font-bold text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-300"
                  >
                    <span>Detail</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal Popup */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-indigo-500/40 bg-gradient-to-b from-slate-900 via-[#06041d] to-slate-950 p-6 sm:p-8 text-white shadow-[0_25px_60px_rgba(99,102,241,0.4)]">
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/20 hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="inline-block rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1 text-[10px] font-black uppercase text-indigo-300 mb-3">
                {activeServiceModal.categoryBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{activeServiceModal.title}</h3>
              <p className="mt-1 text-sm font-semibold text-indigo-300">{activeServiceModal.subtitle}</p>
              <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">{activeServiceModal.description}</p>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400 mb-3">
                Fitur & Yang Didapat Client:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {activeServiceModal.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      ✓
                    </span>
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400 mb-2.5">
                Teknologi & Framework Digunakan:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeServiceModal.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/6285766935413?text=${activeServiceModal.waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition hover:bg-emerald-500 hover:scale-105"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Konsultasi Jasa Ini via WA</span>
              </a>
              <a
                href={activeServiceModal.href}
                onClick={() => setActiveServiceModal(null)}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white/20"
              >
                <span>Lihat Paket Biaya</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function PricingSection() {
  const [pricingCategory, setPricingCategory] = useState<PricingCategory>("agency");

  const currentPlans = pricingCategory === "agency" ? agencyPricingPlans : studentPricingPlans;

  return (
    <section id="paket" className="relative overflow-hidden bg-[#040316] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[60rem] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[150px] animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">PAKET & TRANSPARANSI BIAYA</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Pilih Paket yang Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Melayani Pembuatan Website/Aplikasi Bisnis & Jasa Joki Tugas IT / Skripsi untuk Semua Bahasa Pemrograman.
          </p>

          {/* Category Tab Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-xl">
            <button
              onClick={() => setPricingCategory("agency")}
              className={`flex items-center gap-2 rounded-full px-5 sm:px-7 py-3 text-xs font-black transition-all duration-300 ${
                pricingCategory === "agency"
                  ? "bg-indigo-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏢 Website & Project Bisnis</span>
            </button>
            <button
              onClick={() => setPricingCategory("student")}
              className={`flex items-center gap-2 rounded-full px-5 sm:px-7 py-3 text-xs font-black transition-all duration-300 ${
                pricingCategory === "student"
                  ? "bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🎓 Joki Tugas IT & Skripsi</span>
            </button>
          </div>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-bold text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)] animate-pulse-glow">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            {pricingCategory === "agency"
              ? "Free Domain (.com / .id) & Hosting 1 Tahun Pertama untuk Semua Paket Bisnis"
              : "Garansi Revisi Sesuai Modul / Feedback Dosen & Video Penjelasan Koding"}
          </div>
        </div>

        {/* Spacious Responsive Grid Layout */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {currentPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-[2.5rem] border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] ${
                plan.highlight
                  ? "border-indigo-500 bg-gradient-to-b from-indigo-950/80 via-slate-950 to-slate-950 shadow-[0_20px_50px_rgba(99,102,241,0.35)] ring-1 ring-indigo-400/50 hover:shadow-[0_30px_60px_rgba(99,102,241,0.5)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
              }`}
            >
              <div>
                {plan.tag && (
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] mb-4 ${
                      plan.highlight
                        ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-pulse"
                        : "bg-white/10 text-indigo-300"
                    }`}
                  >
                    {plan.tag}
                  </span>
                )}

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400">
                    {plan.name}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{plan.title}</h3>
                  <div className="mt-4 text-3xl font-black text-white">{plan.price}</div>

                  <ul className="mt-6 space-y-3.5 text-xs sm:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                          ✓
                        </span>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)]"
                    : "bg-white/10 text-white hover:bg-white/20 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-slate-400">
          {pricingCategory === "agency"
            ? "*Harga dapat menyesuaikan fitur kustom, skala database, & kebutuhan khusus bisnis Anda.*"
            : "*Menerima joki semua tugas IT (PHP, Python, Java, C++, JS, Mobile App, Skripsi & TA).*"}
        </p>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#040316] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[35rem] w-[35rem] rounded-full bg-gradient-to-bl from-blue-600/20 via-indigo-600/15 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[30rem] w-[30rem] rounded-full bg-cyan-600/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">CAPABILITIES & SHOWCASE</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Solusi Digital & Hasil Koding Kami
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl">
              Kumpulan kemampuan pengerjaan project bisnis modern serta pendampingan tugas IT & skripsi mahasiswa.
            </p>
          </div>
          <a
            href="https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20mengenai%20project%20saya."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 transition hover:text-white"
          >
            Konsultasi Project <ArrowIcon />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectCards.map((project) => (
            <article key={project.name} className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-indigo-500/50 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-extrabold text-emerald-300 border border-emerald-500/30">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition">{project.name}</h3>
                <p className="text-xs leading-6 text-slate-300 sm:text-sm">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA Button */}
              <div className="border-t border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Siap Dikerjakan Kilat</span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-300 transition hover:text-white hover:translate-x-1"
                >
                  Pesan Project <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#060420] py-24 text-white rounded-t-[3.5rem] sm:rounded-t-[5rem]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[30rem] w-[45rem] rounded-full bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-black italic uppercase tracking-wider text-white sm:text-5xl">
            METODE KERJA KAMI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm font-medium leading-6 text-slate-300">
            Siklus pengembangan profesional yang dirancang untuk memastikan kualitas terbaik di setiap detailnya.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Connects precisely from center of first icon to center of last icon) */}
          <div className="absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-500/20 via-indigo-400/50 to-indigo-500/20" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {[
              {
                tag: "DISCOVER",
                title: "Diskusi & Konsultasi",
                description: "Kami menganalisis visi, target audiens, dan kebutuhan teknis bisnis Anda untuk membangun fondasi yang kuat.",
                icon: <SearchIcon className="h-5 w-5 text-slate-950" />,
                align: "right",
              },
              {
                tag: "DESIGN",
                title: "Estimasi & Penawaran",
                description: "Transformasi ide menjadi desain visual yang premium, user-friendly, dan berorientasi pada konversi.",
                icon: <DesignIcon className="h-5 w-5 text-slate-950" />,
                align: "left",
              },
              {
                tag: "DEAL & COMMITMENT",
                title: "Deal & DP Project",
                description: "Kesepakatan project, pembayaran DP awal, serta pengumpulan materi (logo, teks, & brief).",
                icon: <DealIcon className="h-5 w-5 text-slate-950" />,
                align: "right",
              },
              {
                tag: "DEVELOPMENT",
                title: "Pengerjaan & Code",
                description: "Proses coding menggunakan teknologi Next.js/Laravel terbaru untuk kecepatan maksimal dan SEO-ready.",
                icon: <CodeIcon className="h-5 w-5 text-slate-950" />,
                align: "left",
              },
              {
                tag: "OPTIMIZATION",
                title: "Testing, Launch & Support",
                description: "Pengujian menyeluruh mulai dari kecepatan loading, responsivitas mobile, rilis online, hingga garansi maintenance.",
                icon: <RocketIcon className="h-5 w-5 text-slate-950" />,
                align: "right",
              },
            ].map((step) => (
              <div
                key={step.tag}
                className="relative flex flex-col md:flex-row md:items-center min-h-[100px]"
              >
                {/* Center Icon Badge (Sitting directly on top of the vertical line) */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10 transition-transform duration-300 hover:scale-110">
                  {step.icon}
                </div>

                {/* Card Content Box */}
                <div
                  className={`w-full pt-14 md:pt-0 ${
                    step.align === "right"
                      ? "md:w-1/2 md:ml-auto md:pl-10 text-left"
                      : "md:w-1/2 md:mr-auto md:pr-10 text-left md:text-right"
                  }`}
                >
                  <div className="inline-block w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.06] hover:shadow-[0_15px_35px_rgba(99,102,241,0.12)]">
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">
                      {step.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-bold italic text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#040316] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute -top-32 left-[-5%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-indigo-600/25 via-purple-600/15 to-transparent blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 right-[-5%] h-[28rem] w-[28rem] rounded-full bg-emerald-600/15 blur-[130px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">KEUNGGULAN KAMI</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Kenapa Memilih PROJEKIN?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, idx) => (
            <article key={feature.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] hover:border-indigo-500/50 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-transform duration-300 group-hover:scale-110">
                {idx === 0 && <PriceIcon className="h-6 w-6 text-indigo-300" />}
                {idx === 1 && <RevisionIcon className="h-6 w-6 text-indigo-300" />}
                {idx === 2 && <DomainIcon className="h-6 w-6 text-indigo-300" />}
                {idx === 3 && <ZapSpeedIcon className="h-6 w-6 text-indigo-300" />}
                {idx === 4 && <SupportIcon className="h-6 w-6 text-indigo-300" />}
                {idx === 5 && <CustomLayoutIcon className="h-6 w-6 text-indigo-300" />}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">{feature.title}</h3>
              <p className="mt-2.5 text-xs leading-6 text-slate-300 sm:text-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) setVisibleCount(3);
        else if (window.innerWidth >= 768) setVisibleCount(2);
        else setVisibleCount(1);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#040316] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute -top-32 right-[10%] h-[32rem] w-[32rem] rounded-full bg-amber-500/10 blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 left-[10%] h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[140px] animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">ULASAN & KEPUASAN KLIEN</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Apa Kata Klien & Mahasiswa?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl">
              Feedback asli dari klien bisnis & mahasiswa yang telah dipercayakan kepada PROJEKIN.
            </p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-600/30 shadow-lg active:scale-95"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-indigo-400 hover:bg-indigo-600/30 shadow-lg active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Swiper Carousel Container */}
        <div
          className="overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex">
                <article className="w-full flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-indigo-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]">
                  <div>
                    <div className="mb-4 flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <StarIcon key={idx} />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm leading-6 text-slate-200">“{testimonial.quote}”</p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{testimonial.business}</div>
                    <div className="mt-1.5 inline-block rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-indigo-300 border border-indigo-500/30">
                      {testimonial.project}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Swiper Pagination Dots (Only valid maxIndex + 1 dots) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide page ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#030211] py-24 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[50rem] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-cyan-500/15 blur-[150px] animate-float-slow" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-left sm:text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">PERTANYAAN UMUM</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Yang sering ditanya
          </h2>
          <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-300">
            Boleh tanya-tanya juga langsung di WhatsApp — <span className="text-indigo-300 font-semibold">konsultasi gratis, tanpa komitmen.</span>
          </p>
        </div>

        <div className="space-y-10">
          {faqCategories.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 pl-1">
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((faq, itemIdx) => (
                  <details
                    key={faq.question}
                    open={groupIdx === 0 && itemIdx === 0}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-6 py-4 text-left text-sm sm:text-base font-bold text-white marker:content-none group-open:text-indigo-300">
                      <span>{faq.question}</span>
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-base font-bold text-white transition-all duration-300 group-open:rotate-45 group-open:bg-indigo-600 group-open:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-1 text-xs leading-6 text-slate-300 sm:text-sm border-t border-white/5 mt-1">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-gradient-to-b from-[#040316] to-[#02010c] py-28 text-white border-t border-white/10">
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Ambient Mesh Glows with Float Animation */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[55rem] rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/20 blur-[150px] animate-float-slow" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-400">MULAI DISKUSI PROJEK</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-6xl">
          Siap Membawa Bisnis Anda ke Level Berikutnya?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg">
          Konsultasikan ide bisnis Anda bersama tim pakar kami. Kami siap memberikan gambaran solusi teknis dan estimasi harga yang paling efisien.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis%20mengenai%20projek%20saya."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]"
          >
            💬 Konsultasi Gratis via WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs text-slate-400">Fast Response • Bebas Konsultasi Tanpa Komitmen</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02010c] text-slate-400">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] lg:px-8">
        <div>
          <ProjekinBrandLogo />
          <p className="mt-4 max-w-sm text-xs leading-6 text-slate-400 sm:text-sm">
            Partner digital terpercaya untuk membangun website kustom, landing page performa tinggi, dan aplikasi bisnis modern.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Navigasi</h3>
          <ul className="mt-4 space-y-3 text-xs sm:text-sm">
            {[
              ["Home", "#home"],
              ["Layanan", "#layanan"],
              ["Paket & Biaya", "#paket"],
              ["Portfolio", "#portfolio"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors duration-200 hover:text-indigo-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Kontak</h3>
          <ul className="mt-4 space-y-3 text-xs sm:text-sm">
            <li>WhatsApp Support</li>
            <li>Email Technical</li>
            <li>Instagram Official</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Hubungi Kami</h3>
          <div className="mt-4 space-y-3 text-xs sm:text-sm">
            <a href="https://wa.me/6285766935413" target="_blank" rel="noreferrer" className="block transition-colors duration-200 hover:text-indigo-300">+62 857-6693-5413</a>
            <a href="mailto:hello@projekin.id" className="block transition-colors duration-200 hover:text-indigo-300">hello@projekin.id</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block transition-colors duration-200 hover:text-indigo-300">@projekin.id</a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#010108]">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          © 2026 PROJEKIN. All rights reserved. Ultra-Premium Digital Development Partner.
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex items-center animate-float-slow sm:bottom-6 sm:right-6">
      <a
        href="https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20diskusi%20dan%20konsultasi%20project."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-slate-950/90 p-1.5 pl-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-emerald-500/60 hover:bg-slate-950 hover:shadow-[0_25px_50px_rgba(16,185,129,0.3)]"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-emerald-400">
          HUBUNGI SEKARANG
        </span>
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.9)] animate-pulse">
          <WhatsAppIcon className="h-5 w-5 fill-current" />
        </span>
      </a>
    </div>
  );
}
