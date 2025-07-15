'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Home, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  DollarSign,
  MapPin
} from 'lucide-react';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('30d');

  const stats = [
    {
      title: "Proyectos Activos",
      value: "23",
      change: "+12%",
      changeType: "positive",
      icon: Home,
      color: "bg-blue-500"
    },
    {
      title: "Consultas del Mes",
      value: "127",
      change: "+8%",
      changeType: "positive", 
      icon: MessageSquare,
      color: "bg-green-500"
    },
    {
      title: "Terrenos Disponibles",
      value: "45",
      change: "-3%",
      changeType: "negative",
      icon: MapPin,
      color: "bg-purple-500"
    },
    {
      title: "Ingresos del Mes",
      value: "$85,400",
      change: "+15%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-orange-500"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      name: "Casa Moderna San Salvador",
      client: "María González",
      status: "En Construcción",
      progress: 65,
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Villa Santa Ana",
      client: "Carlos Mendoza",
      status: "Planificación",
      progress: 20,
      startDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Residencia La Libertad",
      client: "Ana Martínez",
      status: "Completado",
      progress: 100,
      startDate: "2023-11-10"
    }
  ];

  const recentContacts = [
    {
      id: 1,
      name: "Roberto Flores",
      email: "roberto@email.com",
      country: "Estados Unidos",
      service: "Construcción",
      date: "2024-01-20"
    },
    {
      id: 2,
      name: "Patricia López",
      email: "patricia@email.com", 
      country: "Canadá",
      service: "Terreno",
      date: "2024-01-19"
    },
    {
      id: 3,
      name: "Miguel Hernández",
      email: "miguel@email.com",
      country: "España",
      service: "Financiamiento",
      date: "2024-01-18"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Resumen general de la plataforma</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 90 días</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} vs período anterior
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Proyectos Recientes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.client}</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                        <span>{project.status}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Contactos Recientes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">{contact.country}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {contact.service}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{contact.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg shadow p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-center">
              <Home className="mx-auto mb-2 text-gray-400" size={24} />
              <span className="text-sm text-gray-600">Nuevo Proyecto</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-gray-400" size={24} />
              <span className="text-sm text-gray-600">Agregar Terreno</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <div className="text-center">
              <BarChart3 className="mx-auto mb-2 text-gray-400" size={24} />
              <span className="text-sm text-gray-600">Nuevo Post</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <div className="text-center">
              <Users className="mx-auto mb-2 text-gray-400" size={24} />
              <span className="text-sm text-gray-600">Ver Reportes</span>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}