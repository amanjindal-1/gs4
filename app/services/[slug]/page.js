import { CarouselComponent } from "@/components/CarouselComponent";
import ContactSection from "@/components/ContactUs/ContactSection";
import Container from "@/components/Container";
import { services } from "@/lib/constant";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = ({ params }) => {
  const { slug } = params;

  const findAndFilterService = (id) => {
    let filteredArray = [];
    let matchedService = null;

    const serviceIndex = services.findIndex((service) => service.id === id);
    if (serviceIndex !== -1) {
      matchedService = services[serviceIndex]; // Store matched service
      filteredArray = services.filter((_, index) => index !== serviceIndex); // Filter out the matched service
      return { matchedService, filteredArray };
    } else {
      notFound();
    }
  };

  const { matchedService, filteredArray } = findAndFilterService(slug);

  return (
    <div className="mt-[450px]">
      <div
        className="w-full h-[500px] flex justify-center flex-col text-center md:flex-row items-center text-white text-5xl font-bold gap-4 absolute top-0"
        style={{
          background: `linear-gradient(0deg, rgba(197, 147, 99, 0.35) 0%, rgba(197, 147, 99, 0.35) 100%), url(${matchedService.img1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* {matchedService.icon} */}
        <div>{matchedService.title}</div>
      </div>
      <Container>
        <div className="flex gap-6 mb-[120px] items-center flex-col lg:flex-row">
          <div className="text-[#3D453B] text-2xl font-medium flex-1">
            {matchedService.description}
          </div>
          <Image
            src={matchedService.img2}
            alt="img"
            className="rounded-2xl overflow-hidden flex-1"
          />
        </div>
        {matchedService.description1 && (
          <div className="flex gap-6 mb-[120px] items-center  flex-col-reverse lg:flex-row">
            <Image
              src={matchedService.img3}
              alt="img"
              className="rounded-2xl overflow-hidden flex-1 max-h-[400px]"
            />
            <div className="text-[#3D453B] text-2xl font-medium flex-1">
              {matchedService.description1}
            </div>
          </div>
        )}
      </Container>
      <div className="w-full border-b border-[#C59363]" />
      <Container>
        <CarouselComponent
          title={<div className="text-[#0D160B">Explore more services</div>}
          items={filteredArray}
          card="service"
          black
        />
      </Container>
      <ContactSection />
    </div>
  );
};

export default page;
