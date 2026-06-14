import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pratyush Jain — Growth, Strategy & P&L",
  description:
    "Pratyush Jain is a growth, strategy, and P&L leader with experience across multiple geographies and industries. Offering consulting and mentorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-[#f0f0f0] antialiased min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
