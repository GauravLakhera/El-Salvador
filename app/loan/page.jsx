"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BankingLoans = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it to the console.
    console.log('Formulario enviado:', formData);
    // You could also show a confirmation message to the user here.
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for form elements
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800  flex flex-col items-center justify-center">
      {/* Header Section with Background Image */}
      <motion.div
        className="relative text-center mb-12  w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Placeholder background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>
        <div className="relative z-10 text-white"> {/* Ensure text is on top and white */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
            variants={textVariants}
          >
            Préstamos y Cuentas Bancarias
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-6"
            variants={textVariants}
          >
            Te ayudamos a navegar por las opciones de financiamiento y cuentas bancarias
            para que la construcción de tu hogar en El Salvador sea una realidad.
            Explora nuestras recomendaciones y contáctanos para asistencia personalizada.
          </motion.p>
        </div>
      </motion.div>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 mb-12">
        {/* Banking Institutions Links */}
        <motion.div
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center"> {/* Changed to blue-950 */}
            Explora Opciones Bancarias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://solucionesdigitales.promerica.com.sv/salvadorenos-en-el-exterior"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Cuentas Bancarias Digitales (Promerica)
              </h3>
              <p className="text-blue-600 text-sm mb-4">
                Abre tu cuenta bancaria digital desde el extranjero con Banco Promerica.
                Ideal para salvadoreños en el exterior.
              </p>
              <span className="text-blue-500 font-medium text-sm px-4 py-2 bg-blue-200 rounded-full">
                Visitar Sitio
              </span>
            </a>
            <a
              href="https://portal.fsv.gob.sv/vivienda-cercana/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Plan de Viviendas del Gobierno (FSV)
              </h3>
              <p className="text-green-600 text-sm mb-4">
                Solicita información sobre los planes de vivienda ofrecidos por el
                Fondo Social para la Vivienda de El Salvador.
              </p>
              <span className="text-green-500 font-medium text-sm px-4 py-2 bg-green-200 rounded-full">
                Solicitar Información
              </span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center"> {/* Changed to blue-950 */}
            ¡Contáctanos para Asesoría!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Número de Teléfono (Opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="+503 7890-1234"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tu Mensaje o Pregunta
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="Cuéntanos sobre tus necesidades de financiamiento o preguntas..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Solicitud
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p>
          <span className="font-semibold text-indigo-700">Nota:</span> Esta página
          proporciona enlaces a instituciones financieras externas y un formulario de contacto.
          No somos una institución bancaria ni ofrecemos préstamos directamente.
        </p>
      </motion.div>
    </div>
  );
};

export default BankingLoans;
