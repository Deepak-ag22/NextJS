import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen"> 
        <header className="bg-slate-200 p-4">
          <div>Company Name</div>
        </header>
        <main className="p-4 flex-1"> 
          {children}
        </main>
        <footer className="bg-yellow-100 p-4">
          <div>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
