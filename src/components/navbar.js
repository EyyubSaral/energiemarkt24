"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center px-4 sm:px-6 font-bold text-white bg-[#ff7f50] shadow-md z-50">
      {/* Logo */}
      <Link
        href="/"
        className="inline-block active:scale-95 transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-3xl shadow-lg object-cover"
        />
      </Link>

      {/* Başlık */}
      <p className="text-xl sm:text-2xl md:text-3xl font-extrabold select-none whitespace-nowrap ml-2">
        energiemarkt24 GmbH
      </p>

      {/* Hamburger Menü */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} aria-label="Menü Aç/Kapat">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menü Linkleri */}
      <div
        className={`flex-col md:flex md:flex-row md:static absolute top-20 left-0 w-full md:w-auto bg-[#ff7f50] md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="px-6 py-3 hover:text-black hover:scale-105 active:text-[#31395f] active:scale-95 transition"
          onClick={() => setMenuOpen(false)}
        >
          Startseite
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 hover:text-black hover:scale-105 active:text-[#31395f] active:scale-95 transition"
          onClick={() => setMenuOpen(false)}
        >
          Über uns
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 hover:text-black hover:scale-105 active:text-[#31395f] active:scale-95 transition"
          onClick={() => setMenuOpen(false)}
        >
          Kontakt
        </Link>
        <Link
          href="/impressum-datenschutz"
          className="px-6 py-3 hover:text-black hover:scale-105 active:text-[#31395f] active:scale-95 transition"
          onClick={() => setMenuOpen(false)}
        >
          Impressum & Datenschutz
        </Link>
        <a
          href="/files/Vollmacht-Formular.pdf"
          download="Vollmacht-Formular"
          className="px-6 py-3 hover:text-black hover:scale-105 active:text-[#31395f] active:scale-95 transition"
          onClick={() => setMenuOpen(false)}
        >
          Vollmacht-Formular
        </a>
      </div>
    </nav>
  );
}
