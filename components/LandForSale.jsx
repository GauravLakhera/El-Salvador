"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation"; // Import useRouter

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const LandForSale = () => {
  const [landListings, setLandListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter

  // Fetch land listings from the API
  useEffect(() => {
    const fetchLands = async () => {
      try {
        const response = await fetch(
          "https://el-salvador-backend.onrender.com/api/v1/lands"
        );
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        // Assuming data.data holds the array of land objects
        if (data.data && Array.isArray(data.data)) {
          setLandListings(data.data);
        } else {
          console.warn(
            "API response for lands fetch was successful but 'data' array was missing or invalid:",
            data
          );
          setLandListings([]); // Ensure it's an empty array
          setError(
            "Formato de respuesta de la API inesperado al cargar terrenos."
          );
        }
      } catch (err) {
        setError(
          "Error al cargar los listados de terrenos. Por favor, inténtalo de nuevo más tarde."
        );
        console.error("Error fetching land listings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLands();
  }, []); // Empty dependency array means this runs once on mount

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Handle "Saber Más" button click for redirection
  const handleLearnMoreClick = (landId) => {
    // Redirect to a dynamic land detail page, e.g., /lands/123
    router.push(`/land`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-4 leading-tight"
          variants={textVariants}
        >
          ¡Terrenos en Venta!
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-6"
          variants={textVariants}
        >
          Compra tu terreno y construiremos la casa de tus sueños.
          ¡Constantemente buscamos nuevos proveedores de terrenos y nuestro
          sitio web se actualiza regularmente con nuevas oportunidades!
        </motion.p>
      </motion.div>

      {/* Loading and Error States */}
      {loading && (
        <p className="text-center text-indigo-700 text-xl py-10">
          Cargando listados de terrenos...
        </p>
      )}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* Swiper Carousel Section */}
      {!loading && !error && landListings.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            No se encontraron terrenos disponibles en este momento.
          </p>
        </div>
      )}

      {!loading && !error && landListings.length > 0 && (
        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true} // Enable looping for continuous slide
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper p-4"
            breakpoints={{
              // Responsive breakpoints for Swiper
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {landListings.map((land) => (
              <SwiperSlide
                key={land._id} // Use _id from API response
                className="flex justify-center items-stretch py-8"
              >
                <motion.div
                  className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100 flex flex-col"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative h-[20rem] w-full overflow-hidden">
                    <img
                      src={
                        land.images && land.images.length > 0
                          ? land.images[0]
                          : `https://placehold.co/600x400/E0E7FF/4338CA?text=Terreno`
                      } // Use first image from API, fallback to placeholder
                      alt={land.title || "Terreno en venta"}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/E0E7FF/4338CA?text=Terreno`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">
                        {land.name || land.location}
                      </h3>{" "}
                      {/* Use name or location */}
                      <p className="text-lg font-semibold">
                        ${land.price.toLocaleString()}
                      </p>{" "}
                      {/* Format price */}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {land.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-500">
                        Tamaño: {land.areaSqFeet} sq ft
                      </span>{" "}
                      {/* Use areaSqFeet from API */}
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {land.status === "available"
                          ? "Disponible"
                          : "No disponible"}{" "}
                        {/* Display status */}
                      </span>
                    </div>
                    <motion.button
                      className="w-full bg-blue-800 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLearnMoreClick(land._id)} // Pass land._id for redirection
                    >
                      Saber Más
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}

      {/* Footer Note */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p>
          <span className="font-semibold text-indigo-700">Nota:</span> Estamos
          expandiendo activamente nuestra red de proveedores de terrenos para
          ofrecerle aún más propiedades de primera. ¡Vuelva a consultar pronto
          para ver nuevos listados!
        </p>
      </motion.div>
    </div>
  );
};

export default LandForSale;
