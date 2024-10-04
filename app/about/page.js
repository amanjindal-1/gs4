import ContactSection from "@/components/ContactUs/ContactSection";
import AboutImg from "/public/imgs/about.jpg";
import Container from "@/components/Container";

const page = () => {
  return (
    <>
      <div
        className="w-full content-center h-[700px] text-[#FDFFFC] gap-4 absolute top-0"
        style={{
          background: `linear-gradient(0deg, rgba(197, 147, 99, 0.35) 0%, rgba(197, 147, 99, 0.35) 100%), url(${AboutImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <div className="font-bold text-5xl">Get to know us</div>
          <div className="max-w-[700px] text-lg mt-4" style={{lineHeight: "normal"}}>
            At GS4 Legal Services LLP, we are committed to delivering
            comprehensive and strategic legal solutions across a wide spectrum
            of practice areas. Founded on the principles of integrity,
            expertise, and client-centric service, our firm is dedicated to
            addressing the unique legal needs of individuals, businesses, and
            institutions. With a team of seasoned professionals, we bring
            in-depth knowledge and experience in areas such as Income Tax, GST,
            RERA, General Commercial Law, Family Disputes, Economic Offences,
            Banking and Finance, Contract Vetting and Negotiation, Arbitration
            and Conciliation, MSME, and Service Matters.
          </div>
        </Container>
      </div>
      <div className="min-h-[650px]" />
      <Container>
        <h3 className="text-5xl text-[#C59363] font-bold mb-4">Our Approach</h3>
        <div className="mb-16 text-lg">
          Our approach combines traditional legal wisdom with innovative
          strategies to provide practical and effective solutions, ensuring our
          clients success and protection in an ever-evolving legal landscape.
          Whether you are seeking advice, representation, or long-term legal
          support, GS4 Legal Services LLP is your trusted partner in navigating
          complex legal challenges. We are committed to excellence,
          responsiveness, and delivering results that align with
          your objectives.
        </div>
      </Container>
      <ContactSection />
    </>
  );
};

export default page;
