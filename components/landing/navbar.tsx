"use client";

import { useState, useEffect } from "react";
import { ProjekinBrandLogo } from "./icons";

const mobileNavItems = [
  { name: "Home", href: "#home", badge: null },
  { name: "Layanan", href: "#layanan", badge: "Bisnis & IT" },
  { name: "Paket & Biaya", href: "#paket", badge: "Promo" },
  { name: "Portfolio", href: "#portfolio", badge: "Showcase" },
  { name: "Testimonial", href: "#testimonial", badge: "Review" },
  { name: "FAQ", href: "#faq", badge: "Tanya Jawab" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "layanan", "paket", "portfolio", "testimonial", "faq"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key or screen resize to desktop
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040316]/90 backdrop-blur-2xl text-white transition-all duration-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <a
            href="#home"
            aria-label="PROJEKIN Home"
            onClick={() => setIsOpen(false)}
            className="transition hover:opacity-90 active:scale-95"
          >
            <ProjekinBrandLogo />
          </a>

          {/* Desktop Navigation Links */}
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

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Desktop CTA */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
              Konsultasi Gratis <span className="ml-1.5 font-bold">→</span>
            </a>

            {/* Mobile Header Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Mobile Menu"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/40 bg-indigo-600/20 px-3.5 py-2 text-xs font-bold tracking-wider text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-md transition duration-300 hover:bg-indigo-600/30 hover:text-white active:scale-95 md:hidden"
            >
              <span>{isOpen ? "TUTUP" : "MENU"}</span>
              {isOpen ? (
                <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Fullscreen Slide-Down Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 top-[57px] z-40 bg-[#040316]/95 backdrop-blur-3xl md:hidden flex flex-col justify-between border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto px-5 py-6 pb-24"
            style={{ height: "calc(100vh - 57px)" }}
          >
            {/* Nav Links Grid */}
            <div className="space-y-4">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 pb-2 border-b border-white/10">
                MENU NAVIGASI PROJEKIN
              </div>
              <div className="grid gap-2.5">
                {mobileNavItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-base font-bold text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-600/20 active:scale-98"
                  >
                    <span className="group-hover:text-indigo-300 transition-colors">{item.name}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-extrabold text-indigo-300 border border-indigo-500/30">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-slate-500 group-hover:text-indigo-300 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Drawer Callouts */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Free Domain & Hosting
                </span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-bold text-purple-300 border border-purple-500/20">
                  🎓 Joki Tugas IT & Skripsi
                </span>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis%20via%20HP."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] transition duration-300 hover:scale-[1.02] active:scale-95"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Konsultasi WhatsApp Direct
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom App Navigation Bar (Fixed Native App Style for Mobile) */}
      <nav 
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md rounded-full border border-white/15 bg-[#080521]/90 p-1.5 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.25)] md:hidden transition-transform duration-300"
      >
        <div className="flex items-center justify-around">
          {/* Home */}
          <a
            href="#home"
            className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
              activeSection === "home"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21v-6a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v6" />
            </svg>
            <span>Home</span>
          </a>

          {/* Layanan */}
          <a
            href="#layanan"
            className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
              activeSection === "layanan"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span>Layanan</span>
          </a>

          {/* Paket */}
          <a
            href="#paket"
            className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
              activeSection === "paket"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-6h6m4.242-4.242a9 9 0 11-12.728 0 9 9 0 0112.728 0z" />
            </svg>
            <span>Paket</span>
          </a>

          {/* Portfolio */}
          <a
            href="#portfolio"
            className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
              activeSection === "portfolio"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span>Portfolio</span>
          </a>

          {/* WA Direct */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20via%20HP."
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-0.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-500/30"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Chat</span>
          </a>
        </div>
      </nav>
    </>
  );
}
