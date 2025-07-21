"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EditLandModal from "../../components/EditLandModal";
import {
  BarChart3,
  Users,
  Home,
  MessageSquare,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
} from "lucide-react";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("30d");

  const stats = [
    {
      title: "Proyectos Activos",
      value: "23",
      change: "+12%",
      changeType: "positive",
      icon: Home,
      color: "bg-blue-500",
    },
    {
      title: "Consultas del Mes",
      value: "127",
      change: "+8%",
      changeType: "positive",
      icon: MessageSquare,
      color: "bg-green-500",
    },
    {
      title: "Terrenos Disponibles",
      value: "45",
      change: "-3%",
      changeType: "negative",
      icon: MapPin,
      color: "bg-purple-500",
    },
    {
      title: "Ingresos del Mes",
      value: "$85,400",
      change: "+15%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-orange-500",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      name: "Casa Moderna San Salvador",
      client: "María González",
      status: "En Construcción",
      progress: 65,
      startDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Villa Santa Ana",
      client: "Carlos Mendoza",
      status: "Planificación",
      progress: 20,
      startDate: "2024-02-01",
    },
    {
      id: 3,
      name: "Residencia La Libertad",
      client: "Ana Martínez",
      status: "Completado",
      progress: 100,
      startDate: "2023-11-10",
    },
  ];

  const recentContacts = [
    {
      id: 1,
      name: "Roberto Flores",
      email: "roberto@email.com",
      country: "Estados Unidos",
      service: "Construcción",
      date: "2024-01-20",
    },
    {
      id: 2,
      name: "Patricia López",
      email: "patricia@email.com",
      country: "Canadá",
      service: "Terreno",
      date: "2024-01-19",
    },
    {
      id: 3,
      name: "Miguel Hernández",
      email: "miguel@email.com",
      country: "España",
      service: "Financiamiento",
      date: "2024-01-18",
    },
  ];
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // Modal states
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
        setError("Failed to fetch lands");
      }
    } catch (err) {
      setError("Error fetching lands");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (landId) => {
    setSelectedLandId(landId);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    fetchLands(); // Refresh the lands list
    setError(""); // Clear any previous errors
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this land?")) return;

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
        setError("Failed to delete land");
      }
    } catch (err) {
      setError("Error deleting land");
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Gestión de Terrenos
              </h1>
              <p className="text-gray-600 mt-1">
                Administra tus listados de terrenos
              </p>
            </div>
            <Link
              href="/admin/land/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Agregar Nuevo Terreno
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

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <option value="all">Todos los Estados</option>
                <option value="available">Disponible</option>
                <option value="pending">Pendiente</option>
                <option value="sold">Vendido</option>
                <option value="withdrawn">Retirado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Terreno
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Todos los Tipos</option>
                <option value="residential">Residencial</option>
                <option value="commercial">Comercial</option>
                <option value="agricultural">Agrícola</option>
                <option value="industrial">Industrial</option>
                <option value="recreational">Recreacional</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLands.map((land) => (
            <div
              key={land._id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              {/* Image */}
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
                    {land.status === "available"
                      ? "disponible"
                      : land.status === "pending"
                      ? "pendiente"
                      : land.status === "sold"
                      ? "vendido"
                      : "retirado"}
                  </span>
                </div>
              </div>

              {/* Content */}
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
                    <span className="font-medium">
                      {land.areaSqFeet} pies cuadrados
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tipo:</span>
                    <span className="font-medium capitalize">
                      {land.landType === "residential"
                        ? "Residencial"
                        : land.landType === "commercial"
                        ? "Comercial"
                        : land.landType === "agricultural"
                        ? "Agrícola"
                        : land.landType === "industrial"
                        ? "Industrial"
                        : land.landType === "recreational"
                        ? "Recreacional"
                        : land.landType}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Ubicación:</span>
                    <span className="font-medium">
                      {land.city}, {land.state}
                    </span>
                  </div>
                </div>

                {/* Actions */}
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
                No se encontraron terrenos
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filterStatus !== "all" || filterType !== "all"
                  ? "Intenta ajustar tus filtros o término de búsqueda."
                  : "Comienza agregando tu primer listado de terreno."}
              </p>
              <Link
                href="/admin/land/create"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Agregar Nuevo Terreno
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <EditLandModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        landId={selectedLandId}
        onSuccess={handleEditSuccess}
      />
    </div>

    // <div className="space-y-8">
    //   {/* Header */}
    //   <div className="flex justify-between items-center">
    //     <div>
    //       <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
    //       <p className="text-gray-600">Resumen general de la plataforma</p>
    //     </div>

    //     <div className="flex items-center space-x-4">
    //       <select
    //         value={timeRange}
    //         onChange={(e) => setTimeRange(e.target.value)}
    //         className="border border-gray-300 rounded-lg px-4 py-2"
    //       >
    //         <option value="7d">Últimos 7 días</option>
    //         <option value="30d">Últimos 30 días</option>
    //         <option value="90d">Últimos 90 días</option>
    //       </select>
    //     </div>
    //   </div>

    //   {/* Stats Grid */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {stats.map((stat, index) => (
    //       <motion.div
    //         key={stat.title}
    //         initial={{ y: 50, opacity: 0 }}
    //         animate={{ y: 0, opacity: 1 }}
    //         transition={{ delay: index * 0.1 }}
    //         className="bg-white rounded-lg shadow p-6"
    //       >
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <p className="text-sm font-medium text-gray-600">{stat.title}</p>
    //             <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
    //             <p className={`text-sm ${
    //               stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
    //             }`}>
    //               {stat.change} vs período anterior
    //             </p>
    //           </div>
    //           <div className={`${stat.color} p-3 rounded-full`}>
    //             <stat.icon className="text-white" size={24} />
    //           </div>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>

    //   {/* Charts and Tables */}
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    //     {/* Recent Projects */}
    //     <motion.div
    //       initial={{ y: 50, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ delay: 0.4 }}
    //       className="bg-white rounded-lg shadow"
    //     >
    //       <div className="p-6 border-b border-gray-200">
    //         <h3 className="text-lg font-semibold text-gray-900">Proyectos Recientes</h3>
    //       </div>
    //       <div className="p-6">
    //         <div className="space-y-4">
    //           {recentProjects.map((project) => (
    //             <div key={project.id} className="flex items-center justify-between">
    //               <div className="flex-1">
    //                 <h4 className="font-medium text-gray-900">{project.name}</h4>
    //                 <p className="text-sm text-gray-600">{project.client}</p>
    //                 <div className="mt-2">
    //                   <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
    //                     <span>{project.status}</span>
    //                     <span>{project.progress}%</span>
    //                   </div>
    //                   <div className="w-full bg-gray-200 rounded-full h-2">
    //                     <div
    //                       className="bg-blue-500 h-2 rounded-full transition-all duration-300"
    //                       style={{ width: `${project.progress}%` }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </motion.div>

    //     {/* Recent Contacts */}
    //     <motion.div
    //       initial={{ y: 50, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ delay: 0.5 }}
    //       className="bg-white rounded-lg shadow"
    //     >
    //       <div className="p-6 border-b border-gray-200">
    //         <h3 className="text-lg font-semibold text-gray-900">Contactos Recientes</h3>
    //       </div>
    //       <div className="p-6">
    //         <div className="space-y-4">
    //           {recentContacts.map((contact) => (
    //             <div key={contact.id} className="flex items-center justify-between">
    //               <div className="flex-1">
    //                 <h4 className="font-medium text-gray-900">{contact.name}</h4>
    //                 <p className="text-sm text-gray-600">{contact.email}</p>
    //                 <div className="flex items-center space-x-4 mt-1">
    //                   <span className="text-xs text-gray-500">{contact.country}</span>
    //                   <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
    //                     {contact.service}
    //                   </span>
    //                 </div>
    //               </div>
    //               <div className="text-right">
    //                 <p className="text-sm text-gray-600">{contact.date}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>

    //   {/* Quick Actions */}
    //   <motion.div
    //     initial={{ y: 50, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{ delay: 0.6 }}
    //     className="bg-white rounded-lg shadow p-6"
    //   >
    //     <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //       <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
    //         <div className="text-center">
    //           <Home className="mx-auto mb-2 text-gray-400" size={24} />
    //           <span className="text-sm text-gray-600">Nuevo Proyecto</span>
    //         </div>
    //       </button>

    //       <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
    //         <div className="text-center">
    //           <MapPin className="mx-auto mb-2 text-gray-400" size={24} />
    //           <span className="text-sm text-gray-600">Agregar Terreno</span>
    //         </div>
    //       </button>

    //       <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
    //         <div className="text-center">
    //           <BarChart3 className="mx-auto mb-2 text-gray-400" size={24} />
    //           <span className="text-sm text-gray-600">Nuevo Post</span>
    //         </div>
    //       </button>

    //       <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
    //         <div className="text-center">
    //           <Users className="mx-auto mb-2 text-gray-400" size={24} />
    //           <span className="text-sm text-gray-600">Ver Reportes</span>
    //         </div>
    //       </button>
    //     </div>
    //   </motion.div>
    // </div>
  );
}
