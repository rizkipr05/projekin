export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categoryBadge: string;
  href: string;
  features: string[];
  tech: string[];
  waMessage: string;
}

export type PricingCategory = "agency" | "student";

export const navItems = ["Home", "Layanan", "Paket", "Portfolio", "FAQ"];

export const serviceItems = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Website, Landing Page, E-Commerce, & Web Application",
    description: "Pengembangan Website, Landing Page, E-Commerce, & Web Application modern berkinerja tinggi (Next.js, React, Laravel).",
    categoryBadge: "Landing Page & Web App",
    href: "#paket",
    features: [
      "Free Domain (.com / .id) & Hosting Super Cepat 1 Tahun Pertama",
      "Desain UI/UX Eksklusif Modern & High-Conversion (Bukan Template)",
      "Optimasi SEO Google & Cepat Diakses di HP/Desktop",
      "Fitur Form Kontak & Tombol WhatsApp CTA Direct",
      "Integrasi CMS / Dashboard Admin untuk Edit Konten (Opsional)",
      "Garansi 3x Revisi Gratis & Support Pendampingan Teknis",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Laravel", "Node.js"],
    waMessage: "Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20detail%20mengenai%20jasa%20Web%20Development.",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "Aplikasi Android & iOS Native / Cross-Platform",
    description: "Pengembangan Aplikasi Mobile kustom untuk Android & iOS (React Native / Flutter) dengan tampilan UI/UX intuitif.",
    categoryBadge: "Android & iOS Native",
    href: "#kontak",
    features: [
      "Desain Tampilan UI/UX Modern, Sleek, & Intuitive",
      "Performa Tinggi & Fast Loading (React Native / Flutter Framework)",
      "Integrasi Login/Register, Profile, & Push Notification",
      "Integrasi Realtime Database & RESTful Backend API",
      "Bantuan Proses Rilis ke Google Play Store & Apple App Store",
      "Garansi Perbaikan Bug & Maintenance After Launch",
    ],
    tech: ["React Native", "Flutter", "Firebase", "REST API", "PostgreSQL"],
    waMessage: "Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20detail%20mengenai%20jasa%20Mobile%20App%20Development.",
  },
  {
    id: "database-api",
    title: "Database & System API",
    subtitle: "Arsitektur Database, Backend API, & Sistem Kasir/POS",
    description: "Desain arsitektur database (MySQL, PostgreSQL), RESTful/GraphQL API, integrasi cloud server & sistem kasir/POS.",
    categoryBadge: "API & System Architecture",
    href: "#kontak",
    features: [
      "Arsitektur Database Terstruktur, Aman, & High-Performance Query",
      "Pengembangan RESTful / GraphQL API dengan Keamanan JWT Auth",
      "Integrasi Payment Gateway (Xendit, Midtrans, ToyyibPay, dll)",
      "Integrasi Sistem Kasir / POS & Stok Manajemen Otomatis",
      "Deployment Server Cloud (AWS, DigitalOcean, VPS Linux)",
      "Dokumentasi API Lengkap (Postman / Swagger Collection)",
    ],
    tech: ["MySQL", "PostgreSQL", "Node.js", "Express", "Laravel", "Redis"],
    waMessage: "Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20detail%20mengenai%20jasa%20Database%20%26%20System%20API.",
  },
  {
    id: "ai-automation",
    title: "AI & Automation Solutions",
    subtitle: "Integrasi OpenAI / LLM, Chatbot WhatsApp, & Workflow AI",
    description: "Integrasi sistem AI (OpenAI / LLM API), Chatbot WhatsApp otomatisasi bisnis, workflow automation, & analytics dashboard.",
    categoryBadge: "AI & Bot Automation",
    href: "#kontak",
    features: [
      "Integrasi Model AI (OpenAI GPT-4, Claude, Custom LLM API)",
      "Bot WhatsApp Otomatisasi Pesan & Customer Support 24/7",
      "Workflow Automation (Auto Invoice, Auto Email, Web Scraping)",
      "Dashboard Analytics AI & Visualisasi Data Bisnis Interactive",
      "Otomatisasi Notifikasi Transaksi & Monitoring Realtime",
      "Pelatihan & Pendampingan Penggunaan Sistem AI Bisnis",
    ],
    tech: ["OpenAI API", "Python", "LangChain", "WhatsApp API", "Node.js"],
    waMessage: "Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20detail%20mengenai%20jasa%20AI%20%26%20Automation%20Solutions.",
  },
  {
    id: "academic-project",
    title: "Tugas Kuliah & Skripsi IT",
    subtitle: "Jasa Joki Koding, Practical, UTS/UAS, & Skripsi IT",
    description: "Melayani semua jenis tugas koding praktikum, project UTS/UAS, database SQL/UML, AI/Machine Learning, hingga Skripsi IT lengkap dengan source code, database, laporan bab 1-5, & garansi revisi.",
    categoryBadge: "Tugas Kuliah & Skripsi IT",
    href: "#kontak",
    features: [
      "Tugas Praktikum & Koding Harian (C, C++, Java, Python, PHP, HTML/CSS, SQL)",
      "Project UTS / UAS Web & Mobile App (Laravel, React, Flutter, Node, Express)",
      "Skripsi IT, Tugas Akhir (TA), & Mini Project Fullstack Complete",
      "Perancangan Database SQL/NoSQL, ERD, Normalisasi, & Diagram UML/Flowchart",
      "Project AI, Machine Learning, Data Science, & Bot (Python, Colab)",
      "Laporan (.docx) Bab 1 s/d Bab 5 + Video Tutorial & Penjelasan Program",
      "Garansi Revisi Dosen & Bimbingan Private via Zoom / Meet",
    ],
    tech: ["PHP", "Laravel", "Python", "Java", "C++", "HTML/CSS/JS", "MySQL", "Flutter"],
    waMessage: "Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20mengenai%20Jasa%20Tugas%20Kuliah%20%2F%20Skripsi%20IT.",
  },
];

export const agencyPricingPlans = [
  {
    name: "STARTER",
    title: "Landing Page",
    price: "Rp500.000",
    tag: null,
    features: [
      "Free Domain & Hosting (1 Thn)",
      "Garansi 3x-4x Revisi Gratis",
      "1 Landing Page Responsive",
      "Informasi Bisnis & Layanan",
      "Tombol WhatsApp CTA Direct",
      "Integrasi Google Maps",
      "Basic SEO & Fast Load",
      "Garansi Technical Support",
    ],
    cta: "Mulai Sekarang",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20mulai%20paket%20Starter.",
    highlight: false,
  },
  {
    name: "BUSINESS",
    title: "Company Profile",
    price: "Rp1.000.000",
    tag: "Recommended",
    features: [
      "Free Domain & Hosting (1 Thn)",
      "Garansi 3x Revisi Gratis",
      "Multi-page Website (Compro)",
      "Desain UI/UX Eksklusif",
      "Halaman About, Service, Gallery",
      "Integrasi WhatsApp & Maps",
      "SEO Friendly & Responsive",
      "Garansi Maintenance & Support",
    ],
    cta: "Mulai Sekarang",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20paket%20Business.",
    highlight: true,
  },
  {
    name: "CMS",
    title: "CMS Website",
    price: "Rp1.250.000",
    tag: "Best Value",
    features: [
      "Free Domain & Hosting (1 Thn)",
      "Garansi 3x Revisi Gratis",
      "Dashboard CMS (Mudah Edit)",
      "Bisa Tambah/Edit Konten Sendiri",
      "System Blog / Berita Dinamis",
      "WhatsApp & Form Contact",
      "SEO Optimized & Fast Speed",
      "Panduan & Technical Support",
    ],
    cta: "Mulai Sekarang",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20paket%20CMS.",
    highlight: false,
  },
  {
    name: "ONLINE STORE",
    title: "E-Commerce",
    price: "Rp1.500.000",
    tag: "Popular",
    features: [
      "Free Domain & Hosting (1 Thn)",
      "Garansi 3x Revisi Gratis",
      "Katalog Produk & Detail",
      "Fitur Keranjang & Checkout WA",
      "Admin Dashboard Kelola Produk",
      "Manajemen Pesanan & Stok",
      "Tampilan Premium & Responsive",
      "Garansi Technical Support",
    ],
    cta: "Mulai Sekarang",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20paket%20Online%20Store.",
    highlight: false,
  },
  {
    name: "CUSTOM",
    title: "Custom Development",
    price: "Rp2,5JT - Rp10JT+",
    tag: "Custom Scope",
    features: [
      "Include Domain & Server Architecture",
      "Garansi Revisi Sampai Puas",
      "Custom Web App & Dashboard Admin",
      "Aplikasi Mobile (Android / iOS)",
      "Integrasi API & Payment Gateway",
      "Desain UI/UX Kustom Eksklusif",
      "Full Source Code Handover",
      "Dedicated Support 24/7",
    ],
    cta: "Konsultasi Project",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20project%20custom.",
    highlight: false,
  },
];

export const studentPricingPlans = [
  {
    name: "TUGAS BASIC",
    title: "Koding Praktikum & Harian",
    price: "Mulai Rp0 (Nego)",
    tag: "Express 1 Hari",
    features: [
      "Tugas Koding Harian, Quiz, & Modul Praktikum",
      "Bahasa: C, C++, Java, Python, HTML/CSS, SQL",
      "Algoritma, Struktur Data, OOP, & Logika Program",
      "Source Code Rapi + Comment Penjelasan per Baris",
      "Garansi 4x - 5x Revisi Minor Gratis",
      "Panduan Cara Running / Jalankan Program",
      "Pengerjaan Kilat Express (Bisa 1 Hari Selesai)",
      "Privasi Identitas Mahasiswa 100% Terjaga",
    ],
    cta: "Joki Tugas Basic",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20joki%20tugas%20koding%20basic.",
    highlight: false,
  },
  {
    name: "PROJECT KULIAH",
    title: "Project UTS/UAS & Web/App",
    price: "Mulai Rp100.000+",
    tag: "Most Popular",
    features: [
      "Project UTS / UAS Web & Mobile App Fullstack",
      "Framework: PHP, Laravel, React, Next.js, Flutter, Node",
      "Database SQL/NoSQL, ERD, Normalisasi, & Diagram UML",
      "Project AI, Data Science, & Machine Learning (Python)",
      "Full Source Code + File Database (.sql) + Admin",
      "Garansi 4x - 5x Revisi Minor Sesuai Feedback Dosen",
      "Video Tutorial Penjelasan Program & Cara Install",
    ],
    cta: "Joki Project Web/App",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20joki%20project%20web%2Fmobile%20kuliah.",
    highlight: true,
  },
  {
    name: "SKRIPSI & TA",
    title: "Skripsi & Project Akhir IT",
    price: "Rp1.000.000 - Rp2.500.000+",
    tag: "Full Guarantee",
    features: [
      "Custom System Skripsi / TA (Web, Mobile, AI/ML, IoT)",
      "Source Code Full + Database (.sql) + Server Setup",
      "Laporan Skripsi (.docx) Lengkap Bab 1 s/d Bab 5",
      "File Pendukung: Diagram UML, ERD, Flowchart, Figma UI",
      "Garansi 4x - 5x Revisi Minor & Revisi Dosen Sampai Sidang",
      "Video Penjelasan Program & Sesi Bimbingan Zoom",
      "Dukungan Persiapan Pertanyaan Dosen Penguji Sidang",
    ],
    cta: "Konsultasi Skripsi IT",
    ctaHref: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20joki%20skripsi%20%2F%20tugas%20akhir%20IT.",
    highlight: false,
  },
];

export const pricingPlans = agencyPricingPlans;

export const projectCards = [
  {
    name: "Website Business & E-Commerce",
    category: "Bisnis & Compro",
    description: "Website company profile & toko online modern responsive, gratis domain/hosting 1 tahun & SEO friendly.",
    badge: "Free Domain & Hosting",
    tech: ["Next.js", "Tailwind CSS", "Laravel", "SEO"],
    color: "from-indigo-600/30 via-purple-600/20 to-cyan-500/10",
    href: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Bisnis.",
  },
  {
    name: "Skripsi & Project Akhir IT",
    category: "Mahasiswa IT",
    description: "Sistem web/mobile/AI custom lengkap dengan source code, database (.sql), laporan Bab 1-5, & garansi sidang.",
    badge: "Laporan + Full Source Code",
    tech: ["Laravel", "Python", "MySQL", "UML/ERD"],
    color: "from-purple-600/30 via-pink-600/20 to-indigo-500/10",
    href: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20Skripsi%20%2F%20TA%20IT.",
  },
  {
    name: "Mobile App & System Dashboard",
    category: "App & System",
    description: "Aplikasi Android/iOS native & dashboard admin kustom untuk otomasi bisnis dan data realtime.",
    badge: "Android & iOS Native",
    tech: ["React Native", "Flutter", "Node.js", "REST API"],
    color: "from-cyan-600/30 via-blue-600/20 to-emerald-500/10",
    href: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20konsultasi%20Aplikasi%20Mobile%20%2F%20Dashboard.",
  },
  {
    name: "Project UTS/UAS & Praktikum Koding",
    category: "Mahasiswa IT",
    description: "Pengerjaan kilat 1-2 hari untuk tugas praktikum, algoritma koding C++/Java/Python, dilengkapi comment per baris.",
    badge: "Express 1-2 Hari",
    tech: ["C++", "Java", "Python", "PHP"],
    color: "from-emerald-600/30 via-teal-600/20 to-cyan-500/10",
    href: "https://wa.me/6285766935413?text=Halo%20PROJEKIN%2C%20saya%20ingin%20joki%20Project%20UTS%2FUAS%20%2F%20Praktikum.",
  },
];

export const features = [
  {
    title: "Harga Super Terjangkau",
    description: "Mulai dari Rp 500 Ribuan tanpa biaya tersembunyi. Solusi hemat berkualitas tinggi untuk UMKM & Startup.",
  },
  {
    title: "Garansi Free 3x Revisi",
    description: "Bebas minta penyesuaian desain & konten hingga 3x revisi sampai hasilnya sesuai ekspektasi Anda.",
  },
  {
    title: "Gratis Domain & Hosting",
    description: "Sudah include domain (.com/.id) & server hosting super cepat untuk 1 tahun pertama. Siap langsung rilis!",
  },
  {
    title: "Pengerjaan Kilat & On-Time",
    description: "Website siap beroperasi hanya dalam 3-7 hari kerja tanpa perlu menunggu lama.",
  },
  {
    title: "Garansi Support After Launch",
    description: "Kami mendampingi setelah rilis dengan garansi perbaikan bug & bantuan teknis gratis.",
  },
  {
    title: "100% Kustom & Responsive",
    description: "Tampilan modern eksklusif (bukan template pasaran), cepat diakses, & rapi di semua ukuran HP/Desktop.",
  },
];

export const techStack = [
  "Laravel",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
];

export const testimonials = [
  {
    quote:
      "Sangat membantu untuk tugas akhir skripsi saya! Code Next.js & Laravel rapi banget, laporan lengkap bab 1-5, plus dibantu penjelasan kodingannya.",
    name: "Bagus Prasetyo",
    business: "Mahasiswa Teknik Informatika",
    project: "Skripsi & TA IT",
  },
  {
    quote:
      "PROJEKIN membantu kami membuat website bisnis yang jauh lebih profesional. Harganya ramah dikantong promo launching dan dapat gratis revisi!",
    name: "Rina Sari",
    business: "Owner, Nusa Herbal",
    project: "Company Profile",
  },
  {
    quote:
      "Tugas praktikum & project UTS web selesai kilat cuma 2 hari! Diberi video tutorial penjelasan kodingan juga jadi paham pas praktikum.",
    name: "Fikri Ramadhan",
    business: "Mahasiswa Sistem Informasi",
    project: "Project Kuliah & UTS",
  },
  {
    quote:
      "Desain landing page terasa sangat modern dan cepat diakses di HP. Pelayanan ramah & sangat responsif melayani konsultasi.",
    name: "Dimas Pratama",
    business: "Founder, KaryaLabs",
    project: "Landing Page",
  },
  {
    quote:
      "Joki tugas koding C++ & Python praktikum harian dapet nilai A! Penjelasan per baris kode bikin gampang dipelajari.",
    name: "Ahmad Fauzi",
    business: "Mahasiswa Teknik Komputer",
    project: "Tugas Koding Harian",
  },
  {
    quote:
      "Toko online kami jadi lebih rapi, cepat, dan include gratis domain hosting 1 tahun. Penjualan meningkat signifikan!",
    name: "Siti Rahmawati",
    business: "Owner, Batik Nusa",
    project: "E-Commerce",
  },
];

export const faqCategories = [
  {
    category: "KEPERCAYAAN & PRIVASI",
    items: [
      {
        question: "PROJEKIN terpercaya nggak? Walau masih baru?",
        answer: "Tentu! PROJEKIN adalah partner digital & joki IT yang sedang tumbuh pesat. Karena kami dalam tahap awal perintisan (launching), kami memberikan perhatian 100% dedicated untuk setiap project, respon super cepat, serta harga promo launching spesial untuk membangun reputasi & portofolio terbaik.",
      },
      {
        question: "Identitasku & Data Bisnis/Projectku aman?",
        answer: "Sangat aman 100%! Kami menjamin kerahasiaan data bisnis maupun data mahasiswa (NDA strictly preserved). Tidak ada source code, dokumen, atau identitas pribadi yang dipublikasikan atau disebar ke pihak luar.",
      },
      {
        question: "Gimana alur kerja di PROJEKIN?",
        answer: "1. Konsultasi Gratis & Kirim Brief/Modul -> 2. Estimasi Harga & Deal DP 50% -> 3. Pengerjaan & Live Update Progress -> 4. Pelunasan & Penyerahan Full Source Code + Demo.",
      },
    ],
  },
  {
    category: "HARGA & PROSES",
    items: [
      {
        question: "Berapa estimasi biaya jasa di PROJEKIN?",
        answer: "Untuk bisnis: Landing page mulai Rp500rb, Website Compro Rp1jt+. Untuk mahasiswa: Tugas basic koding mulai Rp0 (nego), project web/app kuliah mulai Rp100k+, dan skripsi/TA mulai Rp1jt+. Karena masih promo rilis awal, harga kami sangat terjangkau!",
      },
      {
        question: "Berapa lama estimasi pengerjaan proyek?",
        answer: "Bisa pengerjaan kilat express 1-2 hari untuk tugas kuliah urgent, hingga 3-7 hari kerja untuk website bisnis, mobile app, & skripsi kompleks.",
      },
      {
        question: "Bayarnya gimana? Ada sistem DP?",
        answer: "Ada sistem DP 50% untuk mulai pengerjaan. Pelunasan dilakukan setelah kamu melihat preview live demo website atau video bukti kodingan selesai.",
      },
      {
        question: "Gimana cara mulai order atau konsultasi?",
        answer: "Langsung chat WhatsApp atau konsultasi di website ini. Admin & dev kami akan langsung membalas dalam < 1 jam di jam kerja.",
      },
    ],
  },
  {
    category: "KEMAMPUAN TEKNIS",
    items: [
      {
        question: "PROJEKIN melayani pengerjaan apa saja?",
        answer: "Melayani Website Bisnis (Compro, E-Commerce, Landing Page), Aplikasi Mobile (Android/iOS), System API/Database, AI Chatbot, serta Joki Tugas IT, Skripsi, & Project Koding (Python, Laravel, React, Flutter, C++, Java, PHP, dll).",
      },
      {
        question: "Hasil kodingannya dari nol atau copy-paste?",
        answer: "100% dikerjakan kustom dari nol (clean code) sesuai kebutuhan unik bisnis atau modul tugas kamu, bebas dari plagiarisme.",
      },
      {
        question: "Ada garansi revisi & dukungan setelah rilis?",
        answer: "Ada! Garansi 3x revisi gratis untuk website bisnis & garansi revisi dosen untuk skripsi/tugas, plus bantuan teknis after-launch.",
      },
    ],
  },
];
