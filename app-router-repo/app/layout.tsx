"use client"
import "./globals.css"; 
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Provider store={store}>
          <Header />
            {children} 
            <Footer />
        </Provider>
      </body>
    </html>
  );
}
