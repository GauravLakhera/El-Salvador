"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const EditLandModal = ({ isOpen, onClose, landId, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    price: "",
    city: "",
    state: "",
    zipCode: "",
    country: "El Salvador",
    address: "",
    areaSqFeet: "",
    landType: "residential",
    zoning: "R1",
    status: "available",
    featured: false,
    virtualTourUrl: "",
    isActive: true,
    coordinates: ["", ""],
  });

  // Fetch land data when modal opens
  useEffect(() => {
    if (isOpen && landId) {
      fetchLandData();
    }
  }, [isOpen, landId]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setError("");
      setImages([]);
      setExistingImages([]);
      setImagesToDelete([]);
    }
  }, [isOpen]);

  const fetchLandData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://el-salvador-backend.onrender.com/api/v1/lands/${landId}`
      );
      const data = await response.json();

      if (data.success) {
        const land = data.data;

        setFormData({
          name: land.name || "",
          title: land.title || "",
          description: land.description || "",
          price: land.price || "",
          city: land.city || "",
          state: land.state || "",
          zipCode: land.zipCode || "",
          country: land.country || "El Salvador",
          address: land.address || "",
          areaSqFeet: land.areaSqFeet || "",
          landType: land.landType || "residential",
          zoning: land.zoning || "R1",
          status: land.status || "available",
          featured: land.featured || false,
          virtualTourUrl: land.virtualTourUrl || "",
          isActive: land.isActive !== undefined ? land.isActive : true,
          coordinates:
            land.location && land.location.coordinates
              ? land.location.coordinates
              : ["", ""],
        });

        setExistingImages(land.images || []);
      } else {
        setError("Failed to fetch land data");
      }
    } catch (err) {
      setError("Error fetching land data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "longitude" || name === "latitude") {
      const newCoords = [...formData.coordinates];
      newCoords[name === "longitude" ? 0 : 1] = value;
      setFormData((prev) => ({ ...prev, coordinates: newCoords }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleDeleteExistingImage = (imageUrl) => {
    setExistingImages((prev) => prev.filter((img) => img !== imageUrl));
    setImagesToDelete((prev) => [...prev, imageUrl]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const submitData = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key === "coordinates") {
          const coords = formData.coordinates.map(
            (coord) => parseFloat(coord) || 0
          );
          submitData.append(
            "location",
            JSON.stringify({
              type: "Point",
              coordinates: coords,
            })
          );
        } else {
          submitData.append(key, formData[key]);
        }
      });

      images.forEach((image) => {
        submitData.append("images", image);
      });

      submitData.append("existingImages", JSON.stringify(existingImages));
      submitData.append("imagesToDelete", JSON.stringify(imagesToDelete));

      const response = await fetch(
        `https://el-salvador-backend.onrender.com/api/v1/lands/${landId}`,
        {
          method: "PUT",
          body: submitData,
        }
      );

      const data = await response.json();

      if (data.success) {
        onSuccess(); // Refresh the main page data
        onClose(); // Close the modal
      } else {
        setError(data.message || "Failed to update land");
      }
    } catch (err) {
      setError("Error updating land");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Edit Land</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="px-6 py-8 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading land data...</span>
            </div>
          ) : (
            <>
              {/* Error Message */}
              {error && (
                <div className="px-6 py-4 bg-red-50 border-b border-red-200">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="max-h-[70vh] overflow-y-auto"
              >
                <div className="px-6 py-4 space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Basic Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Price ($) *
                        </label>
                        <input
                          type="number"
                          name="price"
                          required
                          min="1"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        minLength="5"
                        maxLength="200"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        required
                        minLength="10"
                        maxLength="2000"
                        rows="3"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Location
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Land Details */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Land Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Area (sq ft) *
                        </label>
                        <input
                          type="number"
                          name="areaSqFeet"
                          required
                          min="1"
                          value={formData.areaSqFeet}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Land Type *
                        </label>
                        <select
                          name="landType"
                          required
                          value={formData.landType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="agricultural">Agricultural</option>
                          <option value="industrial">Industrial</option>
                          <option value="recreational">Recreational</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Zoning *
                        </label>
                        <select
                          name="zoning"
                          required
                          value={formData.zoning}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="R1">R1</option>
                          <option value="R2">R2</option>
                          <option value="R3">R3</option>
                          <option value="C1">C1</option>
                          <option value="C2">C2</option>
                          <option value="M1">M1</option>
                          <option value="M2">M2</option>
                          <option value="A1">A1</option>
                          <option value="mixed-use">Mixed Use</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Status and Settings */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Status & Settings
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="available">Available</option>
                          <option value="pending">Pending</option>
                          <option value="sold">Sold</option>
                          <option value="withdrawn">Withdrawn</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Virtual Tour URL
                        </label>
                        <input
                          type="url"
                          name="virtualTourUrl"
                          value={formData.virtualTourUrl}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-6 mt-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="featured"
                          checked={formData.featured}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          Featured
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isActive"
                          checked={formData.isActive}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          Active
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Current Images */}
                  {existingImages.length > 0 && (
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 mb-3">
                        Current Images
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {existingImages.map((imageUrl, index) => (
                          <div key={index} className="relative group">
                            <div className="relative h-24 w-full bg-gray-200 rounded-lg overflow-hidden">
                              <Image
                                src={imageUrl}
                                alt={`Land image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteExistingImage(imageUrl)
                              }
                              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add New Images */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Add New Images
                    </h4>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Select multiple images to add to existing ones.
                    </p>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={submitting}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-6 py-2 rounded-md font-medium transition-colors text-sm ${
                      submitting
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {submitting ? "Updating..." : "Update Land"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditLandModal;
