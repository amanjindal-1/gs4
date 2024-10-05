import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Toaster } from "sonner";
import MobileNavbar from "@/components/MobileNavbar";

export const metadata = {
  title: "GS4 Legal Services LLP",
  description: "GS4 Legal Services LLP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative min-w-[400px]`}>
        <div className="w-full flex justify-center top-0 z-10">
          <Navbar />
          <MobileNavbar />
        </div>
        {children}
        <Container>
          <Footer />
        </Container>
        <div className="mt-8 text-center border-t border-[#C59363]">
          <p className="text-sm bg-[#C59363] text-[#FDFFFC] py-3">
            © 2024 GS4 Legal Services LLP. All rights reserved.
          </p>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
