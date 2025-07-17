"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1682695795798-1b31ea040caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    width: 800,
    height: 300,
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1742647230923-292e4e1e10c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    width: 600,
    height: 400,
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1750440781473-587356159934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    width: 800,
    height: 500,
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1751885277152-c0b643118a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
    width: 700,
    height: 700,
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    width: 600,
    height: 800,
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    width: 900,
    height: 600,
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
    width: 800,
    height: 800,
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    width: 700,
    height: 500,
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1518655513281-e90740bd56b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmR8ZW58MHx8MHx8fDA%3D",
    width: 600,
    height: 600,
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1548941489-3e64750ebbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmR8ZW58MHx8MHx8fDA%3D",
    width: 800,
    height: 600,
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN0cnVjdGlvbiUyMGhvdXNlJTVEfGVufDB8fDB8fHww",
    width: 700,
    height: 900,
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1530252781171-5710babe387b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbnN0cnVjdGlvbiUyMGhvdXNlJTVEfGVufDB8fDB8fHww",
    width: 800,
    height: 600,
    size: "medium",
  },
].map((img) => ({
  ...img,
  aspect: img.height / img.width,
}));

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, galleryImages.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const getRowSpan = (aspect) => {
    if (aspect > 1.5) return 2;
    if (aspect < 0.7) return 1;
    return 1.5;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Our Gallery
        </motion.h2>

        {/* Perfect Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          <AnimatePresence>
            {galleryImages.slice(0, visibleCount).map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                }}
                className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{
                  gridRowEnd: `span ${Math.round(getRowSpan(img.aspect))}`,
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt="Gallery image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 9}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      {/* Optional caption */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < galleryImages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className={`px-8 py-3 bg-amber-600 text-white font-medium rounded-full transition-all ${
                isLoadingMore
                  ? "opacity-75"
                  : "hover:bg-amber-700 hover:shadow-lg"
              }`}
            >
              {isLoadingMore ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block mr-2"
                  >
                    ↻
                  </motion.span>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
