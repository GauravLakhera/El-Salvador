"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake, // New icon for partnerships
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaMoneyBillWave, // Icon for financial services
  FaExchangeAlt, // Icon for transactions
  FaMobileAlt, // Can still be relevant for some services
} from "react-icons/fa";

// Placeholder data for affiliate partners
// IMPORTANT: Replace 'path/to/your/image.png' with actual image paths.
const affiliatePartners = [
  {
    id: "tigo",
    name: "Tigo",
    logo: "/images/affiliate/tigo.jpeg",
    description: "Servicios de telefonía y datos móviles.",
  },
  {
    id: "bp",
    name: "Banco Promerica",
    logo: "/images/affiliate/bancoPromerica.jpeg",
    description: "Servicios bancarios y financieros.",
  },
  {
    id: "bh",
    name: "Banco Hipotecario",
    logo: "/images/affiliate/bancoHipotecario.jpeg",
    description: "Soluciones de crédito y vivienda.",
  },

  {
    id: "mg",
    name: "MoneyGram",
    logo: "/images/affiliate/moneygram.jpeg",
    description: "Transferencias internacionales de dinero.",
  },
  {
    id: "bancoagricola",
    name: "Bancoagricola",
    logo: "/images/affiliate/bancoagricola.jpeg",
    description: "Conectividad y entretenimiento.",
  },
  {
    id: "claro",
    name: "Claro",
    logo: "/images/affiliate/claro.jpeg",
    description: "Envíos y recepción de dinero global.",
  },
  // Add more partners as needed
  {
    id: "cuscatlan",
    name: "Banco Cuscatlan",
    logo: "/images/affiliate/cuscatlan.jpeg",
    description: "Soluciones móviles y de comunicación.",
  },
  {
    id: "movistar",
    name: "Movistar",
    logo: "/images/affiliate/movistar.jpeg",
    description: "Telefonía, internet y televisión.",
  },
];

// Main component for the Affiliate Page
const AffiliatePage = () => {
  // Animation variants for sections to fade in and slide up
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for individual items within sections
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }} // Make sure to replace with an appropriate hero image
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#203C73] to-black opacity-80"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestras Alianzas Estratégicas
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#A0B0CC] mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conectamos con las mejores empresas para ofrecerte una amplia gama
            de servicios confiables y accesibles.
          </motion.p>
          <motion.button
            className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-8 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Explorar Servicios
          </motion.button>
        </div>
      </motion.section>

      {/* Our Partners Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-[#E6EBF3] mx-auto max-w-6xl -mt-16 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          Nuestros Aliados
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trabajamos de la mano con líderes en sus respectivos sectores para
          garantizar la calidad y eficiencia de cada servicio.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {affiliatePartners.map((partner) => (
            <motion.div
              key={partner.id}
              className=" p-6 flex bg-white cursor-pointer hover:bg-gray-100 flex-col items-center text-center shadow-lg rounded-lg"
              variants={itemVariants}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 object-contain mb-4"
              />
              <h3 className="font-semibold text-xl mb-2 text-black">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section - Re-contextualized */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          Beneficios de Usar Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit Item: Amplia Gama de Servicios */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Amplia Gama de Servicios
            </h3>
            <p className="text-gray-600">
              Accede a una variedad de soluciones financieras, de comunicación y
              más, todo en un solo lugar.
            </p>
          </motion.div>
          {/* Benefit Item: Transacciones Seguras */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Transacciones Seguras
            </h3>
            <p className="text-gray-600">
              Todas tus operaciones se realizan con la máxima seguridad y
              protección de datos.
            </p>
          </motion.div>
          {/* Benefit Item: Soporte Confiable */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaHeadset />
            </div>
            <h3 className="font-semibold text-xl mb-2">Soporte Confiable</h3>
            <p className="text-gray-600">
              Nuestro equipo está disponible para ayudarte en cada paso de tus
              transacciones.
            </p>
          </motion.div>
          {/* New Benefit Item: Conectividad y Acceso */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Conectividad y Acceso
            </h3>
            <p className="text-gray-600">
              Facilitamos tu conexión con servicios esenciales y familiares,
              estés donde estés.
            </p>
          </motion.div>
          {/* New Benefit Item: Comodidad Total */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaMoneyBillWave />
            </div>
            <h3 className="font-semibold text-xl mb-2">Comodidad Total</h3>
            <p className="text-gray-600">
              Realiza tus gestiones desde la comodidad de tu hogar u oficina,
              sin filas ni esperas.
            </p>
          </motion.div>
          {/* New Benefit Item: Rapidez y Eficiencia */}
          <motion.div
            className="bg-white p-6 flex flex-col items-center text-center shadow"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-5xl mb-4">
              <FaExchangeAlt />
            </div>
            <h3 className="font-semibold text-xl mb-2">Rapidez y Eficiencia</h3>
            <p className="text-gray-600">
              Procesamos tus solicitudes de manera ágil para que accedas a tus
              servicios sin demoras.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg"
            variants={itemVariants}
          >
            <p className="italic text-lg text-gray-700 mb-4">
              “Me encanta la facilidad para acceder a diferentes servicios en un
              solo lugar. ¡Una plataforma muy útil y segura!”
            </p>
            <p className="font-semibold text-[#203C73]">
              — Sofía L., Cliente Satisfecha
            </p>
          </motion.div>
          {/* Testimonial 2 */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg"
            variants={itemVariants}
          >
            <p className="italic text-lg text-gray-700 mb-4">
              “He utilizado varios de sus servicios con socios como MoneyGram y
              la experiencia siempre ha sido excelente. Muy profesionales.”
            </p>
            <p className="font-semibold text-[#203C73]">
              — Ricardo G., Usuario Frecuente
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer / Call to Action */}
      <motion.section
        className="py-12 px-6 md:px-12 bg-[#203C73] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Descubre todo lo que podemos hacer por ti
        </h2>
        <p className="text-lg md:text-xl mb-8 text-[#A0B0CC]">
          Explora nuestra red de aliados y encuentra el servicio que necesitas.
        </p>
        <motion.button
          className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-10 py-5 font-bold text-xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Conocer Más
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AffiliatePage;
