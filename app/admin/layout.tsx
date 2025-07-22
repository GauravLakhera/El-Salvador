"use client";

import "../globals.css";
// import type { Metadata } from "next"; // Metadata is for layout.tsx at the root or page.tsx, not for client components
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react"; // Added useState and useCallback

const inter = Inter({ subsets: ["latin"] });

// Metadata should typically be defined in a static `layout.tsx` or `page.tsx` file
// that isn't a "use client" component, or using generateMetadata.
// export const metadata: Metadata = {
//   title: "Admin Panel - El Salvador Constructores",
//   description: "Administración de contenido para El Salvador Constructores",
// };

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // State to manage loading during the initial authentication check
  const [isLoading, setIsLoading] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  // Function to handle user logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem("isAdmin"); // Remove the login flag
    router.push("/admin/login"); // Redirect to login page
  }, [router]); // router is stable in Next.js 13+, but good to include for clarity

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isAdmin") === "true";

      if (!isLoginPage && !isLoggedIn) {
        // If not on the login page and not logged in, redirect to login
        router.push("/admin/login");
      } else if (isLoginPage && isLoggedIn) {
        // If on the login page but already logged in, redirect to a default admin page
        // For example, /admin/terrenos or /admin/dashboard
        router.push("/admin/terrenos");
      }
      setIsLoading(false); // Authentication check is complete
    };

    checkAuth();
  }, [pathname, isLoginPage, router]); // Dependency array includes pathname and router

  // Show a loading screen while authentication is being checked
  if (isLoading) {
    return (
      <html lang="es">
        <body className={inter.className}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <p className="text-gray-700 text-lg">Cargando...</p>
          </div>
        </body>
      </html>
    );
  }

  // If on the login page, render only its children (the login form)
  if (isLoginPage) {
    return (
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  // If not on the login page and authenticated, render the full admin layout
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
                  {/* Removed 'Perfil' if it doesn't have a direct route/functionality yet */}
                  {/* <button className="text-gray-500 hover:text-gray-700">
                    Perfil
                  </button> */}
                  <button
                    onClick={handleLogout} // Call the logout function on click
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
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
                  <li>
                    <a
                      href="/admin/land"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Terrenos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/gallery"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Galería
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Contacto
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
