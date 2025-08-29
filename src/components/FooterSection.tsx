import { Facebook, Instagram, Youtube } from "lucide-react";
import styles from "./FooterSection.module.css";
import Link from "next/link";
import Image from 'next/image';
const aboutUs = [
  {
    title: "Company Profile",
    href: "/company-profile",
    children: [
      { title: "History", href: "/company-profile" },
      { title: "Vision, Mission & Culture", href: "/company-profile" },
      { title: "BOC", href: "/company-profile" },
      { title: "BOD", href: "/company-profile" },
      { title: "Technical Committee", href: "/company-profile" },
      { title: "Organization Structure", href: "/company-profile" },
    ],
  },
  {
    title: "Achievement",
    href: "#",
    children: [
      { title: "Cooperation", href: "/achievements" },
      { title: "Award & Recognition", href: "/achievements" },
    ],
  },
  {
    title: "Opportunity",
    href: "/opportunities",
    children: [
      {
        title: "Procurement",
        href: "https://vms.bki.co.id/",
      },
      {
        title: "Assets Auction",
        href: "https://www.bki.co.id/halamanstatis-1.html",
      },
      {
        title: "Career Auction",
        href: "https://www.bki.co.id/halamanstatis-92.html",
      },
    ],
  },
  {
    title: "Documentation",
    href: "https://www.bki.co.id/galery.html",
    children: [
      { title: "Photo", href: "https://www.bki.co.id/galery.html" },
      { title: "Podcast", href: "https://www.bki.co.id/galery.html" },
    ],
  },
  {
    title: "ESGRC",
    href: "#",
    children: [
      { title: "Environment", href: "#" },
      { title: "Corporate Social Responsibility", href: "#" },
      {
        title: "Good Corporate Governance",
        href: "#",
        children: [
          { title: "Code of Conduct", href: "#" },
          { title: "Principal & Policy", href: "#" },
          { title: "Implementation", href: "#" },
          { title: "Internal Audit Unit", href: "#" },
          { title: "Gratification Control", href: "#" },
          { title: "Whistle Blowing System", href: "#" },
          { title: "Risk Management Policy", href: "#" },
          { title: "Communication Policy", href: "#" },
        ],
      },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className={`${styles.background} py-10`}>
      <div className="container mx-auto px-6">
        {/* Menu Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/20 pb-8">
          {/* Contact Info */}
          <div className="w-full text-white/75">
            <p className="text-xs md:text-sm mb-4 leading-relaxed">
              Jl. Yos Sudarso 38-40, Tanjung Priok, Jakarta - 14320
            </p>

            <div className="space-y-4">
              <div>
                <a
                  href="mailto:crc@bki.co.id"
                  className="text-xs md:text-sm hover:text-white/50 transition-colors duration-200"
                >
                  crc@bki.co.id
                </a>
                <p className="text-xs md:text-sm font-light">
                  (Corporate Secretary, Corporate Communication)
                </p>
              </div>

              <div>
                <a
                  href="mailto:cs@bki.co.id"
                  className="text-xs md:text-sm hover:text-white/50 transition-colors duration-200"
                >
                  cs@bki.co.id
                </a>
                <p className="text-xs md:text-sm font-light">
                  (Customer Communication)
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-1 text-xs md:text-sm font-light">
              <li>+62 21 430 10 17</li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full text-white">
            <h3 className="font-semibold text-xs md:text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-xs md:text-sm font-light">
              {[
                {
                  label: "Classification",
                  href: "/our-services#classification",
                },
                {
                  label: "Statutory",
                  href: "https://www.bki.co.id/info_statutory-1.html",
                },
                {
                  label: "Marine Services",
                  href: "https://www.bki.co.id/halamanstatis-29.html",
                },
                {
                  label: "Energy & Industry",
                  href: "https://www.bki.co.id/halamanstatis-30.html",
                },
                { label: "BKI Academy", href: "https://www.bki.academy/id", type: "_blank" },
              ].map((item) => (
                <li key={item.label} className="py-1">
                  <Link
                    href={item.href}
                    {...(item.type === "_blank"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div className="w-full text-white">
            <h3 className="font-semibold text-xs md:text-sm mb-4">Research</h3>
            <ul className="space-y-2 text-xs md:text-sm font-light">
              {[
                {
                  label: "Research & Development",
                  href: "https://www.bki.co.id/rnd.html",
                },
                {
                  label: "Technical Journal",
                  href: "https://www.bki.co.id/halamanstatis-119.html",
                },
              ].map((item) => (
                <li key={item.label} className="py-1">
                  <a
                    href={item.href}
                    className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication */}
          <div className="w-full text-white">
            <h3 className="font-semibold text-xs md:text-sm mb-4">
              Publication
            </h3>
            <ul className="space-y-2 text-xs md:text-sm font-light">
              {[
                {
                  label: "News",
                  href: "https://www.bki.co.id/halamanstatis-64.html",
                },
                {
                  label: "Event",
                  href: "https://www.bki.co.id/halamanstatis-64.html",
                },
                { label: "Article", href: "/articles" },
                {
                  label: "Annual Report",
                  href: "/annual-report",
                },
              ].map((item) => (
                <li key={item.label} className="py-1">
                  <a
                    href={item.href}
                    className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="w-full text-white">
            <h3 className="font-semibold text-xs md:text-sm mb-4">About Us</h3>
            <ul className="space-y-2 text-xs md:text-sm font-light">
              {aboutUs.map((menu, idx) => (
                <li key={idx} className={menu.children ? "group" : ""}>
                  {/* Parent link */}
                  <a
                    href={menu.href}
                    className="block w-full border-b-2 hover:border-b-white border-b-zinc-600 hover:text-white/50
                                transition-all duration-300 pb-2"
                  >
                    {menu.title}
                  </a>
                  {/* Render submenu kalau ada children */}
                  {menu.children && (
                    <ul
                      className="pl-4 mt-2 space-y-2 max-h-0 opacity-0 overflow-hidden transition-all duration-1000
                           group-hover:max-h-screen group-hover:opacity-100 group-focus-within:max-h-screen group-focus-within:opacity-100"
                    >
                      {menu.children.map((child, childIdx) => (
                        <li
                          key={childIdx}
                          className={child.children ? "group/sub" : ""}
                        >
                          <a
                            href={child.href}
                            className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                          >
                            {child.title}
                          </a>
                          {/* Render sub-submenu kalau ada children */}
                          {child.children && (
                            <ul
                              className="pl-4 mt-2 space-y-2 md:max-h-0 md:opacity-0 overflow-hidden transition-all duration-1000
                group-hover/sub:max-h-screen group-hover/sub:opacity-100"
                            >
                              {child.children.map((child2, child2Idx) => (
                                <li key={child2Idx}>
                                  <a
                                    href={child2.href}
                                    className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                                  >
                                    {child2.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-white">
          {/* Logo */}
            <div className="flex items-center gap-2">
            <Image src="/bki-white.png" alt="BKI Logo" className="h-7 w-auto" width={80} height={28} />
            </div>

          {/* Copyright */}
          <div className="text-xs md:text-sm text-center font-light">
            © Copyright 2025, All Rights Reserved by BKI
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            {/* Twitter */}
            {/* Twitter */}
            <Link
              href="https://x.com/BKI_1964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 border border-white rounded-full p-2 flex text-white items-center justify-center"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/BKI1964/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 border border-white rounded-full p-2 flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/bki_1964#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 border border-white rounded-full p-2 flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram />
            </Link>

            {/* Youtube */}
            <Link
              href="https://www.youtube.com/BKI1964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 border border-white rounded-full p-2 flex text-white items-center justify-center"
              aria-label="GitHub"
            >
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
