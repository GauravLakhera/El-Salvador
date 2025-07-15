"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, MapPin, CreditCard, Phone } from "lucide-react";
import {
  Home,
  Building2,
  Sun,
  Ruler,
  ClipboardCheck,
  PackageCheck,
  Scale,
} from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText";
import KeyFeatures from "@/components/KeyFeatures";
import AboutUs from "@/components/AboutUs";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero title animation
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Interactive map animation
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const services = [
    {
      title: "Compra de Terrenos",
      description: "Encuentra terrenos urbanizados listos para construir.",
      icon: MapPin,
      image: "images/services/1.png",
    },
    {
      title: "Construcción Residencial",
      description: "Casas modernas personalizadas desde cero.",
      icon: Home,
      image: "images/services/2.png",
    },
    {
      title: "Construcción Comercial",
      description: "Desarrollos ideales para negocios y oficinas.",
      icon: Building2,
      image: "images/services/3.png",
    },
    {
      title: "Diseño Arquitectónico",
      description: "Proyectos únicos, modelado 3D y asesoría moderna.",
      icon: Ruler,
      image: "images/services/4.png",
    },
    {
      title: "Instalación de Paneles Solares",
      description: "Ahorra energía con tecnología solar avanzada.",
      icon: Sun,
      image: "images/services/5.png",
    },
    {
      title: "Proyectos Llave en Mano",
      description: "Desde el terreno hasta la entrega de tu casa lista.",
      icon: ClipboardCheck,
      image: "images/services/6.png",
    },
    {
      title: "Asesoría Legal y Permisos",
      description: "Gestión completa de trámites y licencias.",
      icon: Scale,
      image: "images/services/7.png",
    },
    {
      title: "Paquetes Promocionales",
      description: "Paquetes Hogar, Comercial, Solar y más.",
      icon: PackageCheck,
      image: "images/services/8.png",
    },
  ];

  const externalLinks = [
    {
      title: "Banco Promerica Digital",
      description: "Soluciones bancarias para salvadoreños en el exterior",
      url: "https://solucionesdigitales.promerica.com.sv/salvadorenos-en-el-exterior",
      color: "bg-blue-600",
    },
    {
      title: "FSV Programa de Vivienda",
      description: "Programa gubernamental de vivienda cercana",
      url: "https://portal.fsv.gob.sv/vivienda-cercana/",
      color: "bg-green-600",
    },
    {
      title: "MoneyGram",
      description: "Transferencias rápidas y seguras",
      url: "#moneygram",
      color: "bg-purple-600",
    },
  ];

  const featuredProjects = [
    {
      title: "Residencial Brisas del Lago",
      location: "San Salvador, El Salvador",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Centro Empresarial Vista Norte",
      location: "La Libertad, El Salvador",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Residencial Jardines del Sol",
      location: "Soyapango, El Salvador",
      image:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Lotes en Terranova",
      location: "Opico, El Salvador",
      image:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Instalación Solar – Complejo Las Américas",
      location: "Santa Tecla, El Salvador",
      image:
        "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />

      <main className="bg-blue-50 text-white">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="flex flex-col  w-11/12 mx-auto  items-center justify-between relative overflow-hidden"
        >
          <div className="flex flex-col gap-6 mt-[8rem] pb-4">
            <div className="py-20 flex">
              <div className="flex flex-col">
                <motion.h1
                  className="hero-title text-6xl font-bold mb-6 text-black"
                  initial={{ opacity: 0 }}
                >
                  Construye Más Que Una Casa
                  <span>
                    Casas Personalizadas | Ampliaciones | Vida al Aire Libre
                  </span>
                </motion.h1>
                <div className="mt-5 flex flex-col">
                  <motion.p
                    className="hero-title font-quicksand text-xl text-gray-600"
                    initial={{ opacity: 0 }}
                  >
                    Expertos en construcción de casas personalizadas. Desde la
                    compra del terreno hasta las llaves en tu mano, te
                    acompañamos en cada paso del proceso.
                  </motion.p>

                  <motion.div
                    className="hero-title flex flex-col py-2 sm:flex-row gap-6 justify-start"
                    initial={{ opacity: 0 }}
                  >
                    <Link
                      href="/contacto"
                      className="bg-[#203C73] hover:bg-[#182c56] px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                      data-cursor-hover
                    >
                      Reservar Ahora
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <Link
                      href="/proyectos"
                      className="border-2 border-blue-300 hover:bg-white text-black px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      data-cursor-hover
                    >
                      Ver Proyectos
                    </Link>
                  </motion.div>
                </div>
              </div>
              <ParallaxImage
                src="/images/home/home-1-01.webp"
                alt="Casa moderna en El Salvador"
                className=" "
              />
            </div>

            <div className=" h-[30rem]">
              <ParallaxImage
                src="/images/main.jpg"
                alt="Casa moderna en El Salvador"
                className="w-full  "
              />
            </div>
          </div>
        </section>
        <div>
          <KeyFeatures />
        </div>

        <div>
          <AboutUs />
        </div>

        {/* Services Section */}
        <section className="py-32 px-4 text-black">
          <div className="mx-2">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Nuestros <span className="text-[#203C73]">Servicios</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Servicios completos para construir tu hogar ideal en El
                Salvador, diseñados especialmente para la comunidad salvadoreña
                en el exterior.
              </p>
            </AnimatedText>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[400px] gap-10"
            >
              {services.map((servicio, index) => {
                const Icon = servicio.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.03 }}
                    className={`relative rounded-xl overflow-hidden border border-gray-200 shadow-sm group transition-all duration-300 ease-in-out ${
                      index === 0 || index === 5 || index === 6 || index === 7
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <img
                      src={servicio.image}
                      alt={servicio.title}
                      className="absolute inset-0 object-cover w-full h-full opacity-90 group-hover:opacity-100 transition duration-300"
                    />
                    <div className="absolute inset-0 z-10 p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                      <Icon className="text-white mb-2" size={28} />
                      <h3 className="text-lg font-semibold text-white">
                        {servicio.title}
                      </h3>
                      <p className="text-xs text-gray-200 mt-1 font-quicksand">
                        {servicio.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Interactive Map Section */}
        {/* <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Construyendo en Todo{" "}
                <span className="text-blue-400">El Salvador</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Desde San Salvador hasta las costas de La Libertad, construimos
                hogares en las mejores ubicaciones del país.
              </p>
            </AnimatedText>

            <div
              ref={mapRef}
              className="relative h-96 bg-gray-800 rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-blue-400 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold mb-2">Mapa Interactivo</h3>
                  <p className="text-gray-400">
                    Próximamente: Mapa interactivo de proyectos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* External Links Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl text-black font-bold mb-6">
                Servicios <span className="text-[#203C73]">Integrados</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Facilitamos todos los aspectos financieros y logísticos para
                salvadoreños en el exterior que desean invertir en El Salvador.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {externalLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${link.color} p-8 hover:scale-105 transition-all duration-300 group cursor-pointer`}
                  data-cursor-hover
                >
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-y-[-4px] transition-transform">
                    {link.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {link.description}
                  </p>
                  <ArrowRight className="text-white mt-4 group-hover:translate-x-2 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Proyectos <span className="text-blue-400">Destacados</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Casas que hemos construido con amor y dedicación para familias
                salvadoreñas.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden h-64 mb-6">
                    <ParallaxImage
                      src={project.image}
                      alt={project.title}
                      intensity={100}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {project.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText>
              <h2 className="text-5xl md:text-6xl text-black font-bold mb-8">
                ¿Listo para Construir tu{" "}
                <span className="text-[#203C73]">Futuro</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Contáctanos hoy mismo y comencemos a planificar la casa de tus
                sueños en El Salvador. Nuestro equipo te guiará en cada paso del
                proceso.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contacto"
                  className="bg-[#203C73] hover:bg-blue-700 px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  data-cursor-hover
                >
                  <Phone className="mr-3" />
                  Contactar Ahora
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  href="/servicios"
                  className="border-2 border-[#203C73] text-black px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  data-cursor-hover
                >
                  Conocer Servicios
                </Link>
              </div>
            </AnimatedText>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
