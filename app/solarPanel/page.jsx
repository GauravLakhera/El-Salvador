"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaTools,
  FaFileAlt,
  FaCog,
  FaRocket,
  FaMoneyBillWave,
  FaLeaf,
  FaBolt,
  FaHome,
  FaChartLine,
} from "react-icons/fa"; // Importing icons from Font Awesome
import SmoothScroll from "@/components/SmoothScroll";

// Main component for the Solar Panel Installation Page
const SolarPanelInstallationPage = () => {
  const timeline = [
    {
      year: "2008",
      title: "1. Evaluación gratuita",
      description: "Analizamos el consumo eléctrico y condiciones del sitio.",
      image: "/images/solar/1.png",
    },
    {
      year: "2015",
      title: "2. Gestión de permisos",
      description: "Nos encargamos de toda la documentación.",
      image: "/images/solar/2.png",
    },
    {
      year: "2018",
      title: "Instalación eficiente",
      description: "Instalamos en pocos días con técnicos certificados.",
      image: "/images/solar/3.png",
    },
    {
      year: "2023",
      title: "4. Mantenimiento incluido",
      description:
        "Garantía, limpieza y revisiones periódicas para máximo rendimiento.",
      image: "/images/solar/4.png",
    },
  ];
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
     <SmoothScroll>
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/solarbg.jpg')" }} // Updated placeholder background to primary color
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#203C73] to-black/50 opacity-80"></div>{" "}
        {/* Updated gradient colors */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Instalación de Paneles Solares
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#c5d6f3] mb-8" // Updated text color
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            En El Salvador Constructores, S.A. de C.V. ofrecemos soluciones
            energéticas modernas y sostenibles a través de la instalación de
            sistemas solares de última generación para residencias y negocios.
          </motion.p>
          <motion.button
            className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-8 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-105" // Updated button colors
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Cotiza tu Proyecto Solar Hoy
          </motion.button>
        </div>
      </motion.section>

      {/* What Our Service Offers Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-white mx-auto max-w-6xl -mt-16 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          {" "}
          {/* Updated text color */}
          ¿Qué incluye nuestro servicio?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item: Asesoría personalizada */}
          <motion.div
            className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <div className="text-[#203C73] text-5xl mb-4">
              <FaLightbulb />
            </div>{" "}
            {/* Updated icon color */}
            <h3 className="font-semibold text-xl mb-2">
              Asesoría personalizada
            </h3>
            <p className="text-gray-600">
              Te ayudamos a elegir el sistema solar ideal según tus necesidades
              y consumo energético.
            </p>
          </motion.div>
          {/* Service Item: Instalación profesional */}
          <motion.div
            className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <div className="text-[#203C73] text-5xl mb-4">
              <FaTools />
            </div>{" "}
            {/* Updated icon color */}
            <h3 className="font-semibold text-xl mb-2">
              Instalación profesional
            </h3>
            <p className="text-gray-600">
              Nuestro equipo técnico se encarga de toda la instalación,
              cumpliendo con los más altos estándares de calidad.
            </p>
          </motion.div>
          {/* Service Item: Gestión de permisos */}
          <motion.div
            className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <div className="text-[#203C73] text-5xl mb-4">
              <FaFileAlt />
            </div>{" "}
            {/* Updated icon color */}
            <h3 className="font-semibold text-xl mb-2">Gestión de permisos</h3>
            <p className="text-gray-600">
              Olvídate del papeleo, nosotros nos encargamos de tramitar todos
              los permisos y licencias necesarias para la instalación legal y
              segura.
            </p>
          </motion.div>
          {/* Service Item: Mantenimiento garantizado */}
          <motion.div
            className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <div className="text-[#203C73] text-5xl mb-4">
              <FaCog />
            </div>{" "}
            {/* Updated icon color */}
            <h3 className="font-semibold text-xl mb-2">
              Mantenimiento garantizado
            </h3>
            <p className="text-gray-600">
              Brindamos servicio de mantenimiento preventivo y correctivo, para
              que tu inversión funcione siempre al máximo rendimiento.
            </p>
          </motion.div>
          {/* Service Item: Tecnología de punta */}
          <motion.div
            className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <div className="text-[#203C73] text-5xl mb-4">
              <FaRocket />
            </div>{" "}
            {/* Updated icon color */}
            <h3 className="font-semibold text-xl mb-2">Tecnología de punta</h3>
            <p className="text-gray-600">
              Trabajamos con paneles solares de alta eficiencia y sistemas
              inteligentes de monitoreo para optimizar tu ahorro energético.
            </p>
          </motion.div>
          {/* Call to action for savings */}
          <motion.div
            className="bg-black p-6 flex flex-col items-center text-center col-span-1 md:col-span-2 lg:col-span-1 justify-center"
            variants={itemVariants}
          >
            {" "}
            {/* Updated background color */}
            <h3 className="font-bold text-2xl text-white mb-2">
              Ahorra hasta un 80% en tu factura eléctrica
            </h3>
            <p className="text-gray-300">
              y contribuye al cuidado del medio ambiente.
            </p>{" "}
            {/* Updated text color */}
            <p className="text-white mt-4 text-lg font-semibold">
              El Salvador Constructores — Energía limpia, ahorro garantizado.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Solar Energy Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          {" "}
          {/* Updated text color */}
          ¿Por qué elegir energía solar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit Item: Ahorro económico */}
          <motion.div
            className="bg-white p-6 flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-4xl">
              <FaMoneyBillWave />
            </div>{" "}
            {/* Updated icon color */}
            <div>
              <h3 className="font-semibold text-xl mb-1">Ahorro económico</h3>
              <p className="text-gray-600">
                Reduce significativamente tu factura eléctrica desde el primer
                mes.
              </p>
            </div>
          </motion.div>
          {/* Benefit Item: Energía sostenible */}
          <motion.div
            className="bg-white p-6 flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-4xl">
              <FaLeaf />
            </div>{" "}
            {/* Updated icon color */}
            <div>
              <h3 className="font-semibold text-xl mb-1">Energía sostenible</h3>
              <p className="text-gray-600">
                Contribuye al medio ambiente reduciendo tu huella de carbono.
              </p>
            </div>
          </motion.div>
          {/* Benefit Item: Independencia energética */}
          <motion.div
            className="bg-white p-6 flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-4xl">
              <FaBolt />
            </div>{" "}
            {/* Updated icon color */}
            <div>
              <h3 className="font-semibold text-xl mb-1">
                Independencia energética
              </h3>
              <p className="text-gray-600">
                Menos dependencia de las compañías eléctricas y protección ante
                aumentos de tarifas.
              </p>
            </div>
          </motion.div>
          {/* Benefit Item: Incrementa el valor de tu propiedad */}
          <motion.div
            className="bg-white p-6 flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-4xl">
              <FaHome />
            </div>{" "}
            {/* Updated icon color */}
            <div>
              <h3 className="font-semibold text-xl mb-1">
                Incrementa el valor de tu propiedad
              </h3>
              <p className="text-gray-600">
                Casas y comercios con paneles solares tienen mayor valor de
                reventa.
              </p>
            </div>
          </motion.div>
          {/* Benefit Item: Retorno rápido de inversión */}
          <motion.div
            className="bg-white p-6 flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="text-[#203C73] text-4xl">
              <FaChartLine />
            </div>{" "}
            {/* Updated icon color */}
            <div>
              <h3 className="font-semibold text-xl mb-1">
                Retorno rápido de inversión
              </h3>
              <p className="text-gray-600">
                Recupera tu inversión en pocos años con ahorro constante.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline */}
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-6 md:mb-10">
            Proceso rápido y sin complicaciones
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Block (Text) */}
              <div
                className={`flex-1 w-full md:w-auto ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                } text-center px-4 mb-4 md:mb-0`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 font-montserrat">
                  {item.title}
                </h3>
                <p className="text-body text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>

              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-t bg-blue-950 rounded-full mb-2"></div>
                <div className="w-px h-20 bg-gray-300 last:h-0"></div>
              </div>

              {/* Image Block */}
              <div
                className={`flex-1 w-full md:w-auto ${
                  index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'
                } mt-4 md:mt-0 flex justify-center`}
              >
                <div className="inline-block bg-black text-white font-bold font-montserrat w-full">
                  <img className="w-full h-48 md:h-[14rem] object-cover" src={item.image} alt={item.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Past Installations Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          {" "}
          {/* Updated text color */}
          Nuestras Instalaciones Anteriores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Past Project 1: Complejo Las Américas */}
          <motion.div
            className="bg-white overflow-hidden"
            variants={itemVariants}
          >
            <img
              src="/images/solar/install1.jpg" // Updated placeholder background to primary color
              alt="Instalación Solar – Complejo Las Américas"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/203C73/FFFFFF?text=Imagen+no+disponible";
              }} // Updated fallback placeholder
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-[#203C73] mb-2">
                Instalación Solar – Complejo Las Américas
              </h3>{" "}
              {/* Updated text color */}
              <p className="text-gray-600 text-sm mb-2">
                Ubicación: Santa Tecla
              </p>
              <p className="text-gray-700">
                Instalación de sistema solar de 100 kW en plaza comercial, con
                tecnología de última generación, monitoreo inteligente y ahorro
                energético superior al 40%.
              </p>
              <p className="text-gray-500 text-sm mt-3">Operativo desde 2024</p>
            </div>
          </motion.div>

          {/* Past Project 2: Residencia Moderna (Placeholder) */}
          <motion.div
            className="bg-white overflow-hidden"
            variants={itemVariants}
          >
            <img
              src="/images/solar/install2.jpg" // Updated placeholder background to primary color
              alt="Residencia Moderna con Paneles Solares"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/203C73/FFFFFF?text=Imagen+no+disponible";
              }} // Updated fallback placeholder
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-[#203C73] mb-2">
                Residencia Familiar "El Roble"
              </h3>{" "}
              {/* Updated text color */}
              <p className="text-gray-600 text-sm mb-2">Ubicación: Santa Ana</p>
              <p className="text-gray-700">
                Sistema solar de 5 kW para una vivienda unifamiliar, logrando
                una reducción del 60% en el consumo de energía eléctrica.
              </p>
              <p className="text-gray-500 text-sm mt-3">Completado en 2023</p>
            </div>
          </motion.div>

          {/* Past Project 3: Edificio de Oficinas (Placeholder) */}
          <motion.div
            className="bg-white overflow-hidden"
            variants={itemVariants}
          >
            <img
              src="/images/solar/install3.jpg" // Updated placeholder background to primary color
              alt="Edificio de Oficinas con Paneles Solares"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/203C73/FFFFFF?text=Imagen+no+disponible";
              }} // Updated fallback placeholder
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-[#203C73] mb-2">
                Oficinas "Innovación Verde"
              </h3>{" "}
              {/* Updated text color */}
              <p className="text-gray-600 text-sm mb-2">
                Ubicación: San Salvador
              </p>
              <p className="text-gray-700">
                Implementación de solución solar de 20 kW para un edificio
                corporativo, contribuyendo a la certificación de edificio
                sostenible.
              </p>
              <p className="text-gray-500 text-sm mt-3">Operativo desde 2024</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          {" "}
          {/* Updated text color */}
          Testimonios de nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1: Carlos R. */}
          <motion.div className="bg-[#E6EBF3] p-8" variants={itemVariants}>
            {" "}
            {/* Updated background color */}
            <p className="italic text-lg text-gray-700 mb-4">
              “Desde que instalamos paneles solares con El Salvador
              Constructores, hemos reducido más del 70% de nuestra factura. Todo
              fue rápido y sin complicaciones.”
            </p>
            <p className="font-semibold text-[#203C73]">
              — Carlos R., cliente residencial
            </p>{" "}
            {/* Updated text color */}
          </motion.div>
          {/* Testimonial 2: Diana M. */}
          <motion.div className="bg-[#E6EBF3] p-8" variants={itemVariants}>
            {" "}
            {/* Updated background color */}
            <p className="italic text-lg text-gray-700 mb-4">
              “Excelente servicio, nos ayudaron con todos los trámites y ahora
              nuestra empresa ahorra miles de dólares al año.”
            </p>
            <p className="font-semibold text-[#203C73]">
              — Diana M., empresaria local
            </p>{" "}
            {/* Updated text color */}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer / Call to Action */}
      <motion.section
        className="py-12 px-6 md:px-12 bg-[#203C73] text-white text-center" // Updated background color
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¡Transforma tu energía hoy!
        </h2>
        <p className="text-lg md:text-xl mb-8 text-[#A0B0CC]">
          {" "}
          {/* Updated text color */}
          Contáctanos para una evaluación gratuita y descubre cómo puedes
          ahorrar.
        </p>
        <motion.button
          className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-10 py-5 font-bold text-xl transition-all duration-300 transform hover:scale-105" // Updated button colors
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Agenda tu Consulta
        </motion.button>
      </motion.section>
    </div>
    </SmoothScroll>
  );
};

export default SolarPanelInstallationPage;
