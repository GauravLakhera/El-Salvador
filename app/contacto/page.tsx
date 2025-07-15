'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ParallaxImage from '@/components/ParallaxImage';
import AnimatedText from '@/components/AnimatedText';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    mensaje: '',
    servicio: 'construccion'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos al servidor
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        pais: '',
        mensaje: '',
        servicio: 'construccion'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+503 2XXX-XXXX",
      description: "Lunes a Viernes, 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@elsalvadorconstructores.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      info: "San Salvador, El Salvador",
      description: "Calle Principal #123, Colonia Escalón"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "+503 7XXX-XXXX",
      description: "Disponible las 24 horas"
    }
  ];

  const services = [
    { value: 'construccion', label: 'Construcción de Casa' },
    { value: 'terreno', label: 'Compra de Terreno' },
    { value: 'financiamiento', label: 'Servicios Financieros' },
    { value: 'consultoria', label: 'Consultoría General' },
    { value: 'otro', label: 'Otro' }
  ];

  const countries = [
    'Estados Unidos', 'Canadá', 'España', 'Italia', 'Francia', 
    'Australia', 'México', 'Costa Rica', 'Guatemala', 'Honduras', 'Otro'
  ];

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      
      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Contacto"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-blue-400">Contáctanos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Estamos listos para ayudarte a construir la casa de tus sueños en El Salvador. 
              Comencemos esta emocionante aventura juntos.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Múltiples Formas de <span className="text-blue-400">Contactarnos</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Elige la forma que más te convenga para comenzar tu proyecto de construcción.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer p-8 hover:bg-gray-900 transition-all duration-300"
                  data-cursor-hover
                >
                  <item.icon className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Solicita tu <span className="text-blue-400">Consulta Gratuita</span>
              </h2>
              <p className="text-xl text-gray-400">
                Completa el formulario y te contactaremos en menos de 24 horas.
              </p>
            </AnimatedText>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (XXX) XXX-XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        País de Residencia
                      </label>
                      <select
                        name="pais"
                        value={formData.pais}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Selecciona tu país</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Servicio de Interés
                      </label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-3 text-gray-300">
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Cuéntanos sobre tu proyecto, presupuesto, fechas importantes y cualquier pregunta específica que tengas..."
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
                      data-cursor-hover
                    >
                      <Send className="mr-3" />
                      Enviar Consulta
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
                  <h3 className="text-3xl font-bold mb-4 text-green-500">¡Mensaje Enviado!</h3>
                  <p className="text-lg text-gray-400">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText>
              <h2 className="text-5xl font-bold mb-8">
                ¿Necesitas Respuesta <span className="text-blue-400">Inmediata</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Conecta con nosotros por WhatsApp para respuestas rápidas y 
                asesoramiento personalizado sobre tu proyecto de construcción.
              </p>
              
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
                data-cursor-hover
              >
                <MessageSquare className="mr-3" />
                Chatear por WhatsApp
              </a>
            </AnimatedText>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedText>
              <h2 className="text-5xl font-bold mb-12">
                Horarios de <span className="text-blue-400">Atención</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8">
                  <Clock className="text-blue-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Oficina</h3>
                  <p className="text-gray-400">Lunes - Viernes</p>
                  <p className="text-gray-400">8:00 AM - 6:00 PM</p>
                </div>
                
                <div className="p-8">
                  <MessageSquare className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-400">Todos los días</p>
                  <p className="text-gray-400">24/7</p>
                </div>
                
                <div className="p-8">
                  <Mail className="text-purple-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400">Respuesta en</p>
                  <p className="text-gray-400">{'< 24 horas'}</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}