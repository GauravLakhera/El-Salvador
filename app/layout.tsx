import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'El Salvador Constructores - Constructores de Casas en El Salvador',
  description: 'Constructores profesionales en El Salvador. Compra de terrenos, construcción de casas personalizadas, financiamiento y servicios bancarios para salvadoreños en el exterior.',
  keywords: 'constructores El Salvador, casas El Salvador, terrenos El Salvador, construcción, Banco Promerica, FSV vivienda',
  openGraph: {
    title: 'El Salvador Constructores - Tu Casa de Ensueño en El Salvador',
    description: 'Expertos en construcción de casas personalizadas en El Salvador. Servicios completos desde compra de terrenos hasta financiamiento.',
    locale: 'es_SV',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
      <Footer/>
    </html>
  );
}