import Container from "../Container";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative mb-6">
      <div className="w-full h-[719px]">
        <div
        className="w-full h-[719px] absolute"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) -53.41%, rgba(197, 147, 99, 0.20) 50%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.544946634117!2d77.36088427613663!3d28.61342528494697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce569d1c10323%3A0x9f642a7c1cafd45d!2sTechnopolis%20IT%20Hub!5e0!3m2!1sen!2sin!4v1727430984629!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        />
      </div>
      <Container className="absolute top-0 left-0 right-0 bottom-0  content-center">
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactSection;
