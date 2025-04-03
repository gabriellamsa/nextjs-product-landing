"use client";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { Navbar } from "./Navbar";

export const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => setShowNav(true);
  const handleNavClose = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={handleNavOpen} />
      <MobileNav showNav={showNav} closeNav={handleNavClose} />
    </div>
  );
};
