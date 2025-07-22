"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  MapPin,
  BookOpen,
  Phone,
  PhoneCall,
  Image,
  LandPlotIcon,
  User,
} from "lucide-react";
import { MdSolarPower } from "react-icons/md";
import { TbAffiliate } from "react-icons/tb";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navItems = [
  //   { href: "/", label: "Inicio", icon: Home },
  //   { href: "/sobre-nosotros", label: "Sobre Nosotros", icon: Users },
  //   { href: "/solarPanel", label: "Panel solar", icon: MdSolarPower },
  //   { href: "/servicios", label: "Servicios", icon: Briefcase },
  //   { href: "/proyectos", label: "Proyectos", icon: MapPin },
  //      { href: "/tigo-top-up", label: "Tigo", icon: PhoneCall },

  //   { href: "/contacto", label: "Contacto", icon: Phone },
  // ];

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", icon: Users },
    { href: "/solarPanel", label: "Panel solar", icon: MdSolarPower },
    { href: "/servicios", label: "Servicios", icon: Briefcase },
    { href: "/proyectos", label: "Proyectos", icon: MapPin },
    { href: "/land", label: "Tierra", icon: LandPlotIcon },

    { href: "/gallery", label: "Galería", icon: Image },
    { href: "/filial", label: "Afiliados", icon: TbAffiliate  },
    { href: "/loan", label: "Préstamo", icon: User },

    { href: "/contacto", label: "Contacto", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-blue-50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between items-center py-2">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              scrolled ? `text-blue-950` : `text-black`
            }`}
            data-cursor-hover
          >
            <img
              src="/images/logo.png"
              className="w-20 drop-shadow-xl"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  scrolled ? `text-blue-950` : `text-blue-950`
                } hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2`}
                data-cursor-hover
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-2"
            data-cursor-hover
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div

          className="md:hidden overflow-hidden bg-black/95 rounded-lg mb-4"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <div
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-white hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-cursor-hover
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
