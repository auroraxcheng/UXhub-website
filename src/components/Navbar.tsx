"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const navLink =
  "text-black no-underline font-dm-sans font-medium leading-normal whitespace-nowrap decoration-transparent transition-all duration-200 hover:text-gray-600";

const ctaBtn =
  "flex justify-center items-center rounded-[67.066px] text-white font-dm-sans font-medium leading-normal " +
  "px-[12px] py-[8px] gap-[12px] " +
  "md:w-[190px] md:h-[45px] sm:w-[140px] sm:h-[35px] " +
  "transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-black/20 backdrop-blur-[0.5px]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white py-1">
      <nav className="flex h-20 items-center md:px-[5%] px-[5%]">
        {/* Logo */}
        <Link href="#home" className="block" onClick={close}>
          <div className="w-[60px] h-[60px]">
            <Image
              src="/logo.png"
              alt="UBC UX HUB"
              width={100}
              height={100}
              className="h-full w-full"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="ml-auto hidden md:flex items-center">
          <div className="flex items-center gap-8">
            <Link href="#home" className={navLink}>
              Home
            </Link>
            <Link href="#about-us" className={navLink}>
              About Us
            </Link>
            <Link href="#events" className={navLink}>
              Events
            </Link>
            <Link href="#team" className={navLink}>
              Meet the Team
            </Link>
            <Link href="mailto:ubcuxhub@gmail.com" className={navLink}>
              Contact Us
            </Link>
          </div>
          <Link
            href="/join"
            className={`${ctaBtn} ml-8 bg-gradient-to-br from-[#00183B] via-[#9478B1] to-[#E89595]`}
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Background blur overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden"
            onClick={close}
          />
        )}

        {/* Mobile dropdown */}
        {open && (
          <div
            className="absolute right-[5%] top-full w-[70%] rounded-xl bg-white shadow-lg backdrop-blur-md md:hidden"
            role="menu"
          >
            <div className="flex flex-col p-3">
              <Link href="#home" className={`${navLink} px-3 py-2`} onClick={close}>
                Home
              </Link>
              <Link href="#about-us" className={`${navLink} px-3 py-2`} onClick={close}>
                About Us
              </Link>
              <Link href="#events" className={`${navLink} px-3 py-2`} onClick={close}>
                Events
              </Link>
              <Link href="#team" className={`${navLink} px-3 py-2`} onClick={close}>
                Meet the Team
              </Link>
              <Link
                href="mailto:ubcuxhub@gmail.com"
                className={`${navLink} px-3 py-2`}
                onClick={close}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
