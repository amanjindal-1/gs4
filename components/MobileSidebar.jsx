import { consultants, partners, services } from "@/lib/constant";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileSidebar = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle the section
  };
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition duration-300"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg text-[#C59363] transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click from closing the sidebar
      >
        <button
          className="absolute right-4 top-4 cursor-pointer"
          onClick={onClose}
        >
          <X />
        </button>
        <nav className="flex flex-col p-4">
          <a href="/" className="py-2 hover:text-[#0D160B]">
            Home
          </a>
          <a
            href="/#about"
            onClick={onClose}
            className="py-2 hover:text-[#0D160B]"
          >
            About Us
          </a>
          <button
            className="py-2 text-left hover:text-[#0D160B]"
            onClick={() => toggleSection("partners")}
          >
            Partners
          </button>
          {openSection === "partners" && (
            <div className="pl-4">
              {partners.map((item, index) => (
                <p key={index}>
                  <Link href={`/members/${item.id}`} onClick={onClose}>
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
          <button
            className="py-2 text-left hover:text-[#0D160B]"
            onClick={() => toggleSection("consultants")}
          >
            Consultants
          </button>
          {openSection === "consultants" && (
            <div className="pl-4">
              {consultants.map((item, index) => (
                <p key={index}>
                  <Link href={`/members/${item.id}`} onClick={onClose}>
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
          <button
            className="py-2 text-left hover:text-[#0D160B]"
            onClick={() => toggleSection("services")}
          >
            Services
          </button>
          {openSection === "services" && (
            <div className="pl-4">
              {services.map((item, index) => (
                <p key={index}>
                  <Link href={`/members/${item.id}`} onClick={onClose}>
                    {item.title}
                  </Link>
                </p>
              ))}
            </div>
          )}

          <a href="/contact" className="py-2 hover:text-[#0D160B]">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileSidebar;
