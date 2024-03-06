import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionProvider from "@/app/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextHub",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="m-auto min-w-[300px] max-w-[1536px] p-4">
            <Navbar />
            {children}
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
