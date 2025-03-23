import { Inter } from "next/font/google";
import "./globals.css"; // Adjust path if needed
import Navbar from "./components/Navbar";
import SessionProvider from './SessionProvider';

const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <SessionProvider>
        <Navbar />
        <main>{children}</main>
      </SessionProvider>
    </div>
  );
}
