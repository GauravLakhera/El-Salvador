"use client";

import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  const handleLogout = useCallback(() => {
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  }, [router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isAdmin") === "true";

      if (!isLoginPage && !isLoggedIn) {
        router.push("/admin/login");
      } else if (isLoginPage && isLoggedIn) {
        router.push("/admin/terrenos");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname, isLoginPage, router]);

  const navigationItems = [
    { href: "/admin/land", label: "Terrenos" },
    { href: "/admin/gallery", label: "Galería" },
    { href: "/admin/contact", label: "Contacto" },
  ];

  const isActiveRoute = (href: string) => pathname === href;

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

  if (isLoginPage) {
    return (
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      {isMobileMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                  <h1 className="ml-2 md:ml-0 md:text-xl font-semibold text-gray-900">
                    Admin Panel - El Salvador Constructores
                  </h1>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 px-3 py-2 rounded-md text-xs md:text-sm font-medium"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="flex relative">
            <nav
              className={`${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 md:shadow-sm`}
            >
              <div className="p-4">
                <ul className="space-y-2 mt-16 md:mt-0">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block px-4 py-2 rounded transition-colors duration-200 ${
                          isActiveRoute(item.href)
                            ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {isMobileMenuOpen && (
              <div
                className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                onClick={closeMobileMenu}
              ></div>
            )}

            <main className="flex-1 p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}