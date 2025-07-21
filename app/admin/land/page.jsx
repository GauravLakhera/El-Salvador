"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EditLandModal from "../../../components/EditLandModal"; // Import the modal component

const LandsAdminPage = () => {
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
                Land Management
              </h1>
              <p className="text-gray-600 mt-1">Manage your land listings</p>
            </div>
            <Link
              href="/admin/land/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Add New Land
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
                Search
              </label>
              <input
                type="text"
                placeholder="Search by title or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
                <option value="withdrawn">Withdrawn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Land Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="agricultural">Agricultural</option>
                <option value="industrial">Industrial</option>
                <option value="recreational">Recreational</option>
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
                    <span className="text-gray-500">No Image</span>
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
                    {land.status}
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
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {land.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-medium">
                      ${land.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Area:</span>
                    <span className="font-medium">{land.areaSqFeet} sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Type:</span>
                    <span className="font-medium capitalize">
                      {land.landType}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Location:</span>
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
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(land._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                  >
                    Delete
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
                No lands found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filterStatus !== "all" || filterType !== "all"
                  ? "Try adjusting your filters or search term."
                  : "Get started by adding your first land listing."}
              </p>
              <Link
                href="/admin/land/create"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Add New Land
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
  );
};

export default LandsAdminPage;
