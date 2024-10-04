import { CarouselComponent } from "@/components/CarouselComponent";
import ContactSection from "@/components/ContactUs/ContactSection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import { consultants, services } from "@/lib/constant";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact" passHref>
      <button className="flex items-center text-2xl font-medium text-[#3D453B] bg-transparent rounded-lg py-3 px-4 transition-all duration-200 hover:bg-[#C59363] hover:text-[#FDFFFC] cursor-pointer group">
        <span className="mr-1 transition-all duration-200 group-hover:-translate-x-0.5">
          Contact Us
        </span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-200 group-hover:fill-[#FDFFFC] group-hover:translate-x-0.5"
        >
          <g id="arrow_right_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1">
            <path
              id="Vector"
              d="M21 27L18.9 24.825L24.225 19.5H6V16.5H24.225L18.9 11.175L21 9L30 18L21 27Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen">
     
      <Container>
        <HeroSection />
      </Container>
      <div className="bg-[#C59363] w-full">
        <Container>
          <CarouselComponent
            title={<div className="text-[#FDFFFC]">Explore our services</div>}
            items={services}
            card="service"
          />
        </Container>
      </div>
      <Container>
        <CarouselComponent
          title={<div className="text-[#0D160B]">Seek Legal Advice</div>}
          items={consultants}
          card="consultant"
          black
        />
        <div className="mb-[60px] -mt-3">
          <ContactButton />
        </div>
      </Container>
      <ContactSection />
      
    </main>
  );
}
