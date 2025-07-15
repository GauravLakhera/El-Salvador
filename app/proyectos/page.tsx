'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, Home, Filter } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ParallaxImage from '@/components/ParallaxImage';
import AnimatedText from '@/components/AnimatedText';

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'completed', label: 'Completados' },
    { id: 'in-progress', label: 'En Construcción' },
    { id: 'planning', label: 'En Planificación' }
  ];

  const projects = [
    {
      id: 1,
      title: "Villa Moderna San Salvador",
      location: "San Salvador, El Salvador",
      status: "completed",
      area: "280 m²",
      bedrooms: 4,
      bathrooms: 3,
      price: "$85,000",
      year: "2023",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Casa moderna de dos niveles con diseño contemporáneo, amplios espacios y acabados de lujo."
    },
    {
      id: 2,
      title: "Casa Familiar Santa Ana",
      location: "Santa Ana, El Salvador",
      status: "completed",
      area: "220 m²",
      bedrooms: 3,
      bathrooms: 2,
      price: "$65,000",
      year: "2023",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Casa familiar de una planta con amplios jardines y espacios comunes ideales para la vida familiar."
    },
    {
      id: 3,
      title: "Residencia de Lujo La Libertad",
      location: "La Libertad, El Salvador",
      status: "in-progress",
      area: "350 m²",
      bedrooms: 5,
      bathrooms: 4,
      price: "$120,000",
      year: "2024",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Residencia de lujo con vista al mar, piscina privada y acabados premium."
    },
    {
      id: 4,
      title: "Casa Eco-Sostenible Sonsonate",
      location: "Sonsonate, El Salvador",
      status: "planning",
      area: "190 m²",
      bedrooms: 3,
      bathrooms: 2,
      price: "$55,000",
      year: "2024",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Casa diseñada con tecnologías eco-sostenibles y materiales locales renovables."
    },
    {
      id: 5,
      title: "Complejo Residencial Usulután",
      location: "Usulután, El Salvador",
      status: "in-progress",
      area: "180 m²",
      bedrooms: 3,
      bathrooms: 2,
      price: "$48,000",
      year: "2024",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Desarrollo habitacional con múltiples unidades y áreas comunes para la comunidad."
    },
    {
      id: 6,
      title: "Villa Colonial Ahuachapán",
      location: "Ahuachapán, El Salvador",
      status: "completed",
      area: "250 m²",
      bedrooms: 4,
      bathrooms: 3,
      price: "$72,000",
      year: "2023",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Casa de estilo colonial con patios internos y arquitectura tradicional salvadoreña."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'in-progress': return 'bg-blue-600';
      case 'planning': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En Construcción';
      case 'planning': return 'En Planificación';
      default: return 'Estado Desconocido';
    }
  };

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
              alt="Proyectos de construcción"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2}}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Nuestros <span className="text-blue-400">Proyectos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3}}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Descubre las casas que hemos construido con amor y dedicación 
              para familias salvadoreñas en todo el país.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-none font-semibold transition-all duration-300 flex items-center ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  data-cursor-hover
                >
                  <Filter className="mr-2" size={18} />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group cursor-pointer"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden h-64 mb-6">
                    <ParallaxImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 ${getStatusColor(project.status)} px-3 py-1 text-sm font-semibold`}>
                      {getStatusLabel(project.status)}
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 text-sm font-semibold">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {project.location}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Home size={16} className="mr-2" />
                        {project.area}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <DollarSign size={16} className="mr-2" />
                        {project.price}
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{project.bedrooms} habitaciones</span>
                      <span>{project.bathrooms} baños</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Ubicaciones de <span className="text-blue-400">Proyectos</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Nuestros proyectos están distribuidos estratégicamente en todo El Salvador, 
                en las mejores ubicaciones del país.
              </p>
            </AnimatedText>

            <div className="relative h-96 bg-gray-800 rounded-none overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-blue-400 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold mb-2">Mapa Interactivo de Proyectos</h3>
                  <p className="text-gray-400">Próximamente: Mapa interactivo con todos nuestros proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "Proyectos Completados" },
                { number: "50+", label: "En Construcción" },
                { number: "30+", label: "En Planificación" },
                { number: "14", label: "Departamentos Cubiertos" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
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
      </main>
    </SmoothScroll>
  );
}