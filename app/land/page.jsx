"use client"; // This directive is often used in Next.js 13+ for client components

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modal component for displaying land details
const LandDetailsModal = ({ land, onClose }) => {
  if (!land) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close modal when clicking outside
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-6">
          {land.images && land.images.length > 0 && (
            <img
              src={land.images[0]} // Display the first image from the array
              alt={land.title}
              className="w-full h-64 object-cover rounded-md mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/E0E7FF/4338CA?text=Land+Plot`;
              }}
            />
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {land.title}
          </h2>
          <p className="text-xl text-indigo-700 font-semibold mb-4">
            ${land.price.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-4">{land.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
            <p>
              <strong className="text-gray-800">Ubicación:</strong>{" "}
              {land.address}, {land.city}, {land.state}, {land.zipCode},{" "}
              {land.country}
            </p>
            <p>
              <strong className="text-gray-800">Área:</strong> {land.areaSqFeet}{" "}
              sq ft
            </p>
            <p>
              <strong className="text-gray-800">Tipo de Terreno:</strong>{" "}
              {land.landType}
            </p>
            <p>
              <strong className="text-gray-800">Zonificación:</strong>{" "}
              {land.zoning}
            </p>
            <p>
              <strong className="text-gray-800">Estado:</strong> {land.status}
            </p>
            {land.virtualTourUrl && (
              <p>
                <strong className="text-gray-800">Tour Virtual:</strong>{" "}
                <a
                  href={land.virtualTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver Tour
                </a>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LandSalePage = () => {
  const [landListings, setLandListings] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLand, setSelectedLand] = useState(null);

  useEffect(() => {
    const fetchLands = async () => {
      try {
        const response = await fetch(
          "https://el-salvador-backend.onrender.com/api/v1/lands"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLandListings(data.data || []); // Assuming data.data holds the array of land objects
      } catch (err) {
        setError("Failed to fetch land listings. Please try again later.");
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

  // Filtered list of lands based on price input
  const filteredLandListings = useMemo(() => {
    return landListings.filter((land) => {
      const price = land.price;
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);

      if (minPrice !== "" && price < min) {
        return false;
      }
      if (maxPrice !== "" && price > max) {
        return false;
      }
      return true;
    });
  }, [landListings, minPrice, maxPrice]);

  const handleLearnMoreClick = (land) => {
    setSelectedLand(land);
  };

  const handleCloseModal = () => {
    setSelectedLand(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800 flex flex-col items-center">
      {/* Hero Section with Background Image */}
      <motion.div
        className="relative w-full h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627857492021-1ace35b4c6b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for text readability */}
        <div className="relative z-10 p-6 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¡Terrenos en Venta en El Salvador!
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Compra tu terreno y construimos la casa de tus sueños.
            ¡Constantemente buscamos nuevos proveedores de terrenos, y nuestro
            sitio web se actualiza regularmente con nuevas oportunidades!
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {/* Filter Section */}
        <motion.div
          className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <label htmlFor="minPrice" className="sr-only">
            Precio Mínimo
          </label>
          <input
            type="number"
            id="minPrice"
            placeholder="Precio Mín. ($)"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />
          <label htmlFor="maxPrice" className="sr-only">
            Precio Máximo
          </label>
          <input
            type="number"
            id="maxPrice"
            placeholder="Precio Máx. ($)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />
        </motion.div>

        {/* Loading and Error States */}
        {loading && (
          <p className="text-center text-indigo-700 text-xl py-10">
            Cargando listados de terrenos...
          </p>
        )}
        {error && (
          <p className="text-center text-red-600 text-xl py-10">{error}</p>
        )}

        {/* Land Listings Grid */}
        {!loading && !error && (
          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {filteredLandListings.length > 0 ? (
              filteredLandListings.map((land) => (
                <motion.div
                  key={land._id} // Use _id from API response
                  className="bg-white rounded shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} // Animate when card comes into view
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={
                        land.images && land.images.length > 0
                          ? land.images[0]
                          : `https://placehold.co/600x400/E0E7FF/4338CA?text=Terreno`
                      } // Use first image from API, fallback to placeholder
                      alt={land.name} // Use land.name or land.title for alt text
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/E0E7FF/4338CA?text=Terreno`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold truncate">
                        {land.name}
                      </h3>{" "}
                      {/* Display land name */}
                      <p className="text-lg font-semibold">
                        ${land.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {land.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-500">
                        Tamaño: {land.areaSqFeet} sq ft
                      </span>{" "}
                      {/* Display sq ft from API */}
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Disponible
                      </span>
                    </div>
                    <motion.button
                      className="w-full bg-blue-950 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-950 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLearnMoreClick(land)} // Pass the whole land object
                    >
                      Saber Más
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="col-span-full text-center text-gray-600 text-xl py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                No se encontraron listados de terrenos que coincidan con tus
                criterios.
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <p>
            <span className="font-semibold text-indigo-700">Nota:</span> Estamos
            expandiendo activamente nuestra red de proveedores de terrenos para
            ofrecerte aún más propiedades de primera. ¡Vuelve pronto para ver
            nuevos listados!
          </p>
        </motion.div>
      </div>

      {/* Land Details Modal */}
      <AnimatePresence>
        {selectedLand && (
          <LandDetailsModal land={selectedLand} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandSalePage;
