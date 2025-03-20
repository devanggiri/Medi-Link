import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/components/providers/client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medi-Link",
  description: "A Next.js Medical-Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
} 