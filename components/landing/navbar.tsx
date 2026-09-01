import { ProjekinBrandLogo } from "./icons";
import { navItems } from "./data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="PROJEKIN home">
          <ProjekinBrandLogo />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
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
              <a
                key={item}
                href={href}
                className="transition duration-200 hover:text-indigo-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            );
          })}
        </div>

        <a
          href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
        >
          Konsultasi Gratis <span className="ml-1.5">→</span>
        </a>
      </nav>
    </header>
  );
}
