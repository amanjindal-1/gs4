"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const MobileNavbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav
      className="py-4 px-8 w-full bg-white sm:hidden mb-10"
      style={{
        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.14)",
      }}
    >
      <HamburgerMenuIcon onClick={() => setMenu(!menu)} />
      <MobileSidebar isOpen={menu} onClose={() => setMenu(false)} />
    </nav>
  );
};

export default MobileNavbar;
