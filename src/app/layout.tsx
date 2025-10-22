'use client';
import "../styles/globals.css";
import { Header, Footer, Head } from "@/features/shared/components"; 
import { useTranslateStore } from '@/store/useTranslateStore';
import { Sidebar } from "@/features/shared/components/";
import useHideSidebar from "@/features/shared/hooks/useHideSidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const { locale } = useTranslateStore();
  const isHiden = useHideSidebar();

  return (
    <html lang={locale}>
      <Head />
      <body className="min-h-screen flex flex-col bg-[#0f172a] text-white">
          <Header />
            <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 gap-6 md:gap-8 items-start">
                  { isHiden && <Sidebar/> }
                  {children}
             </main>
          <Footer />
      </body>
    </html>
  )
}