'use client';

import { motion } from 'framer-motion';
import { MapPin, Home, CreditCard, FileText, Users,Sun, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ParallaxImage from '@/components/ParallaxImage';
import AnimatedText from '@/components/AnimatedText';

export default function Servicios() {
const mainServices = [
  {
    title: "Compra de Terrenos",
    description: "Selección y adquisición de terrenos en las mejores ubicaciones de El Salvador",
    icon: MapPin, // Assuming MapPin is an imported icon component
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Asesoría legal completa",
      "Verificación de documentos",
      "Negociación de precios",
      "Trámites notariales"
    ]
  },
  {
    title: "Construcción Personalizada",
    description: "Diseño y construcción de casas únicas adaptadas a tu estilo de vida",
    icon: Home, // Assuming Home is an imported icon component
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Diseño arquitectónico personalizado",
      "Materiales de primera calidad",
      "Supervisión constante",
      "Garantía de construcción"
    ]
  },
  {
    title: "Servicios Financieros",
    description: "Facilitamos el financiamiento y transferencias desde el exterior",
    icon: CreditCard, // Assuming CreditCard is an imported icon component
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Conexión con Banco Promerica",
      "Gestión FSV",
      "MoneyGram y transferencias",
      "Planes de financiamiento"
    ]
  },
  {
    title: "Instalación de Paneles Solares",
    description: "Implementación de sistemas de energía solar para hogares y negocios.",
    icon: Sun, // You would need to import a Sun icon, e.g., from react-icons
    image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg", // A relevant image for solar panels
    features: [
      "Asesoría y diseño personalizado",
      "Instalación profesional certificada",
      "Gestión de permisos y trámites",
      "Mantenimiento y monitoreo",
      "Ahorro energético garantizado"
    ]
  }
];

  const processSteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Conversamos sobre tus necesidades, presupuesto y preferencias para tu nuevo hogar.",
      icon: Users
    },
    {
      step: "02",
      title: "Selección de Terreno",
      description: "Te ayudamos a encontrar el terreno perfecto según tu ubicación y presupuesto deseado.",
      icon: MapPin
    },
    {
      step: "03",
      title: "Diseño y Planificación",
      description: "Creamos el diseño arquitectónico personalizado y planificamos cada detalle.",
      icon: FileText
    },
    {
      step: "04",
      title: "Construcción",
      description: "Iniciamos la construcción con supervisión constante y actualizaciones regulares.",
      icon: Truck
    },
    {
      step: "05",
      title: "Entrega de Llaves",
      description: "Entregamos tu casa completamente terminada con garantía y documentación completa.",
      icon: CheckCircle
    }
  ];

  const additionalServices = [
    {
      title: "Gestión de Documentos",
      description: "Tramitación completa de permisos de construcción y documentación legal."
    },
    {
      title: "Supervisión Remota",
      description: "Informes semanales con fotos y videos del avance de tu construcción."
    },
    {
      title: "Servicios Bancarios",
      description: "Apertura de cuentas digitales en Banco Promerica para salvadoreños en el exterior."
    },
    {
      title: "Transferencias MoneyGram",
      description: "Facilitamos las transferencias de dinero de manera rápida y segura."
    },
    {
      title: "Programa FSV",
      description: "Te ayudamos a acceder al programa gubernamental de vivienda cercana."
    },
    {
      title: "Servicios de Telecomunicaciones",
      description: "Gestión de recargas telefónicas para Tigo y otras operadoras."
    }
  ];

  return (
    <SmoothScroll>
      <CustomCursor />
     
      
      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Servicios de construcción"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Nuestros <span className="text-blue-400">Servicios</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed"
            >
              Servicios integrales para construir tu hogar ideal en El Salvador, 
              diseñados especialmente para salvadoreños en el exterior.
            </motion.p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Servicios <span className="text-blue-400">Principales</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Desde la compra del terreno hasta la entrega de llaves, 
                te acompañamos en cada paso del proceso.
              </p>
            </AnimatedText>

            <div className="space-y-32">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <service.icon className="text-blue-400 mb-6" size={64} />
                    <h3 className="text-4xl font-bold mb-6">{service.title}</h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-lg">
                          <CheckCircle className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group"
                      data-cursor-hover
                    >
                      Más Información
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <ParallaxImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 rounded-none"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Nuestro <span className="text-blue-400">Proceso</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Un proceso paso a paso diseñado para garantizar la satisfacción 
                total y la tranquilidad de nuestros clientes.
              </p>
            </AnimatedText>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-11' : ''}`}>
                    <div className="text-6xl font-bold text-blue-400 opacity-50">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-9' : 'lg:col-start-3'}`}>
                    <step.icon className="text-blue-400" size={64} />
                  </div>
                  
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-5'}`}>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Servicios <span className="text-blue-400">Adicionales</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Servicios complementarios para facilitar tu experiencia 
                como salvadoreño en el exterior.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gray-900 hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
                  data-cursor-hover
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Enlaces <span className="text-blue-400">Útiles</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Recursos importantes para salvadoreños en el exterior.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Banco Promerica Digital",
                  description: "Abre tu cuenta digital desde el exterior y gestiona tus finanzas para tu proyecto de construcción.",
                  url: "https://solucionesdigitales.promerica.com.sv/salvadorenos-en-el-exterior",
                  color: "bg-blue-600"
                },
                {
                  title: "FSV Programa de Vivienda",
                  description: "Conoce los programas gubernamentales de vivienda y subsidios disponibles.",
                  url: "https://portal.fsv.gob.sv/vivienda-cercana/",
                  color: "bg-green-600"
                }
              ].map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${link.color} p-8 hover:scale-105 transition-all duration-300 group cursor-pointer block`}
                  data-cursor-hover
                >
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-y-[-4px] transition-transform">
                    {link.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {link.description}
                  </p>
                  <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}