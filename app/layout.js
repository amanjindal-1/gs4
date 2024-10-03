import Navbar from "@/components/Navbar";
import "./globals.css";
import { DM_Sans } from "@next/font/google";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weights: ["400", "500", "700"],
});

export const metadata = {
  title: "GS4 Legal Services LLP",
  description: "GS4 Legal Services LLP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative ${dmSans.className}`}>
        <div className="w-full flex justify-center sticky top-0 z-10">
          <Navbar />
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
      </body>
    </html>
  );
}
