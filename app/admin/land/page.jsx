
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EditLandModal from "../../../components/EditLandModal"; // Importa el componente del modal

const LandsAdminPage = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // Estados del modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedLandId, setSelectedLandId] = useState(null);

  useEffect(() => {
    fetchLands();
  }, []);

  const fetchLands = async () => {
    try {
      const response = await fetch(
        "https://el-salvador-backend.onrender.com/api/v1/lands"
      );
      const data = await response.json();
      if (data.success) {
        setLands(data.data);
      } else {
        setError("Error al obtener las tierras");
      }
    } catch (err) {
      setError("Error al obtener las tierras");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (landId) => {
    setSelectedLandId(landId);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    fetchLands(); // Actualiza la lista de tierras
    setError(""); // Borra cualquier error previo
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Estás seguro de que quieres eliminar esta tierra?")) return;

    try {
      const response = await fetch(
        `https://el-salvador-backend.onrender.com/api/v1/lands/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setLands(lands.filter((land) => land._id !== id));
      } else {
        setError("Error al eliminar la tierra");
      }
    } catch (err) {
      setError("Error al eliminar la tierra");
    }
  };

  const filteredLands = lands.filter((land) => {
    const matchesSearch =
      land.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      land.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || land.status === filterStatus;
    const matchesType = filterType === "all" || land.landType === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className=" text-sm md:text-3xl font-bold text-gray-900">
                Gestión de Tierras
              </h1>
              <p className="text-gray-600 mt-1 text-xs md:text-sm">Gestiona tus listados de tierras</p>
            </div>
            <Link
              href="/admin/land/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-6 py-3 text-xs md:text-sm rounded-lg font-medium transition-colors shadow-sm"
            >
              Añadir Nueva Tierra
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar
              </label>
              <input
                type="text"
                placeholder="Buscar por título o ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos los estados</option>
                <option value="available">Disponible</option>
                <option value="pending">Pendiente</option>
                <option value="sold">Vendido</option>
                <option value="withdrawn">Retirado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cuadrícula de Tierras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLands.map((land) => (
            <div
              key={land._id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              {/* Imagen */}
              <div className="relative h-48 w-full">
                {land.images && land.images.length > 0 ? (
                  <Image
                    src={land.images[0]}
                    alt={land.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="h-full bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-500">Sin Imagen</span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      land.status === "available"
                        ? "bg-green-100 text-green-800"
                        : land.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : land.status === "sold"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {land.status === "available" && "Disponible"}
                    {land.status === "pending" && "Pendiente"}
                    {land.status === "sold" && "Vendido"}
                    {land.status === "withdrawn" && "Retirado"}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                    {land.title}
                  </h3>
                  {land.featured && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {land.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Precio:</span>
                    <span className="font-medium">
                      ${land.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Área:</span>
                    <span className="font-medium">{land.areaSqFeet} pies cuadrados</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tipo:</span>
                    <span className="font-medium capitalize">
                      {land.landType === "residential" && "Residencial"}
                      {land.landType === "commercial" && "Comercial"}
                      {land.landType === "agricultural" && "Agrícola"}
                      {land.landType === "industrial" && "Industrial"}
                      {land.landType === "other" && "Otro"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Ubicación:</span>
                    <span className="font-medium">
                      {land.city}, {land.state}
                    </span>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(land._id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(land._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLands.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border p-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron tierras
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filterStatus !== "all" || filterType !== "all"
                  ? "Intenta ajustar tus filtros o término de búsqueda."
                  : "Empieza añadiendo tu primer listado de tierras."}
              </p>
              <Link
                href="/admin/land/create"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Añadir Nueva Tierra
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Edición */}
      <EditLandModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        landId={selectedLandId}
        onSuccess={handleEditSuccess}
      />
    </div>
  );
};

export default LandsAdminPage;