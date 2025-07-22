"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState([]); // Renamed to galleryItems to reflect both images and videos
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [error, setError] = useState(null);

  const fetchGalleryItems = useCallback(async () => {
    setLoadingInitial(true);
    setError(null);
    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/gallery"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      const processedItems = result.data.map((item) => {
        // For demonstration, using placeholder dimensions.
        // In a real application, for images, you'd ideally get width/height from the API or a metadata service.
        // For videos, aspect ratio is crucial for layout.
        const defaultWidth = 800;
        const defaultHeight = 600;

        let width = defaultWidth;
        let height = defaultHeight;

        // If your API provides width/height for either images or videos, use them here.
        // For example, if item.dimensions existed:
        // if (item.dimensions && item.dimensions.width && item.dimensions.height) {
        //   width = item.dimensions.width;
        //   height = item.dimensions.height;
        // }

        return {
          ...item,
          src: item.url,
          width, // Placeholder: You should get actual dimensions for better performance
          height, // Placeholder: You should get actual dimensions for better performance
          aspect: height / width,
        };
      });
      setGalleryItems(processedItems);
    } catch (e) {
      console.error("Failed to fetch gallery items:", e);
      setError("Failed to load gallery. Please try again later.");
    } finally {
      setLoadingInitial(false);
    }
  }, []);

  useEffect(() => {
    fetchGalleryItems();
  }, [fetchGalleryItems]);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, galleryItems.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const getRowSpan = (aspect) => {
    if (aspect > 1.5) return 2; // Taller than wide
    if (aspect < 0.7) return 1; // Wider than tall (less than 1:1.4)
    return 1.5; // Roughly square or slightly rectangular
  };

  if (loadingInitial) {
    return (
      <section className="py-20 px-4 bg-gray-50 text-center">
        <p className="text-gray-600 text-lg">Loading gallery...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gray-50 text-center">
        <p className="text-red-600 text-lg">{error}</p>
        <button
          onClick={fetchGalleryItems}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </section>
    );
  }

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

        {galleryItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No items to display in the gallery.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
              <AnimatePresence>
                {galleryItems.slice(0, visibleCount).map((item, i) => (
                  <motion.div
                    key={`${item.src}-${i}`}
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
                      gridRowEnd: `span ${Math.round(getRowSpan(item.aspect))}`,
                    }}
                  >
                    <div className="w-full h-full">
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          width={item.width}
                          height={item.height}
                          alt={item.title || "Gallery image"}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={i < 9}
                        />
                      ) : (
                        <video
                          src={item.src}
                          width={item.width}
                          height={item.height}
                          autoPlay
                          loop // Optional: loop the video
                          muted // Optional: mute by default
                          playsInline // Important for mobile browsers
                          preload="metadata" // Load enough to get dimensions/duration
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <motion.div
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          {item.title && (
                            <p className="text-sm">{item.title}</p>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {visibleCount < galleryItems.length && (
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
                      ? "opacity-75 cursor-not-allowed"
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
          </>
        )}
      </div>
    </section>
  );
}
