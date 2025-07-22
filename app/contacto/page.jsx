"use client";

import { useState } from "react";
// Removed motion and AnimatePresence imports
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
// Assuming these components are available in your project, otherwise they would need to be defined or removed.
// import SmoothScroll from '@/components/SmoothScroll';
// import CustomCursor from '@/components/CustomCursor';
// import Navigation from '@/components/Navigation';
// import ParallaxImage from '@/components/ParallaxImage';
// import AnimatedText from '@/components/AnimatedText';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    mensaje: "",
    servicio: "construccion",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(""); // Clear previous errors

    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.nombre,
            email: formData.email,
            phone: formData.telefono,
            country: formData.pais,
            serviceInInterest: formData.servicio,
            message: formData.mensaje,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        // Clear form fields
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          pais: "",
          mensaje: "",
          servicio: "construccion",
        });

        // Reset submission state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        // Handle API errors
        setFormError(
          result.message || "Error al enviar la consulta. Inténtalo de nuevo."
        );
        setIsSubmitted(false); // Ensure form is visible again
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormError("Error de red. No se pudo conectar con el servidor.");
      setIsSubmitted(false); // Ensure form is visible again
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+503 2XXX-XXXX",
      description: "Lunes a Viernes, 8:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@elsalvadorconstructores.com",
      description: "Respuesta en menos de 24 horas",
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      info: "San Salvador, El Salvador",
      description: "Calle Principal #123, Colonia Escalón",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "+503 7XXX-XXXX",
      description: "Disponible las 24 horas",
    },
  ];

  const services = [
    { value: "construccion", label: "Construcción de Casa" },
    { value: "terreno", label: "Compra de Terreno" },
    { value: "financiamiento", label: "Servicios Financieros" },
    { value: "consultoria", label: "Consultoría General" },
    { value: "otro", label: "Otro" },
  ];

  const countries = [
    "Estados Unidos",
    "Canadá",
    "España",
    "Italia",
    "Francia",
    "Australia",
    "México",
    "Costa Rica",
    "Guatemala",
    "Honduras",
    "El Salvador",
    "Otro",
  ];

  return (
    // <SmoothScroll> {/* Commented out external components */}
    //   <CustomCursor />
    //   <Navigation />

    <main className="bg-blue-50 text-black" translate="no">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <ParallaxImage */}
          {/* src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920" */}
          {/* alt="Contacto" */}
          {/* className="w-full h-full" */}
          {/* /> */}
          <img
            src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 // Replaced motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
          >
            <span className="text-blue-400">Contáctanos</span>
          </h1>

          <p // Replaced motion.p
            className="text-xl md:text-2xl text-gray-100 leading-relaxed"
          >
            Estamos listos para ayudarte a construir la casa de tus sueños en El
            Salvador. Comencemos esta emocionante aventura juntos.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <AnimatedText className="text-center mb-20"> */}
          <h2 className="text-5xl font-bold mb-6 text-center">
            Múltiples Formas de{" "}
            <span className="text-blue-400">Contactarnos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
            Elige la forma que más te convenga para comenzar tu proyecto de
            construcción.
          </p>
          {/* </AnimatedText> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {contactInfo.map((item, index) => (
              <div // Replaced motion.div
                key={item.title}
                className="text-center group cursor-pointer p-8 hover:bg-gray-50 transition-all duration-300 rounded-lg shadow-md"
                // data-cursor-hover // Commented out external component prop
              >
                <item.icon
                  className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={48}
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{item.info}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* <AnimatedText className="text-center mb-20"> */}
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Solicita tu <span className="text-blue-400">Consulta Gratuita</span>
          </h2>
          <p className="text-xl text-gray-400 text-center">
            Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
          {/* </AnimatedText> */}
          <div // Replaced motion.div
            className="relative bg-gray-800 p-8 rounded-lg shadow-xl mt-20"
          >
            {formError && (
              <div className="mb-6 bg-red-500 text-white p-4 rounded-md flex items-center">
                <AlertCircle className="mr-2" size={20} />
                <p className="text-sm">{formError}</p>
              </div>
            )}
            {/* Removed AnimatePresence */}
            {!isSubmitted ? (
              <form // Replaced motion.form, removed key and animation props
                onSubmit={handleSubmit}
                className="space-y-8"
              >
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona tu país</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {services.map((service) => (
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
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, presupuesto, fechas importantes y cualquier pregunta específica que tengas..."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group rounded-lg"
                    // data-cursor-hover
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3" />
                        Enviar Consulta
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div // Replaced motion.div, removed key and animation props
                className="text-center py-16"
              >
                <CheckCircle
                  className="text-green-500 mx-auto mb-6"
                  size={64}
                />
                <h3 className="text-3xl font-bold mb-4 text-green-500">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-lg text-gray-400">
                  Gracias por contactarnos. Te responderemos en menos de 24
                  horas.
                </p>
              </div>
            )}
          </div>{" "}
          {/* Removed AnimatePresence closing tag */}
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* <AnimatedText> */}
          <h2 className="text-5xl font-bold mb-8">
            ¿Necesitas Respuesta{" "}
            <span className="text-blue-400">Inmediata</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Conecta con nosotros por WhatsApp para respuestas rápidas y
            asesoramiento personalizado sobre tu proyecto de construcción.
          </p>

          <a
            href="https://wa.me/5037XXXXXXXX" // Example WhatsApp link (replace with actual number)
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-700 px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center group rounded-lg"
            // data-cursor-hover
          >
            <MessageSquare className="mr-3" />
            Chatear por WhatsApp
          </a>
          {/* </AnimatedText> */}
        </div>
      </section>

      {/* Office Hours */}
      <section className="p-5 bg-gray-100 ">
        <div className="max-w-7xl mx-auto text-center shadow-lg p-4 rounded-lg">
          {/* <AnimatedText> */}
          <h2 className="text-5xl font-bold mb-12">
            Horarios de <span className="text-blue-400">Atención</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <Clock className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Oficina</h3>
              <p className="text-gray-700">Lunes - Viernes</p>
              <p className="text-gray-700">8:00 AM - 6:00 PM</p>
            </div>

            <div className="p-8">
              <MessageSquare
                className="text-green-500 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-700">Todos los días</p>
              <p className="text-gray-700">24/7</p>
            </div>

            <div className="p-8">
              <Mail className="text-purple-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-700">Respuesta en</p>
              <p className="text-gray-700">{"< 24 horas"}</p>
            </div>
          </div>
          {/* </AnimatedText> */}
        </div>
      </section>
    </main>
    // </SmoothScroll>
  );
}
