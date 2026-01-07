import type { Metadata } from "next";
import "./globals.css";
import GalaxyBackground from "@/components/GalaxyBackground";

export const metadata: Metadata = {
  title: "PortfoliAI - Get Your Portfolio Built in 48 Hours",
  description: "Professional, recruiter-ready portfolios built for students. Data Analysts, Software Engineers, ML Engineers. Done-for-you service with 48-hour delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        <div className="relative min-h-screen">
          {/* Premium Galaxy/Nebula Background */}
          <GalaxyBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
