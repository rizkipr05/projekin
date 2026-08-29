
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.03)] backdrop-blur-sm">
      <div className="text-xl font-bold text-slate-950">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[500px] w-[1200px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_60%)] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm">
            DIGITAL DEVELOPMENT PARTNER
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
            Punya Ide Digital?
            <span className="mt-2 block text-slate-700">Kami Wujudkan.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            Bangun website dan aplikasi profesional untuk bisnis Anda tanpa harus mengeluarkan budget besar.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-600" />
            Mulai Rp500 Ribuan
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Lihat Portfolio
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">Website & Aplikasi</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">Affordable Pricing</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">Support After Launch</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-[0_35px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 text-white">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-200">
                  Dashboard
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Performance</p>
                      <p className="mt-1 text-2xl font-bold">+42%</p>
                    </div>
                    <div className="rounded-xl bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200">Growth</div>
                  </div>
                  <div className="space-y-2">
                    {[52, 70, 46, 84, 96].map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-6 text-[10px] text-slate-300">{i + 1}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: `${h}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      <span>Sales</span>
                      <span>Live</span>
                    </div>
                    <div className="mt-4 text-3xl font-bold">Rp24M</div>
                    <div className="mt-4 h-12 rounded-xl bg-gradient-to-r from-cyan-400/30 via-indigo-400/20 to-transparent p-1">
                      <div className="flex h-full items-end gap-1">
                        {[18, 32, 20, 46, 58, 72, 80].map((bar, idx) => (
                          <span key={idx} className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-400 to-cyan-300" style={{ height: `${bar}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      <span>Mobile</span>
                      <span>App</span>
                    </div>
                    <div className="mt-4 rounded-[1.25rem] bg-slate-900 p-3 shadow-inner shadow-slate-950/30">
                      <div className="mx-auto h-24 w-14 rounded-[1.2rem] border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-950 p-2">
                        <div className="mx-auto mb-2 h-1.5 w-7 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                          <div className="h-7 rounded-lg bg-indigo-500/80" />
                          <div className="h-14 rounded-lg bg-gradient-to-b from-cyan-400/80 to-indigo-500/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 bottom-8 w-40 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_35px_rgba(15,23,42,0.1)] sm:-left-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">UI Kit</span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-2">
              <div className="h-3 rounded-full bg-slate-200" />
              <div className="h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400" />
              <div className="h-3 w-2/3 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-sm font-semibold text-slate-500">Dipercaya untuk membangun berbagai kebutuhan digital</div>
            <div className="flex flex-wrap gap-2">
              {['UMKM', 'Startup', 'Personal Brand', 'Company', 'Online Store'].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="50+ Project" label="Telah dibangun" />
            <StatCard value="4+ Layanan" label="Solusi digital" />
            <StatCard value="100% Responsive" label="Semua perangkat" />
            <StatCard value="Support" label="After launch" />
          </div>
        </div>
      </div>
    </section>
  );
}
