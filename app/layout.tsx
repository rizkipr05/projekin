import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projekin.web.id"),
  title: {
    default: "PROJEKIN | Digital Development Partner & Joki Tugas IT",
    template: "%s | PROJEKIN",
  },
  description:
    "Jasa pembuatan website profesional, aplikasi mobile, company profile, serta pendampingan tugas IT & skripsi mahasiswa kilat & bergaransi.",
  keywords: [
    "PROJEKIN",
    "Jasa Pembuatan Website",
    "Jasa Web Dev",
    "Joki Skripsi IT",
    "Joki Tugas Koding",
    "Jasa Website Murah",
    "Laravel Next.js Web App",
  ],
  authors: [{ name: "PROJEKIN Team" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "PROJEKIN | Digital Development Partner & Joki Tugas IT",
    description:
      "Website & aplikasi profesional untuk UMKM, startup, dan bisnis Anda, serta pendampingan tugas IT & skripsi mahasiswa.",
    url: "https://projekin.web.id",
    siteName: "PROJEKIN",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJEKIN | Digital Development Partner & Joki Tugas IT",
    description:
      "Website & aplikasi profesional untuk UMKM, startup, dan bisnis Anda, serta pendampingan tugas IT & skripsi mahasiswa.",
  },
  verification: {
    google: "google3e7ca20e960ef147",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
