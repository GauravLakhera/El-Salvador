"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaHandPointer, FaCreditCard, FaCheckCircle,
  FaRocket, FaShieldAlt, FaHeadset, FaUsers,
  FaWifi, FaCalendarAlt, FaDollarSign
} from 'react-icons/fa';

// Placeholder data for Tigo data packages
// IMPORTANT: You MUST replace this with actual, up-to-date Tigo data packages and prices from El Salvador.
const tigoDataPackages = [
  {
    id: 'pkg1',
    data: '1 GB',
    validity: '1 día',
    price: '1.00',
    benefits: ['Acceso a Internet']
  },
  {
    id: 'pkg2',
    data: '3 GB',
    validity: '7 días',
    price: '3.00',
    benefits: ['WhatsApp Ilimitado']
  },
  {
    id: 'pkg3',
    data: '5 GB',
    validity: '15 días',
    price: '5.00',
    benefits: ['WhatsApp y Facebook Ilimitado']
  },
  {
    id: 'pkg4',
    data: '10 GB',
    validity: '30 días',
    price: '10.00',
    benefits: ['Redes Sociales Gratis', 'Minutos Tigo']
  },
  {
    id: 'pkg5',
    data: '20 GB',
    validity: '30 días',
    price: '20.00',
    benefits: ['Todo Ilimitado', 'YouTube Gratis']
  },
];

// Main component for the Tigo Data Top-up Page
const TigoTopUpPage = () => {
  // Animation variants for sections to fade in and slide up
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for individual items within sections
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/rec.png')" }}
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
            Recargas de Datos Tigo
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#A0B0CC] mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mantente siempre conectado con tus seres queridos en El Salvador. Ofrecemos recargas de datos rápidas y seguras para celulares Tigo, directamente desde nuestra plataforma.
          </motion.p>
          <motion.button
            className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-8 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            ¡Recargar Ahora!
          </motion.button>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-white mx-auto max-w-6xl -mt-16 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          ¿Cómo Funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Selecciona tu Paquete */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaHandPointer /></div>
            <h3 className="font-semibold text-xl mb-2">1. Selecciona tu Paquete</h3>
            <p className="text-gray-600">Elige el paquete de datos Tigo que mejor se adapte a tus necesidades o a las de tu familiar/amigo.</p>
          </motion.div>
          {/* Step 2: Ingresa el Número Tigo */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaMobileAlt /></div>
            <h3 className="font-semibold text-xl mb-2">2. Ingresa el Número Tigo</h3>
            <p className="text-gray-600">Digita el número de celular Tigo al que deseas enviar la recarga. ¡Asegúrate de que sea correcto!</p>
          </motion.div>
          {/* Step 3: Confirma y Paga */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaCreditCard /></div>
            <h3 className="font-semibold text-xl mb-2">3. Confirma y Paga</h3>
            <p className="text-gray-600">Completa tu pago de forma segura utilizando nuestras opciones de pago disponibles.</p>
          </motion.div>
          {/* Step 4: Disfruta tu Conexión */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaCheckCircle /></div>
            <h3 className="font-semibold text-xl mb-2">4. Disfruta tu Conexión</h3>
            <p className="text-gray-600">La recarga de datos se aplica al instante y recibirás una confirmación.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Available Data Packages Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          Paquetes de Datos Disponibles
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          **Nota Importante:** Los paquetes y precios son ejemplos. Por favor, consulta con nosotros para conocer las ofertas de Tigo más recientes y actualizadas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tigoDataPackages.map((pkg) => (
            <motion.div key={pkg.id} className="bg-white p-6 flex flex-col items-center text-center" variants={itemVariants}>
              <div className="text-[#203C73] text-6xl mb-4"><FaWifi /></div>
              <h3 className="font-bold text-2xl text-black mb-2">{pkg.data}</h3>
              <p className="text-gray-700 text-lg mb-1 flex items-center"><FaCalendarAlt className="mr-2 text-[#203C73]" /> Vigencia: {pkg.validity}</p>
              <p className="text-gray-700 text-lg mb-4 flex items-center"><FaDollarSign className="mr-2 text-[#203C73]" /> Precio: ${pkg.price}</p>
              <ul className="text-gray-600 text-sm list-disc list-inside text-left">
                {pkg.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="mt-6 bg-[#203C73] text-white hover:bg-black px-6 py-3 font-bold text-md transition-all duration-300 transform hover:scale-105">
                Seleccionar
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-16 px-6 md:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#203C73] mb-10">
          ¿Por Qué Elegirnos para tus Recargas?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Benefit Item: Rapidez y Comodidad */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaRocket /></div>
            <h3 className="font-semibold text-xl mb-2">Rapidez y Comodidad</h3>
            <p className="text-gray-600">Envía recargas en segundos, desde cualquier lugar y en cualquier momento.</p>
          </motion.div>
          {/* Benefit Item: Seguridad Garantizada */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaShieldAlt /></div>
            <h3 className="font-semibold text-xl mb-2">Seguridad Garantizada</h3>
            <p className="text-gray-600">Tus transacciones están protegidas con la más alta tecnología de encriptación.</p>
          </motion.div>
          {/* Benefit Item: Soporte Dedicado */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaHeadset /></div>
            <h3 className="font-semibold text-xl mb-2">Soporte Dedicado</h3>
            <p className="text-gray-600">Nuestro equipo está listo para asistirte con cualquier consulta o problema.</p>
          </motion.div>
          {/* Benefit Item: Conexión Familiar */}
          <motion.div className="bg-[#E6EBF3] p-6 flex flex-col items-center text-center" variants={itemVariants}>
            <div className="text-[#203C73] text-5xl mb-4"><FaUsers /></div>
            <h3 className="font-semibold text-xl mb-2">Conexión Familiar</h3>
            <p className="text-gray-600">Ayuda a tus seres queridos en El Salvador a mantenerse siempre conectados.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Client Testimonials Section (Reused and adapted) */}
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
          {/* Testimonial 1: Carlos R. */}
          <motion.div className="bg-white p-8" variants={itemVariants}>
            <p className="italic text-lg text-gray-700 mb-4">
              “¡Excelente servicio de recargas! Pude enviar datos a mi familia en El Salvador de forma rápida y sin complicaciones. ¡Totalmente recomendado!”
            </p>
            <p className="font-semibold text-[#203C73]">— María S., Cliente Satisfecha</p>
          </motion.div>
          {/* Testimonial 2: Diana M. */}
          <motion.div className="bg-white p-8" variants={itemVariants}>
            <p className="italic text-lg text-gray-700 mb-4">
              “Necesitaba una recarga urgente para un empleado y la plataforma de El Salvador Constructores fue la solución perfecta. Rápido y confiable.”
            </p>
            <p className="font-semibold text-[#203C73]">— Juan P., Dueño de Negocio</p>
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
          ¡Mantén a tu gente conectada!
        </h2>
        <p className="text-lg md:text-xl mb-8 text-[#A0B0CC]">
          Envía recargas de datos Tigo de forma fácil, rápida y segura hoy mismo.
        </p>
        <motion.button
          className="bg-white text-[#203C73] hover:bg-[#E6EBF3] px-10 py-5 font-bold text-xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Recargar Ahora
        </motion.button>
      </motion.section>
    </div>
  );
};

export default TigoTopUpPage;
