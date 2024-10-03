import { CarouselComponent } from "@/components/CarouselComponent";
import ContactSection from "@/components/ContactUs/ContactSection";
import Container from "@/components/Container";
import { consultants, partners } from "@/utils/constant";
import Link from "next/link";
import { notFound } from "next/navigation";

const ContactButton = () => {
  return (
    <Link href="/contact" passHref>
      <button className="flex items-center text-2xl font-medium text-[#C59363] bg-transparent rounded-lg py-3 cursor-pointer group">
        <span className="mr-1 transition-all duration-200 group-hover:-translate-x-0.5">
          Contact Us
        </span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-200 fill-[#C59363] group-hover:translate-x-0.5"
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

const page = ({ params }) => {
  const { slug } = params;

  const findAndFilterMember = (id) => {
    let filteredArray = [];
    let matchedMember = null;

    // Check in consultants
    const consultantIndex = consultants.findIndex((member) => member.id === id);
    if (consultantIndex !== -1) {
      matchedMember = consultants[consultantIndex];
      filteredArray = consultants.filter(
        (_, index) => index !== consultantIndex
      );
      return { matchedMember, filteredArray };
    }

    // Check in partners
    const partnerIndex = partners.findIndex((member) => member.id === id);
    if (partnerIndex !== -1) {
      matchedMember = partners[partnerIndex];
      filteredArray = partners.filter((_, index) => index !== partnerIndex);
      return { matchedMember, filteredArray };
    }
    return { matchedMember, filteredArray: [] };
  };

  const { matchedMember, filteredArray } = findAndFilterMember(slug);

  if (matchedMember == -1) notFound();

  return (
    <section>
      <Container>
        <div className="flex justify-between my-[120px] gap-6">
          <div>
            <div
              className="h-[509px] w-[453px] rounded-2xl"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) -53.41%, rgba(197, 147, 99, 0.20) 50%), url(${matchedMember.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="text-4xl font-bold text-[#C59363] mt-5">
              {matchedMember.name}
            </div>
            <div className="text-[#3D453B] text-2xl mt-2">
              {matchedMember.designation}
            </div>
          </div>
          <div className="text-[#3D453B] text-2xl font-medium">
            {matchedMember.description}
          </div>
        </div>
      </Container>
      <div className="w-full border-b border-[#C59363] mt-[120px] mb-[60px]" />

      <Container>
        <CarouselComponent
          title={<div className="text-[#0D160B]">Explore more members</div>}
          items={filteredArray}
          card="consultant"
          black
        />
        <div className="mb-[60px] -mt-3">
          <ContactButton />
        </div>
      </Container>
      <ContactSection />
    </section>
  );
};

export default page;
