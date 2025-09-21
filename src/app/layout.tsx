'use client';
import "../styles/globals.css";
import { Header, Footer, Head } from "@/features/shared/components"; 
import { useTranslateStore } from '@/store/useTranslateStore';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const { locale } = useTranslateStore();

  return (
    <html lang={locale}>
      <Head />
      <body className="min-h-screen flex flex-col bg-[#0f172a] text-white">
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  )
}