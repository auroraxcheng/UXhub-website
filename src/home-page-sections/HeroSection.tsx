// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-140px)] flex-shrink-0 flex-col items-center overflow-visible rounded-[20px] border border-[#C1C7CD] bg-[#f5f5f5]">
      {/* cursor - "and largest!" */}
      <div className="absolute z-10 hidden md:block md:top-[100px] md:left-[100px] lg:top-[100px] lg:left-[160px]">
        <Image
          src="/and largest.png"
          alt="and largest!"
          width={120}
          height={120}
          className="h-auto w-auto max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
          priority
        />
      </div>

      {/* cursor - "UBC UX Hub" */}
      <div className="absolute z-10 hidden md:block md:top-[330px] md:right-[95px] lg:top-[390px] lg:right-[120px]">
        <Image
          src="/figma-cursor-chat.png"
          alt="UBC UX Hub"
          width={120}
          height={120}
          className="h-auto w-auto max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
          priority
        />
      </div>

      {/* Browser window header with colored dots */}
      <div className="inline-flex h-[58px] w-full items-center justify-start gap-2 border-b border-[#C1C7CD] bg-[#f5f5f5]/70 py-[18px] pl-4 pr-6 sm:pl-6 sm:pr-10 md:pl-4 md:pr-[20px] lg:pl-4 lg:pr-[20px] rounded-t-[20px]">
        {/* Left circle - gradient */}
        <div className="ml-[10px] h-4 w-4 rounded-full border border-[#C1C7CD] bg-[linear-gradient(156deg,#052462_-1.32%,#CA97CE_77.58%,#F09485_97.31%)]" />
        {/* Middle circle - white */}
        <div className="h-4 w-4 rounded-full border border-[#C1C7CD] bg-white" />
        {/* Right circle - gray */}
        <div className="h-4 w-4 rounded-full border border-[rgb(214,216,218)] bg-[#C1C7CD]" />
      </div>

      {/* Content */}
      <div className="flex w-full flex-1 flex-col items-start justify-center gap-10 sm:gap-10 md:gap-[60px] lg:gap-[80px] px-6 pt-10 pb-10 sm:px-10 sm:pt-10 sm:pb-10 md:px-20 md:pt-[60px] md:pb-[60px] lg:px-32 lg:pt-20 lg:pb-32">
        <div>
          <h1 className="font-dm-sans mt-4 flex flex-col gap-0 font-bold leading-normal sm:mt-5 md:mt-6 md:gap-1 lg:mt-8 lg:gap-1 text-[clamp(32px,9vw,58px)]">
            <div className="flex flex-wrap items-center gap-2">
              <span>UBC&apos;s</span>
              <span className="ml-1 rounded-[80px] px-3 py-1.5 text-[#F5F5F5] sm:px-4 md:px-6 lg:px-6 bg-[linear-gradient(156deg,#052462_-1.32%,#CA97CE_77.58%,#F09485_97.31%)] text-[clamp(30px,8vw,56px)] leading-[1.1]">
                first-ever
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span>UX</span>
              <span className="relative inline-block font-serif italic leading-normal text-[#383838]">
                design
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 32"
                  fill="none"
                  className="absolute left-1/2 -bottom-[13px] h-[20px] w-[190px] sm:h-[21px] sm:w-[200px] md:h-[23px] md:w-[220px] lg:h-[26px] lg:w-[250px] -translate-x-[40%]"
                >
                  <g filter="url(#filter0_d_84_128)">
                    <path
                      d="M11 23.3345C11 23.3345 17.943 7.5 32.5 7.5C47.057 7.5 54.5602 23.3345 69.1172 23.3345C83.6743 23.3345 98.443 6.5 113 6.5C127.557 6.5 135.943 26.5 150.5 26.5C165.057 26.5 175.272 10 188 11C200.728 12 206 16.5 206 16.5"
                      stroke="url(#paint0_linear_84_128)"
                      strokeWidth="4.38621"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_84_128"
                      x="0.806335"
                      y="0.306885"
                      width="215.387"
                      height="40.3862"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_84_128"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_84_128"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_84_128"
                      x1="11"
                      y1="6.12121"
                      x2="12.9503"
                      y2="49.6896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00183B" />
                      <stop offset="0.279794" stopColor="#9478B1" />
                      <stop offset="0.695" stopColor="#E89595" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>club</span>
            </div>
          </h1>

          <p className="font-dm-sans mt-8 mb-[30px] max-w-[600px] text-left text-[11px] leading-normal text-black sm:text-xs md:text-sm">
            UBC UX Hub empowers students through hands-on learning, creative
            collaboration, and access to the latest in user experience and
            emerging technology.
          </p>

          <div className="mt-10 flex gap-4 sm:mt-12 md:mt-14">
            <Button variant="primary" icon={<ArrowUpRight className="h-5 w-5" />}>
              BECOME A MEMBER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
