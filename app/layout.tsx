import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from '../app/providers';
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merge2Minds Global",
  description: "Elevate Conversations. Elevate Lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <Toaster position="bottom-right" toastOptions={{duration:3000}} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
