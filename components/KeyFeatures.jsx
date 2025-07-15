'use client';

import { FaMapMarkedAlt, FaUniversity, FaCalendarCheck, FaImages, FaBlog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaMapMarkedAlt className="text-green-600 text-xl" />,
    text: "Compra terrenos para tu casa soñada.",
  },
  {
    icon: <FaUniversity className="text-blue-600 text-xl" />,
    text: "Préstamos bancarios y cuentas digitales.",
  },
  {
    icon: <FaCalendarCheck className="text-orange-600 text-xl" />,
    text: "Agenda visitas y consultas ahora.",
  },
  {
    icon: <FaImages className="text-purple-600 text-xl" />,
    text: "Galería de imágenes y videos.",
  },
  {
    icon: <FaBlog className="text-pink-600 text-xl" />,
    text: "Blog monetizable con Ezoic.",
  },
];

export default function KeyFeatures() {
  return (
    <div className="py-5 px-4 flex justify-center gap-4 items-center bg-[#203C73]">
      {/* Brief introductory paragraph */}


      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold text-blue-300">250+</p>
          <p className="text-gray-200 mt-2">Proyectos Completados</p>
        </motion.div>
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold text-blue-300">100%</p>
          <p className="text-gray-200 mt-2">Satisfacción del Cliente</p>
        </motion.div>
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold text-blue-300">15</p>
          <p className="text-gray-200 mt-2">Años de Experiencia</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold text-blue-300">50M+</p>
          <p className="text-gray-200 mt-2">Inversión Gestionada</p>
        </motion.div>
      </div>
      <motion.p
        className="text-start text-gray-200 w-5/12 font-quicksand  mb-8 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        En nuestra trayectoria, hemos logrado hitos significativos que reflejan nuestro compromiso y la confianza de nuestros clientes. Descubre los números que nos respaldan y lo que nos hace líderes en el sector.
      </motion.p>
      {/* Original Features Section */}
      {/* <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 text-gray-800 text-base sm:text-lg bg-white p-4 rounded-lg shadow-md flex-grow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <span>{feature.icon}</span>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
