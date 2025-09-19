'use client';
import "../styles/globals.css";
import Providers from "./provider";
import { useTranslateStore } from '@/store/useTranslateStore';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale } = useTranslateStore();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}