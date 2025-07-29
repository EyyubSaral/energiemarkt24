import Link from "next/link";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-700 w-full h-30 md:h-10  flex flex-col">
      <div className="flex gap-6 flex-wrap justify-center items-center text-gray-300 font-bold">
        <Link
          href="/"
          className="hover:text-white transition hover:scale-110 active:text-[#ff7f50] "
        >
          Startseite
        </Link>
        <Link
          href="/about"
          className="hover:text-white transition hover:scale-110 active:text-[#ff7f50]"
        >
          Über uns
        </Link>
        <Link
          href="/contact"
          className="hover:text-white transition hover:scale-110 active:text-[#ff7f50]"
        >
          Kontakt
        </Link>
        <Link
          href="/impressum-datenschutz"
          className="hover:text-white transition hover:scale-110 active:text-[#ff7f50]"
        >
          Impressum & Datenschutz
        </Link>

        <a
          href="/files/Vollmacht-Formular.pdf"
          download="Vollmacht-Formular"
          className="hover:text-white transition hover:scale-110 active:text-[#ff7f50]"
        >
          Vollmacht-Formular
        </a>
      </div>
      <div className="flex justify-center items-center gap-2  text-white text-sm bg-gray-900">
        <FaCopyright className="text-base" />
        <span>2025; Designed by Eyyub Saral</span>
      </div>
    </div>
  );
}
