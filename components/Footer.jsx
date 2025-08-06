import { X } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">El Salvador Constructores</h2>
          <p className="text-sm text-gray-400 mb-4">
            Tu visión, nuestra construcción: edificamos el futuro que imaginas.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/ElSalvadorConstructores"
              className="hover:text-blue-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/elsalvadorconstructores"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@elsalvadorconstructores"
              className="hover:text-pink-400"
            >
              <FaTiktok />
            </a>
            <a
              href="https://x.com/ESConstructores"
              className="hover:text-pink-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/@ElSalvadorConstructores"
              className="hover:text-green-400"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@ElSalvadorConstructores.com"
              className="hover:text-yellow-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/sobre-nosotros" className="hover:text-white">
                Acerca de Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-white">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-white">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Información de Contacto
          </h3>

          {/* Address */}
          <div className="mb-4">
            <div className="flex items-start gap-2 mb-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-400 text-sm">
                <span className="text-white font-medium">Dirección:</span>
                <br />
                Código Postal 3210, San Francisco Gotera,
                <br />
                Departamento De Morazán, El Salvador
              </div>
            </div>
          </div>



          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <div className="text-gray-400 text-sm">
              <span className="text-white font-medium">Email:</span>
              <br />
              info@ElSalvadorConstructores.com
            </div>
          </div>

        </div>
                  {/* Phone Numbers */}
          <div className="mb-4">
            <div className="text-white font-medium mb-2">Teléfonos:</div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-400" />
                Teléfono Local: +503 2113 0984
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" />
                El Salvador/WhatsApp: +503 7474 0536
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" />
                USA/WhatsApp: +1 832-225-6273
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-400" />
                Línea Gratuita: 1 800-972-1598
              </li>
            </ul>
          </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} El Salvador Constructores, S.A. de C.V. —
        Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
