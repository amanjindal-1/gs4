import Bitmap from "@/public/Bitmap.svg";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Container from "../Container";

const ContactSection = () => {
  return (
    <section className="relative mb-6">
      <Image src={Bitmap} alt="map" className="w-full h-[719px] object-cover" />
      <Container className="absolute top-0 left-0 right-0 bottom-0  content-center">
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactSection;
