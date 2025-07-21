import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel - El Salvador Constructores",
  description: "Panel de administración para gestionar contenido del sitio web",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Admin Panel - El Salvador Constructores
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    Perfil
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="flex">
            <nav className="w-64 bg-white shadow-sm min-h-screen">
              <div className="p-4">
                <ul className="space-y-2">
                  {/* 
                  <li>
                    <a href="/admin/proyectos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Proyectos
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/admin/terrenos"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Terrenos
                    </a>
                  </li>
                  {/* <li>
                    <a href="/admin/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/admin/galeria"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Galería
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="flex-1 p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
