import ContactForm from "@/components/ContactUs/ContactForm";
import Container from "@/components/Container";
import Location from "@/public/location.svg";
import Mail from "@/public/mail.svg";
import { Phone } from "lucide-react";
import Image from "next/image";
import Bitmap from "@/public/Bitmap.svg";

const page = () => {
  return (
    <section>
      <Container className1="my-[60px]">
        <div className="flex justify-between items-center flex-col gap-10 lg:flex-row lg:gap-6">
          <div className="text-[#3D453B] text-xl w-[450px]">
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
                <div>gs4legalservicesllp@gmail.com</div>
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
          <ContactForm />
        </div>
      </Container>
      <Image
        src={Bitmap}
        alt="map"
        className="w-full h-[719px] object-cover mb-6"
      />
    </section>
  );
};

export default page;
