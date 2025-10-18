'use client';
import "../styles/globals.css";
import { Header, Footer, Head } from "@/features/shared/components"; 
import { useTranslateStore } from '@/store/useTranslateStore';
import Sidebar from "@features/shared/components/Sidebar";
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
            <main className="max-w-6xl mx-auto  px-6 py-10  grid grid-cols-1 md:grid-cols-3 gap-8">
                  { isHiden && <Sidebar/> }
                  {children}
             </main>
          <Footer />
      </body>
    </html>
  )
}