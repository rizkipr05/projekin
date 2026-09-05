function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.06] hover:shadow-[0_15px_30px_rgba(99,102,241,0.15)]">
      <div className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-indigo-300 transition">{value}</div>
      <div className="text-xs font-medium text-slate-400 mt-1">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#040316] py-16 text-white sm:py-24 lg:py-28 bg-grid-pattern">
      {/* Ambient Lighting & Glow Effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[35rem] w-[50rem] rounded-full bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-400/15 blur-[140px] animate-float-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px] animate-float-reverse" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left Hero Content */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-md animate-pulse-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            SOLUSI DIGITAL
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Punya Ide Digital?
            <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Kami Wujudkan.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
            Bangun website & aplikasi kustom berstandar tinggi untuk bisnis Anda, serta layanan Joki Tugas IT, Skripsi, & Project Koding terpercaya.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Mulai Rp 500 Ribuan • Free Domain & Hosting
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] transition hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              Garansi 3x Revisi Gratis
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              🎓 Joki Tugas IT, Skripsi & TA
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-[0_0_45px_rgba(99,102,241,0.7)]"
            >
              Konsultasi Gratis <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/[0.08]"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>

        {/* Right Dual Device Mockup (MacBook Laptop + Realistic iPhone Smartphone) */}
        <div className="relative pt-6 pb-12 sm:py-0">
          {/* Ambient Glow behind Devices */}
          <div className="pointer-events-none absolute -inset-6 rounded-[3.5rem] bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-cyan-500/15 blur-3xl animate-pulse-slow" />

          {/* Laptop Container (MacBook Style) */}
          <div className="relative mx-auto max-w-lg sm:max-w-xl">
            {/* Laptop Screen Frame */}
            <div className="relative rounded-t-[1.8rem] border-4 border-slate-700/80 bg-slate-950 p-2.5 sm:p-3.5 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
              {/* Laptop Camera Notch & Sensor */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-800 border border-slate-700" />
                <span className="h-1 w-1 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Laptop Display Content */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 text-white pt-3.5 shadow-2xl">
                {/* Browser Address Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-white/10 bg-slate-900/90 px-3.5 py-0.5 text-[10px] font-mono text-slate-300 shadow-inner">
                    <span className="text-emerald-400">https://</span>projekin.web.id
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-indigo-300 tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>LIVE ENGINE</span>
                  </div>
                </div>

                {/* Simulated Live Web App View */}
                <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-indigo-950/50 via-slate-950 to-slate-950">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                      <span className="text-indigo-400">Projek</span><span className="text-purple-400">in</span>
                    </div>
                    <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[9px] font-bold text-indigo-300 border border-indigo-500/30">
                      High-Performance App
                    </span>
                  </div>

                  <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/70 to-slate-900/90 p-4 shadow-xl">
                    <div className="text-[10px] font-black uppercase tracking-wider text-indigo-400">LIVE PREVIEW STATUS</div>
                    <div className="mt-1 text-base sm:text-lg font-black text-white">Custom Web & Mobile Development</div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl bg-white/5 p-2 border border-white/10">
                        <div className="text-[9px] text-slate-400 font-medium">PageSpeed</div>
                        <div className="text-xs sm:text-sm font-black text-emerald-400">100/100</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2 border border-white/10">
                        <div className="text-[9px] text-slate-400 font-medium">Load Time</div>
                        <div className="text-xs sm:text-sm font-black text-cyan-300">0.4s</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2 border border-white/10">
                        <div className="text-[9px] text-slate-400 font-medium">SEO Score</div>
                        <div className="text-xs sm:text-sm font-black text-purple-300">Optimal</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text.xs">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-bold">✨ UI/UX Kustom</span>
                      <span className="text-emerald-400 font-bold text-xs">✓</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-bold">⚡ Clean Code</span>
                      <span className="text-emerald-400 font-bold text-xs">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base Chassis & Hinge */}
            <div className="relative mx-auto h-3.5 w-[106%] -ml-[3%] rounded-b-2xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 border-t border-slate-500/60 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex justify-center">
              <div className="h-1.5 w-20 rounded-b-md bg-slate-800 border-x border-b border-slate-600/70" />
            </div>
          </div>

          {/* Ultra-Realistic iPhone Smartphone Mockup (Floating & Overlapping Bottom Right) */}
          <div className="absolute -bottom-6 right-0 sm:-right-6 w-44 sm:w-52 rounded-[2.6rem] border-[6px] border-slate-700/90 bg-slate-950 p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(99,102,241,0.25)] backdrop-blur-2xl z-20 transition-transform duration-300 hover:scale-105 animate-float-slow">
            {/* Side Hardware Buttons */}
            <span className="absolute -left-[8px] top-14 h-8 w-[3px] rounded-l-md bg-slate-600/80" />
            <span className="absolute -left-[8px] top-24 h-8 w-[3px] rounded-l-md bg-slate-600/80" />
            <span className="absolute -right-[8px] top-16 h-12 w-[3px] rounded-r-md bg-slate-600/80" />

            {/* Phone Inner Display Container */}
            <div className="overflow-hidden rounded-[2.1rem] border border-white/10 bg-slate-950 text-white flex flex-col justify-between min-h-[320px] sm:min-h-[360px] shadow-inner relative">
              
              {/* Dynamic Island Notch */}
              <div className="pt-2 px-3 flex items-center justify-between text-[8px] text-slate-400 font-medium z-30">
                <span>09:41</span>
                {/* Dynamic Island Pill */}
                <div className="h-3.5 w-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-between px-2 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                  <span className="h-1 w-1 rounded-full bg-indigo-400/80 animate-pulse" />
                </div>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span className="inline-block h-2 w-3 rounded-sm border border-slate-400 p-0.5">
                    <span className="block h-full w-full bg-emerald-400 rounded-xs" />
                  </span>
                </div>
              </div>

              {/* Mobile Screen App UI */}
              <div className="p-3 space-y-2.5 my-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="text-[10px] font-black text-white flex items-center gap-1">
                    <span className="text-indigo-400">Projek</span><span className="text-purple-400">in</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[8px] font-extrabold text-emerald-300 border border-emerald-500/30">
                    Active
                  </span>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-purple-950/80 p-2.5 text-center border border-indigo-500/30 shadow-lg">
                  <div className="text-[10px] font-black text-white">100% Mobile Responsive</div>
                  <p className="mt-1 text-[8px] text-slate-300 leading-tight">Solusi Digital Cepat & Sleek di HP</p>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[8px] font-extrabold text-emerald-300 border border-emerald-500/30">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                    <span>Instant Load 0.4s</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[9px]">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">📱 Mobile Native UI</span>
                    <span className="text-emerald-400 font-black">✓</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">⚡ Fast Performance</span>
                    <span className="text-emerald-400 font-black">✓</span>
                  </div>
                </div>
              </div>

              {/* Bottom iOS Home Indicator Pill */}
              <div className="pb-2 text-center">
                <div className="mx-auto h-1 w-20 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Stats Footer Banner */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6 mb-6">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              SOLUSI DIGITAL TERPERCAYA UNTUK BISNIS & MAHASISWA
            </div>
            <div className="flex flex-wrap gap-2">
              {["UMKM Modern", "Startup", "Personal Brand", "Enterprise", "Tugas IT & Skripsi"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="Fast Delivery" label="Pengerjaan Kilat 3-7 Hari Kerja" />
            <StatCard value="Harga Terjangkau" label="Mulai Rp 500rb & Promo Rilis" />
            <StatCard value="100% Responsive" label="Tampilan Rapi di HP & Desktop" />
            <StatCard value="Garansi Support" label="Free 3x Revisi & Pendampingan" />
          </div>
        </div>
      </div>
    </section>
  );
}
