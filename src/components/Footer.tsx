
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-xl">Lembaga Adat Paser</h1>
                <p className="text-primary font-semibold text-sm">Melestarikan Budaya Tradisional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Lembaga Adat Paser berkomitmen untuk melestarikan, mengembangkan, dan mempromosikan 
              kekayaan budaya, sejarah, dan tradisi adat Paser untuk generasi mendatang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Menu Utama</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link to="/budaya" className="text-gray-300 hover:text-primary transition-colors">Budaya</Link></li>
              <li><Link to="/sejarah" className="text-gray-300 hover:text-primary transition-colors">Sejarah</Link></li>
              <li><Link to="/kerajinan" className="text-gray-300 hover:text-primary transition-colors">Kerajinan</Link></li>
              <li><Link to="/artefak" className="text-gray-300 hover:text-primary transition-colors">Artefak</Link></li>
              <li><Link to="/berita" className="text-gray-300 hover:text-primary transition-colors">Berita</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Kontak</h3>
            <div className="space-y-2 text-gray-300">
              <p>Jl. Adat Paser No. 123</p>
              <p>Tanah Grogot, Paser</p>
              <p>Kalimantan Timur</p>
              <p className="mt-4">
                <span className="font-medium">Email:</span><br />
                info@adatpaser.org
              </p>
              <p>
                <span className="font-medium">Telepon:</span><br />
                +62 123 456 7890
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Lembaga Adat Paser. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
