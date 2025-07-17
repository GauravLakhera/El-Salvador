import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

// Dummy data for land listings - all locations now in El Salvador
const landListings = [
  {
    id: 1,
    location: "Green Valley Estates, Santa Ana, El Salvador",
    price: "$150,000",
    size: "1.5 Acres",
    imageUrl:
      "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
    description:
      "Amplio terreno con impresionantes vistas a la montaña, perfecto para una casa a medida. Cerca de senderos naturales.",
  },
  {
    id: 2,
    location: "Sunset Ridge Community, San Salvador, El Salvador",
    price: "$220,000",
    size: "0.75 Acres",
    imageUrl:
      "https://images.unsplash.com/photo-1518655513281-e90740bd56b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmR8ZW58MHx8MHx8fDA%3D", // Placeholder image
    description:
      "Excelente ubicación en una comunidad familiar. Ideal para una residencia familiar moderna con fácil acceso a servicios.",
  },
  {
    id: 3,
    location: "Riverbend Farms, La Libertad, El Salvador",
    price: "$185,000",
    size: "2.0 Acres",
    imageUrl:
      "https://images.unsplash.com/photo-1527195375283-e28c0cfbe6f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhbmR8ZW58MHx8MHx8fDA%3D", // Placeholder image
    description:
      "Propiedad aislada junto al río, que ofrece tranquilidad y amplio espacio para jardinería y actividades al aire libre.",
  },
  {
    id: 4,
    location: "Oakwood Forest Lots, Sonsonate, El Salvador",
    price: "$125,000",
    size: "1.0 Acre",
    imageUrl:
      "https://images.unsplash.com/photo-1586368570347-0dd5a0c928cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxhbmR8ZW58MHx8MHx8fDA%3D", // Placeholder image
    description:
      "Lote arbolado con árboles maduros, que proporciona privacidad y un entorno natural. Perfecto para un retiro rústico.",
  },
  {
    id: 5,
    location: "Coastal Breeze Parcels, Usulután, El Salvador",
    price: "$350,000",
    size: "0.5 Acres",
    imageUrl:
      "https://images.unsplash.com/photo-1713775821316-d38f31b37ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGxhbmR8ZW58MHx8MHx8fDA%3D", // Placeholder image
    description:
      "Terreno costero exclusivo con vistas al mar, a pocos minutos de la playa. Construye la casa de tus sueños aquí.",
  },
];

const LandForSale = () => {
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
          Compra tu terreno y construiremos la casa de tus sueños. ¡Constantemente
          buscamos nuevos proveedores de terrenos y nuestro sitio web se actualiza
          regularmente con nuevas oportunidades!
        </motion.p>
      </motion.div>

      {/* Swiper Carousel Section */}
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
              key={land.id}
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
                    src={land.imageUrl}
                    alt={land.location}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/E0E7FF/4338CA?text=Terreno`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{land.location}</h3>
                    <p className="text-lg font-semibold">{land.price}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow"> {/* Added flex flex-col justify-between flex-grow */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {land.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Tamaño: {land.size}
                    </span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      Disponible
                    </span>
                  </div>
                  <motion.button
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saber Más
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p>
          <span className="font-semibold text-indigo-700">Nota:</span> Estamos
          expandiendo activamente nuestra red de proveedores de terrenos para ofrecerle
          aún más propiedades de primera. ¡Vuelva a consultar pronto para ver nuevos listados!
        </p>
      </motion.div>
    </div>
  );
};

export default LandForSale;