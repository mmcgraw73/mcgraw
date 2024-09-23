
import "./globals.css";
import Nav from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
      <Analytics />
    </div>
  );
}
