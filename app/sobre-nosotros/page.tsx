'use client';

import { motion } from 'framer-motion';
import { Users, Award, MapPin, Clock } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ParallaxImage from '@/components/ParallaxImage';
import AnimatedText from '@/components/AnimatedText';

export default function SobreNosotros() {
  const stats = [
    { number: "15+", label: "Años de Experiencia", icon: Clock },
    { number: "200+", label: "Casas Construidas", icon: Award },
    { number: "14", label: "Departamentos Cubiertos", icon: MapPin },
    { number: "500+", label: "Familias Felices", icon: Users },
  ];

  const team = [
    {
      name: "Carlos Mendoza",
      role: "Director General",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ingeniero civil con 20 años de experiencia en construcción residencial."
    },
    {
      name: "María González",
      role: "Arquitecta Principal",
      image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Especialista en diseño arquitectónico sostenible y funcional."
    },
    {
      name: "Roberto Flores",
      role: "Coordinador de Proyectos",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Experto en gestión de proyectos y atención al cliente internacional."
    }
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
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Equipo de construcción"
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
              <span className="text-blue-400">Nuestra</span> Historia
            </motion.h1>
            
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Más de 15 años construyendo sueños y conectando corazones 
              salvadoreños con su tierra natal.
            </motion.p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimatedText>
                  <h2 className="text-5xl font-bold mb-8">
                    Construyendo <span className="text-blue-400">Puentes</span> Entre Culturas
                  </h2>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    Fundada en 2008 por un grupo de ingenieros y arquitectos salvadoreños, 
                    El Salvador Constructores nació con una misión clara: facilitar el sueño 
                    de construir una casa en El Salvador para miles de salvadoreños que viven 
                    en el exterior.
                  </p>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    Entendemos los desafíos únicos que enfrentan nuestros compatriotas en 
                    el extranjero. Por eso, hemos desarrollado un sistema integral que abarca 
                    desde la selección del terreno hasta la entrega de llaves, incluyendo 
                    servicios financieros y de transferencia.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Cada casa que construimos lleva el amor y la nostalgia de una familia 
                    que sueña con regresar a sus raíces. Es más que construcción, es 
                    construcción de esperanza.
                  </p>
                </AnimatedText>
              </div>
              
              <div className="relative">
                <ParallaxImage
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Casa construida por El Salvador Constructores"
                  className="w-full h-96 rounded-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Nuestros <span className="text-blue-400">Logros</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Más de una década de experiencia respaldada por resultados concretos 
                y familias satisfechas.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <stat.icon className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Nuestro <span className="text-blue-400">Equipo</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Profesionales comprometidos con la excelencia y la satisfacción 
                total de nuestros clientes.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative overflow-hidden h-80 mb-6">
                    <ParallaxImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Nuestros <span className="text-blue-400">Valores</span>
              </h2>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Transparencia",
                  description: "Comunicación clara y honesta en cada etapa del proyecto."
                },
                {
                  title: "Calidad",
                  description: "Materiales de primera y mano de obra especializada."
                },
                {
                  title: "Compromiso",
                  description: "Dedicación total hasta la entrega de tu hogar perfecto."
                },
                {
                  title: "Innovación",
                  description: "Técnicas modernas y tecnología de vanguardia."
                },
                {
                  title: "Responsabilidad",
                  description: "Construcción sostenible y respeto por el medio ambiente."
                },
                {
                  title: "Familia",
                  description: "Tratamos cada proyecto como si fuera para nuestra propia familia."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center p-8 hover:bg-gray-800 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}