import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          {/* Left */}
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Academia Alzea</span>
          </div>

          {/* Center */}
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 fill-drop-pink text-drop-pink" />
            <span>en Santa Eugenia</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 text-center text-white/40 text-xs">
          Calle Castrillo de Aza, 32, 28031 Madrid | 913 318 375
        </div>
      </div>
    </footer>
  );
}
