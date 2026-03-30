import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Privacy Policy — WearWise",
  description:
    "Read the WearWise Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with Turkish KVKK Law No. 6698.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — WearWise",
    description:
      "WearWise privacy policy and data protection information.",
    siteName: "WearWise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
