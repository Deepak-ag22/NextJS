import { Sansita } from "next/font/google";
import "./globals.css";

const sans = Sansita({
  weight: '400',
  subsets: ['latin'],
  
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
