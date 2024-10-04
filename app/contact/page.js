import ContactForm from "@/components/ContactUs/ContactForm";
import Container from "@/components/Container";
import Location from "@/public/location.svg";
import Mail from "@/public/mail.svg";
import { Phone } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <Container className1="my-[60px]">
        <div className="flex justify-between items-center flex-col-reverse gap-10 lg:flex-row lg:gap-6">
          <div className="text-[#3D453B] text-xl flex-1">
            <h1 className="text-[#C59363] text-[32px] font-semibold mb-2">
              Need any help?
            </h1>
            <p className="mb-9">
              We invite you to reach out to us using the contact details below
              for any assistance or to avail our services. Your inquiries are
              important to us, and we’re here to help!
            </p>
            <div className="flex gap-6 mb-8 items-center">
              <div className="min-h-[72px] min-w-[72px] rounded-2xl bg-[#C59363] flex items-center justify-center">
                <Phone
                  className="text-[#E8EAED]"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
              <div>
                <div className="text-[rgba(13, 22, 11, 0.80)] font-semibold">
                  Contact Us
                </div>
                <div>+91 120-3583919</div>
              </div>
            </div>
            <div className="flex gap-6 mb-8 items-center">
              <div className="min-h-[72px] min-w-[72px] rounded-2xl bg-[#C59363] flex items-center justify-center">
                <Image src={Mail} alt="mail" />
              </div>
              <div>
                <div className="text-[rgba(13, 22, 11, 0.80)] font-semibold">
                  Email us
                </div>
                <div style={{ wordBreak: "break-all" }}>
                  gs4legalservicesllp@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="min-h-[72px] min-w-[72px] rounded-2xl bg-[#C59363] flex items-center justify-center">
                <Image src={Location} alt="location" />
              </div>
              <div>
                <div className="text-[rgba(13, 22, 11, 0.80)] font-semibold">
                  Find us
                </div>
                <div>
                  C-56 A/12, Ground Floor, Technopolis IT Hub, Sector 62, Noida
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ContactForm />
          </div>
        </div>
      </Container>
      <div className="w-full h-[719px] mb-16">
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
    </section>
  );
};

export default page;
