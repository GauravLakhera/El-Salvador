import React from "react";
import ParallaxImage from "./ParallaxImage";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPencilRuler,
  FaDraftingCompass,
  FaRocket,
  FaChessKnight,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Diseños Innovadores",
      description:
        "Aportamos creatividad e innovación a cada proyecto, combinando estética y funcionalidad para crear espacios impresionantes.",
      icon: <FaPencilRuler className="text-white text-3xl" />,
    },
    {
      title: "Soluciones Personalizadas",
      description:
        "Cada proyecto está diseñado a medida para adaptarse a tu estilo y necesidades, asegurando una transformación única y personalizada.",
      icon: <FaDraftingCompass className="text-white text-3xl" />,
    },
    {
      title: "Ejecución Perfecta",
      description:
        "Nuestro equipo entrega los proyectos a tiempo con mínimas revisiones, garantizando eficiencia y resultados de alta calidad.",
      icon: <FaRocket className="text-white text-3xl" />,
    },
    {
      title: "Planificación Inteligente",
      description:
        "Brindamos soluciones estratégicas de diseño y planificación experta para maximizar el potencial de tu espacio.",
      icon: <FaChessKnight className="text-white text-3xl" />,
    },
  ];
  return (
    <div className="">
      <div className="relative">
        <ParallaxImage
          src="/images/why.jpg"
          alt="Casa moderna en El Salvador"
          className="h-[20rem]"
        />
        <h1 className=" text-7xl font-bold px-2 absolute bottom-2">
          Why Choose Us
        </h1>
        {/* <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-1/4 h-auto md:h-[10rem] text-white p-6 rounded-tl-3xl shadow-2xl flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl  mb-4 leading-tight">
            Planning an Addition?
          </h1>

          <a
            href="/contact"
            className="inline-block text-white border font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Let's Talk
          </a>
        </div> */}
      </div>
      <section className="bg-black/90 text-white py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 border-b border-gray-700 pb-12">
          {/* Left content */}
          <div>
            <h3 className="text-xl md:text-2xl leading-relaxed mb-6">
              Creamos espacios hermosos y funcionales con precisión. Tu visión,
              nuestra experiencia.
            </h3>
            <p className="text-lg mb-10">
              Remodelaciones sin interrupciones desde el diseño hasta la
              finalización. Calidad en la que puedes confiar.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-none border border-white hover:bg-gray-100 transition"
            >
              Reservar Cita
              <span className="ml-2">→</span>
            </motion.a>
          </div>

          {/* Right content - bullets */}
          <div className="space-y-4 text-base ">
            <ul className="list-disc pl-5 space-y-3 font-quicksand">
              <li>Gestión completa del proyecto de principio a fin.</li>
              <li>
                Diseño 3D y vistas previas en Realidad Virtual para mayor
                claridad.
              </li>
              <li>Materiales de alta calidad para una durabilidad duradera.</li>
              <li>Comunicación transparente y servicio personalizado.</li>
              <li>
                Llevamos más de 25 años en el negocio sirviendo a la comunidad.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:flex md:items-center gap-10 pt-10 text-center">
          <div>
            <span className="text-5xl font-semibold">
              250<span className="text-3xl">+</span>
            </span>
            <div className="text-xs tracking-widest mt-1">
              PROYECTOS COMPLETADOS
            </div>
          </div>
          <div>
            <span className="text-5xl font-semibold">+15</span>
            <div className="text-xs tracking-widest mt-1">
              AÑOS DE EXPERIENCIA
            </div>
          </div>
        </div>
      </section>
      <section className="py-36 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="text-center  py-2">
              <div className="bg-black w-24 h-24 mx-auto flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-base font-quicksand font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
