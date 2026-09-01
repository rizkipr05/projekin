"use client";

import { useState, useEffect } from "react";
import { ProjekinBrandLogo } from "./icons";

const mobileNavItems = [
  { name: "Home", href: "#home", icon: "🏠", badge: null },
  { name: "Layanan", href: "#layanan", icon: "⚡", badge: "Bisnis & IT" },
  { name: "Paket & Biaya", href: "#paket", icon: "💎", badge: "Promo" },
  { name: "Portfolio", href: "#portfolio", icon: "🎨", badge: "Showcase" },
  { name: "Testimonial", href: "#testimonial", icon: "⭐", badge: "Review" },
  { name: "FAQ", href: "#faq", icon: "❓", badge: "Tanya Jawab" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* ─── Top Sticky Navbar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#040316]/90 backdrop-blur-2xl text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <a href="#home" aria-label="PROJEKIN Home" className="transition hover:opacity-90 active:scale-95">
            <ProjekinBrandLogo />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            {mobileNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-1 transition duration-200 hover:text-indigo-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-purple-400 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition duration-300 hover:scale-105 sm:px-5 sm:py-2.5"
            >
              Konsultasi <span className="ml-1">→</span>
            </a>

            {/* Hamburger – mobile only */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Navigation Menu"
              className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/10 p-2.5 text-indigo-300 transition duration-300 hover:bg-indigo-500/20 hover:text-white active:scale-95 md:hidden"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Sidebar – OUTSIDE <header> so fixed works correctly ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-full w-[82%] max-w-xs flex-col justify-between bg-[#09051d] border-l border-white/10 shadow-[−20px_0_60px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Header inside sidebar */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <ProjekinBrandLogo />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Sidebar"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Items */}
          <div className="px-4 pt-5 pb-2">
            <p className="mb-3 px-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
              NAVIGASI PROJEKIN
            </p>
            <div className="space-y-2">
              {mobileNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-600/20 active:scale-[0.98]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base leading-none">{item.icon}</span>
                    <span className="group-hover:text-indigo-300 transition-colors">{item.name}</span>
                  </span>
                  {item.badge ? (
                    <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[9px] font-extrabold text-indigo-300 border border-indigo-500/30">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all">→</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-white/10 px-4 py-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
              Free Domain &amp; Hosting
            </span>
            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-[10px] font-bold text-purple-300 border border-purple-500/20">
              🎓 Joki Tugas IT &amp; Skripsi
            </span>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(16,185,129,0.25)] transition hover:scale-[1.02] active:scale-95"
          >
            <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Konsultasi WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
