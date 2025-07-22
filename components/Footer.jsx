import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">El Salvador Constructores</h2>
          <p className="text-sm text-gray-400 mb-4">
            Tu visión, nuestra construcción: edificamos el futuro que imaginas.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/50374740536" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="mailto:info@ElSalvadorConstructores.com" className="hover:text-yellow-400">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/sobre-nosotros" className="hover:text-white">Acerca de Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              Dirección: Pendiente
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              WhatsApp: +503 7474 0536
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              info@ElSalvadorConstructores.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} El Salvador Constructores, S.A. de C.V. — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
