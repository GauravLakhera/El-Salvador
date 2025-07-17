"use client"; // This directive is often used in Next.js 13+ for client components

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Dummy data for land listings - all locations in El Salvador
const landListings = [
  {
    id: 1,
    location: 'Green Valley Estates, Santa Ana, El Salvador',
    price: 150000, // Changed to number for filtering
    size: '1.5 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated image
    description: 'Expansive plot with stunning mountain views, perfect for a custom-built home. Close to nature trails and serene landscapes.',
  },
  {
    id: 2,
    location: 'Sunset Ridge Community, San Salvador, El Salvador',
    price: 220000,
    size: '0.75 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmR8ZW58MHx8MHx8fDA%3D', // Updated image
    description: 'Prime location in a family-friendly community. Ideal for a modern family residence with easy access to urban amenities.',
  },
  {
    id: 3,
    location: 'Riverbend Farms, La Libertad, El Salvador',
    price: 185000,
    size: '2.0 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1527195375283-e28c0cfbe6f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhbmR8ZW58MHx8MHx8fDA%3D', // Updated image
    description: 'Secluded riverside property, offering tranquility and ample space for gardening and outdoor activities. A true nature retreat.',
  },
  {
    id: 4,
    location: 'Oakwood Forest Lots, Sonsonate, El Salvador',
    price: 125000,
    size: '1.0 Acre',
    imageUrl: 'https://images.unsplash.com/photo-1586368570347-0dd5a0c928cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxhbmR8ZW58MHx8MHx8fDA%3D', // Updated image
    description: 'Wooded lot with mature trees, providing privacy and a natural setting. Perfect for a rustic retreat or eco-friendly home.',
  },
  {
    id: 5,
    location: 'Coastal Breeze Parcels, Usulután, El Salvador',
    price: 350000,
    size: '0.5 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1713775821316-d38f31b37ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGxhbmR8ZW58MHx8MHx8fDA%3D', // Updated image
    description: 'Exclusive coastal land with breathtaking ocean views, just minutes from the beach. Build your dream beach house here.',
  },
  {
    id: 6,
    location: 'Volcano View Plots, Santa Tecla, El Salvador',
    price: 280000,
    size: '1.2 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf96132e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // New image
    description: 'Unique land offering panoramic views of nearby volcanoes. Ideal for those seeking dramatic natural scenery.',
  },
  {
    id: 7,
    location: 'Coffee Plantation Land, Ahuachapán, El Salvador',
    price: 95000,
    size: '3.0 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // New image
    description: 'Fertile land suitable for agriculture, especially coffee cultivation. A great investment for agricultural ventures.',
  },
  {
    id: 8,
    location: 'Lakefront Property, Coatepeque, El Salvador',
    price: 450000,
    size: '0.8 Acres',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ba6f60648?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // New image
    description: 'Stunning lakefront property with direct access to Lake Coatepeque. Perfect for a vacation home or water activities.',
  },
];

const LandSalePage = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Filtered list of lands based on price input
  const filteredLandListings = useMemo(() => {
    return landListings.filter(land => {
      const price = land.price;
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);

      if (minPrice !== '' && price < min) {
        return false;
      }
      if (maxPrice !== '' && price > max) {
        return false;
      }
      return true;
    });
  }, [landListings, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800 flex flex-col items-center">
      {/* Hero Section with Background Image */}
      <motion.div
        className="relative w-full h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627857492021-1ace35b4c6b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for text readability */}
        <div className="relative z-10 p-6 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Land for Sale in El Salvador!
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Buy your land and we'll build your dream home. We are constantly searching for new land suppliers, and our website is updated regularly with new opportunities!
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
          <label htmlFor="minPrice" className="sr-only">Minimum Price</label>
          <input
            type="number"
            id="minPrice"
            placeholder="Min Price ($)"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />
          <label htmlFor="maxPrice" className="sr-only">Maximum Price</label>
          <input
            type="number"
            id="maxPrice"
            placeholder="Max Price ($)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />
        </motion.div>

        {/* Land Listings Grid */}
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {filteredLandListings.length > 0 ? (
            filteredLandListings.map((land) => (
              <motion.div
                key={land.id}
                className="bg-white rounded shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Animate when card comes into view
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={land.imageUrl}
                    alt={land.location}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/E0E7FF/4338CA?text=Land+Plot`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold truncate">{land.location}</h3>
                    <p className="text-lg font-semibold">${land.price.toLocaleString()}</p> {/* Format price */}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{land.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">Size: {land.size}</span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Available</span>
                  </div>
                  <motion.button
                    className="w-full bg-blue-950 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-950 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
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
              No land listings found matching your criteria.
            </motion.p>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <p>
            <span className="font-semibold text-indigo-700">Note:</span> We are actively expanding our network of land suppliers to bring you even more prime properties. Check back soon for new listings!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandSalePage;
