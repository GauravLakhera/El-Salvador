'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ParallaxImage from '@/components/ParallaxImage';
import AnimatedText from '@/components/AnimatedText';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'construccion', label: 'Construcción' },
    { id: 'financiamiento', label: 'Financiamiento' },
    { id: 'diseno', label: 'Diseño' },
    { id: 'consejos', label: 'Consejos' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Guía Completa para Comprar Terrenos en El Salvador desde el Exterior",
      excerpt: "Todo lo que necesitas saber sobre la compra de terrenos en El Salvador cuando vives en el extranjero. Documentación, trámites legales y consejos esenciales.",
      content: "Comprar un terreno en El Salvador desde el exterior puede parecer complicado, pero con la información correcta y el apoyo adecuado, es un proceso completamente manejable...",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "construccion",
      author: "Carlos Mendoza",
      date: "2024-01-15",
      readTime: "8 min lectura",
      featured: true
    },
    {
      id: 2,
      title: "Cómo Abrir una Cuenta Digital en Banco Promerica desde Estados Unidos",
      excerpt: "Paso a paso para abrir tu cuenta digital en Banco Promerica y gestionar tus finanzas para tu proyecto de construcción en El Salvador.",
      content: "El Banco Promerica ha revolucionado la banca para salvadoreños en el exterior con sus soluciones digitales...",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "financiamiento",
      author: "María González",
      date: "2024-01-10",
      readTime: "6 min lectura",
      featured: false
    },
    {
      id: 3,
      title: "Tendencias de Diseño Arquitectónico en El Salvador 2024",
      excerpt: "Descubre las últimas tendencias en diseño arquitectónico que están marcando pauta en las construcciones residenciales de El Salvador.",
      content: "El año 2024 trae consigo nuevas tendencias en el diseño arquitectónico residencial en El Salvador...",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "diseno",
      author: "Roberto Flores",
      date: "2024-01-05",
      readTime: "5 min lectura",
      featured: true
    },
    {
      id: 4,
      title: "Programa FSV: Cómo Acceder a Subsidios de Vivienda en El Salvador",
      excerpt: "Guía detallada sobre el programa de vivienda del FSV y cómo los salvadoreños pueden acceder a estos beneficios gubernamentales.",
      content: "El Fondo Social para la Vivienda (FSV) ofrece múltiples programas de subsidios...",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "financiamiento",
      author: "Ana Martínez",
      date: "2023-12-28",
      readTime: "7 min lectura",
      featured: false
    },
    {
      id: 5,
      title: "5 Consejos para Supervisar tu Construcción desde el Exterior",
      excerpt: "Consejos prácticos para mantener el control de tu proyecto de construcción en El Salvador mientras vives en otro país.",
      content: "Supervisar una construcción desde el exterior requiere estrategia y las herramientas correctas...",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "consejos",
      author: "Luis Hernández",
      date: "2023-12-20",
      readTime: "6 min lectura",
      featured: false
    },
    {
      id: 6,
      title: "Materiales de Construcción Locales vs Importados: ¿Cuál Elegir?",
      excerpt: "Análisis comparativo entre materiales de construcción locales e importados en El Salvador. Costos, calidad y disponibilidad.",
      content: "La elección de materiales es crucial para el éxito de cualquier proyecto constructivo...",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "construccion",
      author: "Pedro Ramírez",
      date: "2023-12-15",
      readTime: "9 min lectura",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              alt="Blog de construcción"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "power3.out" }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Nuestro <span className="text-blue-400">Blog</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "power3.out" }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Información valiosa sobre construcción, financiamiento y consejos 
              para salvadoreños que sueñan con construir en El Salvador.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-none font-semibold transition-all duration-300 flex items-center ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                    data-cursor-hover
                  >
                    <Tag className="mr-2" size={16} />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Artículos <span className="text-blue-400">Destacados</span>
              </h2>
            </AnimatedText>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden h-80 mb-6">
                    <ParallaxImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 text-sm font-semibold">
                      Destacado
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <User size={16} className="mr-2" />
                        {post.author}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group/btn">
                      Leer más
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Posts */}
        <section className="py-32 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <AnimatedText className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">
                Últimos <span className="text-blue-400">Artículos</span>
              </h2>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden h-48 mb-6">
                    <ParallaxImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-xs text-gray-400 space-x-3">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm group/btn">
                      Leer más
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={14} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4 text-gray-400">No se encontraron artículos</h3>
                <p className="text-gray-500">Intenta cambiar los filtros o el término de búsqueda.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText>
              <h2 className="text-5xl font-bold mb-8">
                Mantente <span className="text-blue-400">Informado</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Suscríbete a nuestro newsletter y recibe consejos exclusivos, 
                actualizaciones de proyectos y noticias del sector construcción en El Salvador.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  data-cursor-hover
                >
                  Suscribirse
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </AnimatedText>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}