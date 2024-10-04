const AboutUs = () => {
  return (
    <section className="text-[#0D160B]" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold mb-4 text-[#C59363]">
            About Us
          </h2>
          <p className="mb-4 text-lg">
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
          </p>
          <p className="mb-4 text-lg">
            Our approach combines traditional legal wisdom with innovative
            strategies to provide practical and effective solutions, ensuring
            our clients success and protection in an ever-evolving legal
            landscape. Whether you are seeking advice, representation, or
            long-term legal support, GS4 Legal Services LLP is your trusted
            partner in navigating complex legal challenges. We are committed to
            excellence, responsiveness, and delivering results that align with
            your objectives.
          </p>
        </div>
        <div className="w-9/12 md:w-1/3">
          <img src="/AboutUs.svg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
