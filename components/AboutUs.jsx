"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import houseImg from "../public/images/house.png"; // Replace with correct path or use imported image
import constructionImg from "../public/images/cons.png"; // Replace with correct path
import Link from "next/link";
import ParallaxImage from "./ParallaxImage";

export default function AboutUs() {
  return (
    <section className="pt-20 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start"
      >
        <div>
          <h2 className="text-6xl md:text-8xl font-bold leading-tight text-gray-900">
            Acerca <br /> de Nosotros.
          </h2>

          <div className="mt-10 flex items-center space-x-6">
            <div className="w-24 h-24 bg-gray-900 text-white rounded-full flex items-center justify-center text-center text-sm font-semibold">
              <div>
                <div className="text-[10px]">Años de Experiencia</div>
                <div className="text-2xl">15</div>
              </div>
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-center text-sm font-semibold">
              <div>
                <div className="text-[10px] text-gray-800">Proyectos</div>
                <div className="text-2xl text-gray-800">250+</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2"> {/* Added padding top to align text better */}
          <h3 className="text-2xl  mb-4 text-gray-800">
            Remodelador galardonado cerca de ti
          </h3>
          <p className="text-gray-700 mb-4 font-quicksand font-normal leading-relaxed">
            El Salvador Constructores, S.A. de C.V. es una empresa líder en el
            sector de la construcción, dedicada a transformar sueños en
            realidades tangibles. Con años de experiencia en la construcción de
            casas residenciales y comerciales desde cero, ofrecemos a nuestros
            clientes soluciones completas que combinan arquitectura moderna,
            calidad y eficiencia.
          </p>
          <p className="text-gray-700 mb-4 font-quicksand font-normal leading-relaxed">
            Innovamos constantemente y apostamos por la tecnología limpia,
            ofreciendo instalación de paneles solares de última generación,
            ayudando a nuestros clientes a reducir costos energéticos y
            contribuir con el medio ambiente.
          </p>
          <p className="text-gray-700 mb-6 font-quicksand font-normal leading-relaxed">
            En El Salvador Constructores nos mueve la pasión por construir el
            futuro. Tu visión es nuestra misión: edificamos el futuro que
            imaginas.
          </p>

          <motion.a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium text-sm rounded-full transition-colors duration-200"
          >
            Ver más sobre nosotros →
          </motion.a>
        </div>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="row-span-2 overflow-hidden rounded-lg" // Added overflow-hidden for image containment
        >
          <ParallaxImage
            src="/images/house.png"
            alt="Casa residencial"
            className="w-full h-full object-cover" // Made image fill container
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="row-span-1 overflow-hidden rounded-lg" // Added overflow-hidden for image containment
        >
          <ParallaxImage
            src="/images/cons.png"
            alt="Construcción"
            className="w-full h-full object-cover" // Made image fill container
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="row-span-1 flex flex-col " // Added flex for spacing between text and button
        >
          <p className="text-gray-700 font-light leading-relaxed mb-6 md:mb-0"> {/* Adjusted margin for better spacing */}
            En El Salvador Constructores, S.A. de C.V., transformamos tus ideas
            en espacios reales y funcionales. Con amplia experiencia en
            construcciones residenciales y comerciales desde cero, ofrecemos
            soluciones integrales que combinan diseño arquitectónico moderno,
            eficiencia y calidad. Además de construir, vendemos terrenos
            estratégicos e implementamos tecnología solar avanzada para un
            futuro sostenible. Tu visión es nuestra misión: construimos el
            futuro que imaginas.
          </p>
          <Link
            href="/contacto"
            className="px-6 py-3 mt-3 bg-gray-900 text-white inline-block self-start transition-colors duration-200" // Styled button to match the other
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}