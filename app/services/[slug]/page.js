import { CarouselComponent } from "@/components/CarouselComponent";
import ContactSection from "@/components/ContactUs/ContactSection";
import Container from "@/components/Container";
import { services } from "@/utils/constant";
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
        className="w-full h-[500px] flex justify-center items-center text-white text-5xl font-bold gap-4 absolute top-0"
        style={{
          background: `linear-gradient(0deg, rgba(197, 147, 99, 0.35) 0%, rgba(197, 147, 99, 0.35) 100%), url(${matchedService.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {matchedService.icon}
        <div>{matchedService.title}</div>
      </div>
      <Container>
        <div className="flex gap-6 mb-[120px] items-center flex-col lg:flex-row">
          <div className="text-[#3D453B] text-2xl font-medium">
            {matchedService.description}
          </div>
          <div className="h-[360px] min-w-[548px] rounded-2xl border" />
        </div>
        <div className="flex gap-6 mb-[120px] items-center  flex-col-reverse lg:flex-row">
          <div className="h-[360px] min-w-[548px] rounded-2xl border" />
          <div className="text-[#3D453B] text-2xl font-medium">
            {matchedService.description}
          </div>
        </div>
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
