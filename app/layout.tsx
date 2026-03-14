import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Academia Alzea - Donde el aprendizaje cobra vida',
  description: 'Academia de apoyo escolar en Santa Eugenia, Madrid. Refuerzo académico, clases particulares y escuela de idiomas con más de 30 años de experiencia.',
  keywords: 'Academia Santa Eugenia, clases particulares Villa de Vallecas, refuerzo escolar La Gavia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
