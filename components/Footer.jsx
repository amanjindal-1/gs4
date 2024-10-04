import Logo from "@/public/Logo";
import LinkedIn from "@/public/LinkedIn.svg";
import Facebook from "@/public/Facebook.svg";
import X from "@/public/X.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between items-center text-[#C59363]">
        <Logo color="#C59363" />
        <div className="hidden md:block border-l-[1px] h-[160px] border-l-[#C59363b2]" />
        <div className="my-4 border-b-[1px] border-b-[#C59363b2] w-full md:hidden" />
        <div className="text-center lg:text-left w-[275px]">
          <div className="font-medium">Head Office</div>
          <p className="mt-2 text-[#C59363b2]">
            C-56 A/12, Ground Floor, Technopolis IT Hub, Sector 62, Noida
          </p>
        </div>
        <div className="hidden md:block border-l-[1px] h-[160px] border-l-[#c59263b2]" />
        <div className="my-4 border-b-[1px] border-b-[#C59363b2] w-full md:hidden" />
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-2 text-[#C59363b2]">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="hidden md:block border-l-[1px] h-[160px] border-l-[#C59363b2]" /> */}
        {/* <div className="my-4 border-b-[1px] border-b-[#C59363b2] w-full md:hidden" /> */}
        {/* <div className="text-center lg:text-right">
          <div className="flex justify-center lg:justify-end space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={X} alt="X (formerly Twitter)" className="w-6 h-6" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
