import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact" passHref>
      <button className="flex items-center text-2xl font-medium rounded-lg py-3 px-4 transition-all duration-200 bg-[#C59363] text-white cursor-pointer group">
        <span className="mr-1 transition-all duration-200 group-hover:-translate-x-0.5">
          Contact Us
        </span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-200 group-hover:fill-[#3D453B] group-hover:translate-x-0.5"
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

const HeroSection = () => {
  return (
    <section className="flex gap-6 items-center mb-32 my-16 flex-col lg:flex-row">
      <div className="text-[#0D160B]">
        <div className=" font-semibold text-5xl mb-4">
          Welcome to{" "}
          <span className="text-[#C59363]">GS4 Legal Services LLP</span>
        </div>
        <p className="text-2xl font-medium mb-4">
          With expertise across Income Tax, GST, Family Disputes, Banking &
          Finance, and more, we combine traditional legal wisdom with innovative
          strategies to protect your interests.
        </p>
        <ContactButton />
      </div>
      <div className="hidden md:block min-w-full lg:min-w-[548px] h-[360px] border">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          title="Home Page Video"
        >
          <source src="/video/home.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
