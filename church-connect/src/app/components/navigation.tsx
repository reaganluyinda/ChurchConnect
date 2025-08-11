"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="py-4 md:py-6 relative z-50 px-4 md:px-12 lg:px-32 ">
      <div className="flex   justify-between items-center ">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-cyan-950 ">
          ChuCo
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center justify-between font-semibold relative gap-36">
          {/* Center: Find Church */}
          <div className="">
            <Link
              href="/find-church"
              className={`hover:text-blue-400 transition-colors cursor-pointer ${
                pathname === "/church" ? "text-blue-800" : "text-cyan-950"
              }`}
            >
              Find Church
            </Link>
          </div>

          {/* Right: Sign In */}
          <div className="">
            <Link
              href="/signin"
              className={`hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer ${
                pathname === "/signin" ? "text-blue-800" : "text-cyan-950"
              }`}
            >
              <User />
              Sign in
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-cyan-950"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col gap-4 mt-4 bg-[#F8FAFC] shadow-md rounded-md p-4 font-semibold absolute z-50 top-full left-0 w-full"
          >
            <Link
              href="/find-church"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-blue-400 transition-colors ${
                pathname === "/church" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              Find Church
            </Link>
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-blue-400 transition-colors ${
                pathname === "/signin" ? "text-blue-800" : "text-gray-700"
              }`}
            >
              Sign in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
