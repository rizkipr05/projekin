import { navItems } from "./data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="PROJEKIN home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/15">
            P
          </div>
          <span className="text-xl font-black tracking-tight text-slate-950">PROJEKIN</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => {
            const href =
              item === "Home"
                ? "#home"
                : item === "Layanan"
                  ? "#layanan"
                  : item === "Paket"
                    ? "#paket"
                    : item === "Portfolio"
                      ? "#portfolio"
                      : "#faq";

            return (
              <a key={item} href={href} className="transition hover:text-slate-950">
                {item}
              </a>
            );
          })}
        </div>

        <a
          href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Konsultasi Gratis <span className="ml-1">→</span>
        </a>
      </nav>
    </header>
  );
}
