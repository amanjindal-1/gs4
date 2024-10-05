"use client";

import Link from "next/link";
import Logo from "@/public/Logo";
import { useState } from "react";
import { services } from "@/lib/constant";

const Navbar = () => {
  const [membersOpen, setMembersOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleMembersToggle = () => {
    setMembersOpen((prev) => !prev);
  };

  const handleServicesToggle = () => {
    setServicesOpen((prev) => !prev);
  };
  return (
    <nav
      className="py-6 px-8 hidden sm:block bg-[#FDFFFC] rounded-b-[16px] text-[#C59363] font-medium z-10"
      style={{
        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.14)",
      }}
    >
      <div className="ml-2 flex gap-12 items-center w-max">
        <Link href="/" className="text-lg hover:text-[#89613b]">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={handleMembersToggle}
          onMouseLeave={handleMembersToggle}
        >
          <button className="text-lg hover:text-[#89613b]">Members</button>
          {membersOpen && (
            <div className="absolute top-full left-0 bg-[#FDFFFC] rounded shadow-lg overflow-hidden">
              <Link
                href="/partners"
                className="block px-4 py-2 hover:bg-[#C59363] hover:text-[#FDFFFC] transition duration-200"
              >
                Partners
              </Link>
              <Link
                href="/consultants"
                className="block px-4 py-2 hover:bg-[#C59363] hover:text-[#FDFFFC] transition duration-200"
              >
                Consultants
              </Link>
            </div>
          )}
        </div>
        <Link href="/" className="flex items-center">
          <Logo color="#C59363" />
        </Link>
        <div
          className="relative"
          onMouseEnter={handleServicesToggle}
          onMouseLeave={handleServicesToggle}
        >
          <button className="text-lg hover:text-[#89613b]">Services</button>
          {servicesOpen && (
            <div
              className="absolute top-[24px] left-0 bg-[#FDFFFC] overflow-hidden rounded shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
              style={{ transition: "opacity 0.3s ease-in-out" }}
            >
              {services.map((item, index) => (
                <Link
                  href={`/services/${item.id}`}
                  className="block px-4 py-2 hover:bg-[#C59363] hover:text-[#FDFFFC] transition duration-200"
                  style={{ minWidth: "max-content" }}
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/contact" className="text-lg hover:text-[#89613b]">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
