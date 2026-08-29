import { ArrowIcon, CheckIcon, StarIcon } from "./icons";
import { features, pricingPlans, projectCards, serviceItems, techStack, testimonials } from "./data";

export function ProblemSection() {
  return (
    <section id="layanan" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Problem</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
          Bisnis Anda Sudah Siap Go Digital?
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
          {[
            "Belum punya website",
            "Website terlihat kurang profesional",
            "Proses bisnis masih manual",
            "Kesulitan menjangkau pelanggan secara online",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <span className="text-sm font-bold">!</span>
              </span>
              <span className="text-base font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6 shadow-[0_20px_50px_rgba(79,70,229,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Solution</p>
          <h3 className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
            PROJEKIN membantu mengubah ide dan kebutuhan bisnis menjadi produk digital yang siap digunakan.
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Strategy", "Kebutuhan bisnis dipetakan"],
              ["Design", "UI/UX modern dan jelas"],
              ["Launch", "Siap dipakai & scale"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">{title}</div>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Layanan</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Solusi Digital untuk Berbagai Kebutuhan
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service) => (
            <article key={service.title} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 text-indigo-200 ring-1 ring-white/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M5 18.5V7.5l7-4 7 4v11l-7 4-7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 4.5v15" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 7.5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-indigo-200">{service.price}</span>
                  <a href={service.href} className="inline-flex items-center gap-1 font-medium text-white transition group-hover:text-indigo-200">
                    Pelajari Selengkapnya <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="paket" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Paket</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
          Pilih Paket yang Sesuai Kebutuhan
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-[2rem] border p-5 shadow-[0_18px_35px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 ${
              plan.highlight
                ? "border-indigo-200 bg-slate-950 text-white shadow-[0_20px_40px_rgba(79,70,229,0.18)]"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            {plan.tag && (
              <span
                className={`absolute right-5 top-5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                  plan.highlight ? "bg-indigo-500 text-white" : "bg-slate-900 text-white"
                }`}
              >
                {plan.tag}
              </span>
            )}

            <div className="mt-10">
              <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.name}
              </p>
              <h3 className={`mt-4 text-2xl font-black ${plan.highlight ? "text-white" : "text-slate-950"}`}>{plan.title}</h3>
              <div className={`mt-5 text-3xl font-black ${plan.highlight ? "text-white" : "text-slate-950"}`}>{plan.price}</div>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? "bg-indigo-500/20 text-indigo-200" : "bg-indigo-50 text-indigo-600"}`}>
                      <CheckIcon />
                    </span>
                    <span className={plan.highlight ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-indigo-500 text-white hover:bg-indigo-400"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">*Harga dapat menyesuaikan fitur, tingkat kompleksitas, dan kebutuhan project.*</p>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Portfolio</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Beberapa Project yang Kami Bangun
            </h2>
          </div>
          <a href="#kontak" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            Lihat semua project <ArrowIcon />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((project) => (
            <article key={project.name} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
              <div className={`h-56 bg-gradient-to-br ${project.color} p-4`}>
                <div className="h-full rounded-[1.4rem] border border-slate-200/70 bg-white/80 p-3 shadow-inner shadow-white/40">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-28 rounded-full bg-slate-900/10" />
                    <div className="grid grid-cols-[1.4fr_0.6fr] gap-3">
                      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-500 p-3 text-white">
                        <div className="mb-5 h-14 rounded-xl bg-white/10" />
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(3)].map((_, idx) => (
                            <div key={idx} className="h-8 rounded-lg bg-white/10" />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-12 rounded-xl bg-slate-900/10" />
                        <div className="h-9 rounded-xl bg-slate-900/10" />
                        <div className="h-9 rounded-xl bg-slate-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-950">{project.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{project.description}</p>
                <a href="#kontak" className="mt-5 inline-flex items-center gap-2 font-semibold text-slate-900 transition group-hover:text-indigo-600">
                  View Project <ArrowIcon />
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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Process</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
          Dari Ide Menjadi Produk Digital
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {[
          ["01", "Konsultasi", "Ceritakan kebutuhan dan ide project Anda."],
          ["02", "Planning", "Kami menentukan fitur, teknologi, dan estimasi."],
          ["03", "Development", "Project mulai dikembangkan sesuai kesepakatan."],
          ["04", "Launch", "Website atau aplikasi siap digunakan."],
        ].map(([number, title, description], index) => (
          <div key={title} className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
            {index < 3 && <div className="absolute -right-6 top-12 hidden h-px w-12 bg-slate-200 lg:block" />}
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{number}</div>
            <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Why us</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Kenapa PROJEKIN?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_15px_35px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-indigo-200">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <CheckIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Technology</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
          Built With Modern Technology
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_15px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Testimoni</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Apa Kata Mereka?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-5 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </div>
              <p className="text-base leading-8 text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-300">{testimonial.business}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-indigo-300">{testimonial.project}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">FAQ</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>

      <div className="space-y-3">
        {[
          'Apakah benar mulai dari Rp500.000?',
          'Apakah bisa request desain?',
          'Apakah domain dan hosting termasuk?',
          'Berapa lama pengerjaan?',
          'Apakah bisa membuat sistem custom?',
          'Apakah tersedia maintenance setelah website selesai?',
          'Apakah bisa membuat aplikasi mobile?',
        ].map((question, index) => (
          <details key={question} open={index === 0} className="group rounded-[1.5rem] border border-slate-200 bg-white p-1 shadow-[0_10px_25px_rgba(15,23,42,0.03)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.2rem] px-5 py-4 text-left text-base font-semibold text-slate-800 marker:content-none">
              {question}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-600">
              {index === 0 && 'Ya, paket starter kami dimulai dari Rp500.000 untuk kebutuhan landing page sederhana dan siap digunakan.'}
              {index === 1 && 'Tentu. Kami dapat menyesuaikan layout, warna, dan visual sesuai kebutuhan brand Anda.'}
              {index === 2 && 'Domain dan hosting umumnya dapat ditambahkan sesuai kebutuhan. Kami juga bisa membantu pilihan terbaik untuk kebutuhan bisnis Anda.'}
              {index === 3 && 'Lama pengerjaan tergantung kebutuhan project dan tingkat kompleksitas. Biasanya mulai dari beberapa hari hingga beberapa minggu.'}
              {index === 4 && 'Bisa. Kami juga menangani sistem custom, web app, dashboard, dan integrasi API sesuai kebutuhan.'}
              {index === 5 && 'Ya, tersedia support maintenance lanjutan sesuai paket yang Anda pilih.'}
              {index === 6 && 'Bisa, kami dapat membantu pembuatan aplikasi mobile dengan pendekatan yang sesuai kebutuhan produk.'}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section id="kontak" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Konsultasi</p>
        <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
          Siap Membawa Bisnis Anda ke Level Berikutnya?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Ceritakan ide dan kebutuhan Anda. Kami bantu menentukan solusi digital yang paling sesuai dengan budget Anda.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20gratis."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
          >
            💬 Konsultasi Gratis via WhatsApp
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">Respon cepat • Tanpa biaya konsultasi awal</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
              P
            </div>
            <span className="text-xl font-black tracking-tight text-slate-950">PROJEKIN</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            Partner digital untuk membangun website dan aplikasi profesional.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Menu</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {[
              ["Home", "#home"],
              ["Layanan", "#layanan"],
              ["Paket", "#paket"],
              ["Portfolio", "#portfolio"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition hover:text-slate-950">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>WhatsApp</li>
            <li>Email</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="block hover:text-slate-950">+62 812-3456-7890</a>
            <a href="mailto:hello@projekin.id" className="block hover:text-slate-950">hello@projekin.id</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:text-slate-950">@projekin.id</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 PROJEKIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
