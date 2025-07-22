"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  X,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react"; // Using Lucide React for icons

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
          ¿Estás seguro de que quieres eliminar la consulta de "{item.fullName}
          "? Esta acción no se puede deshacer.
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

const ContactUsAdminPage = () => {
  const [contactEntries, setContactEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  // Fetch contact entries
  const fetchContactEntries = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/contact-us"
      );
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const result = await response.json();

      // Check if 'data' array exists and is an array
      if (result.data && Array.isArray(result.data)) {
        setContactEntries(result.data);
      } else {
        console.warn(
          "API response for contact entries fetch was successful but 'data' array was missing or invalid:",
          result
        );
        setContactEntries([]); // Ensure it's an empty array
        setError(
          result.message ||
            "Formato de respuesta de la API inesperado al cargar las entradas de contacto."
        );
      }
    } catch (err) {
      console.error("Error al cargar las entradas de contacto:", err);
      setError(
        "No se pudieron cargar las entradas de contacto. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactEntries();
  }, []);

  // Handle delete click (opens confirmation modal)
  const handleDeleteClick = (entry) => {
    setEntryToDelete(entry);
    setShowDeleteConfirmModal(true);
  };

  // Handle actual deletion after confirmation
  const handleConfirmDelete = async (id) => {
    setShowDeleteConfirmModal(false); // Close confirmation modal immediately
    setLoading(true); // Show loading state for deletion
    setError("");
    try {
      const response = await fetch(
        `https://el-salvador-backend.onrender.com/api/v1/contact-us/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.success) {
        setContactEntries((prevEntries) =>
          prevEntries.filter((entry) => entry._id !== id)
        );
      } else {
        setError(result.message || "Error al eliminar la entrada de contacto.");
      }
    } catch (err) {
      console.error("Error al eliminar entrada:", err);
      setError("Error de red o del servidor al eliminar la entrada.");
    } finally {
      setLoading(false);
      setEntryToDelete(null); // Clear entry to delete
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className=" text-lg md:text-3xl font-bold text-gray-900">
                Administrar Contactos
              </h1>
              <p className="text-gray-600 mt-1 text-xs md:text-sm">
                Revisa y gestiona las solicitudes de contacto de los usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <p className="text-center text-indigo-700 text-xl py-10">
            Cargando entradas de contacto...
          </p>
        )}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && contactEntries.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">
              No hay entradas de contacto para mostrar.
            </p>
          </div>
        )}

        {!loading && !error && contactEntries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactEntries.map((entry) => (
              <motion.div
                key={entry._id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ translateY: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {entry.fullName}
                </h3>
                <div className="space-y-2 text-sm text-gray-700 flex-grow">
                  <p className="flex items-center">
                    <Mail size={16} className="mr-2 text-gray-500" />{" "}
                    {entry.email}
                  </p>
                  <p className="flex items-center">
                    <Phone size={16} className="mr-2 text-gray-500" />{" "}
                    {entry.phone}
                  </p>
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-2 text-gray-500" />{" "}
                    {entry.country}
                  </p>
                  <p className="flex items-center">
                    <Briefcase size={16} className="mr-2 text-gray-500" />{" "}
                    <span className="font-semibold">
                      {entry.serviceInInterest}
                    </span>
                  </p>
                  <p className="mt-3 text-gray-800 border-t pt-3 border-gray-100">
                    <strong className="block mb-1">Mensaje:</strong>{" "}
                    {entry.message}
                  </p>
                </div>
                <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
                  <motion.button
                    onClick={() => handleDeleteClick(entry)}
                    className="p-2 rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                    aria-label={`Eliminar consulta de ${entry.fullName}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showDeleteConfirmModal && entryToDelete && (
          <DeleteConfirmModal
            item={entryToDelete}
            onClose={() => setShowDeleteConfirmModal(false)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUsAdminPage;
