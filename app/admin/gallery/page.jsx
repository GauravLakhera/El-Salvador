"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, X, Image, Video, AlertCircle } from "lucide-react"; // Using Lucide React for icons

// Utility for formatting file size
const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Modal for adding a new gallery item
const AddGalleryItemModal = ({ onClose, onAddSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "image", // Default to image
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError(""); // Clear previous file errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!selectedFile) {
      setError("Por favor, selecciona un archivo.");
      return;
    }

    // Client-side validation for file size and type
    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (formData.type === "image" && fileSizeMB > 10) {
      setError("El tamaño de la imagen no debe exceder los 10MB.");
      return;
    }
    if (formData.type === "video" && fileSizeMB > 40) {
      setError("El tamaño del video no debe exceder los 40MB.");
      return;
    }
    if (!["image", "video"].includes(formData.type)) {
      setError("Tipo de archivo inválido. Solo se permiten imágenes o videos.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("type", formData.type);
    data.append("file", selectedFile); // 'file' is the field name expected by your backend (req.file)

    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/gallery",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      // Assuming create/delete operations still return 'success: true'
      if (result.success) {
        onAddSuccess(result.data); // Pass the newly created item back
        onClose();
        window.location.reload();
      } else {
        setError(
          result.message || "Error al agregar el elemento a la galería."
        );
      }
    } catch (err) {
      console.error("Error al subir archivo:", err);
      setError("Error de red o del servidor al subir el archivo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Añadir Nuevo Elemento a la Galería
        </h2>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg flex items-center">
            <AlertCircle className="mr-2" size={20} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Seleccionar Archivo *
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              accept={formData.type === "image" ? "image/*" : "video/*"}
              required
            />
            {selectedFile && (
              <p className="mt-2 text-xs text-gray-500">
                Archivo seleccionado: {selectedFile.name} (
                {formatFileSize(selectedFile.size)})
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tipo *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="image">Imagen</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Título (Opcional)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Título del elemento"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                loading
                  ? "bg-indigo-300 text-white cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {loading ? "Subiendo..." : "Añadir a Galería"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Modal for confirming deletion
const DeleteConfirmModal = ({ item, onClose, onConfirm }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 relative text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Confirmar Eliminación
        </h2>
        <p className="text-gray-700 mb-6">
          ¿Estás seguro de que quieres eliminar "{item.title || item.type}" de
          la galería? Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(item._id)}
            className="px-5 py-2 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
          >
            Eliminar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GalleryAdminPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Fetch gallery items
  const fetchGalleryItems = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/gallery"
      );
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const result = await response.json();

      // Updated logic to handle the new API response structure for fetching
      // where 'success' field might be absent, and we rely on 'data' array.
      if (result.data && Array.isArray(result.data)) {
        // Filter out any potential null/undefined items before setting the state
        setGalleryItems(
          result.data.filter((item) => item !== null && item !== undefined)
        );
      } else {
        // If 'data' is missing or not an array, but a message is present,
        // it might still indicate a successful fetch with no items or a different success format.
        console.warn(
          "API response for gallery fetch was successful but 'data' array was missing or invalid:",
          result
        );
        setGalleryItems([]); // Ensure it's an empty array to prevent .length errors
        setError(
          result.message ||
            "Formato de respuesta de la API inesperado al cargar la galería."
        );
      }
    } catch (err) {
      console.error("Error al cargar la galería:", err);
      setError(
        "No se pudieron cargar los elementos de la galería. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  // Handle successful addition of a new item
  const handleAddSuccess = (newItem) => {
    // Ensure the newItem is not null/undefined before adding
    if (newItem) {
      setGalleryItems((prevItems) => [...prevItems, newItem]);
    }
    setShowAddModal(false);
  };

  // Handle delete click (opens confirmation modal)
  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirmModal(true);
  };

  // Handle actual deletion after confirmation
  const handleConfirmDelete = async (id) => {
    setShowDeleteConfirmModal(false); // Close confirmation modal immediately
    setLoading(true); // Show loading state for deletion
    setError("");
    try {
      const response = await fetch(
        `https://el-salvador-backend.onrender.com/api/v1/gallery/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      // Assuming delete operation still returns 'success: true'
      if (result.success) {
        setGalleryItems((prevItems) =>
          prevItems.filter((item) => item && item._id !== id)
        ); // Also filter out null/undefined here
      } else {
        setError(
          result.message || "Error al eliminar el elemento de la galería."
        );
      }
    } catch (err) {
      console.error("Error al eliminar elemento:", err);
      setError("Error de red o del servidor al eliminar el elemento.");
    } finally {
      setLoading(false);
      setItemToDelete(null); // Clear item to delete
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Administrar Galería
              </h1>
              <p className="text-gray-600 mt-1">
                Añade o elimina elementos de tu galería.
              </p>
            </div>
            <motion.button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="mr-2" size={20} />
              Añadir Nuevo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <p className="text-center text-indigo-700 text-xl py-10">
            Cargando elementos de la galería...
          </p>
        )}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && galleryItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">
              No hay elementos en la galería. ¡Añade el primero!
            </p>
          </div>
        )}

        {!loading && !error && galleryItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Filter out null/undefined items before mapping */}
            {galleryItems
              .filter((item) => item)
              .map((item) => (
                <motion.div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ translateY: -5 }}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "75%" }}
                  >
                    {" "}
                    {/* 4:3 aspect ratio */}
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.title || "Elemento de galería"}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/400x300/E0E7FF/4338CA?text=Imagen`;
                        }}
                      />
                    ) : (
                      <video
                        src={item.url}
                        controls
                        className="absolute inset-0 w-full h-full object-cover bg-gray-200"
                        poster={`https://placehold.co/400x300/E0E7FF/4338CA?text=Video`} // Placeholder poster
                      >
                        Tu navegador no soporta la etiqueta de video.
                      </video>
                    )}
                    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      {item.type === "image" ? (
                        <Image size={14} className="mr-1" />
                      ) : (
                        <Video size={14} className="mr-1" />
                      )}
                      {item.type === "image" ? "Imagen" : "Video"}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title ||
                        `Elemento ${
                          item.type === "image" ? "de Imagen" : "de Video"
                        }`}
                    </h3>
                    <div className="flex justify-end mt-auto">
                      <motion.button
                        onClick={() => handleDeleteClick(item)}
                        className="p-2 rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                        aria-label={`Eliminar ${item.title || item.type}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAddModal && (
          <AddGalleryItemModal
            onClose={() => setShowAddModal(false)}
            onAddSuccess={handleAddSuccess}
          />
        )}
        {showDeleteConfirmModal && itemToDelete && (
          <DeleteConfirmModal
            item={itemToDelete}
            onClose={() => setShowDeleteConfirmModal(false)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryAdminPage;
