
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { artefakData } from '@/data/mockData';
import { ArrowLeft } from 'lucide-react';

const ArtefakDetail = () => {
  const { id } = useParams();
  const item = artefakData.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Artefak tidak ditemukan</h1>
          <Button asChild>
            <Link to="/artefak">Kembali ke Daftar Artefak</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/artefak" className="flex items-center space-x-2">
              <ArrowLeft size={16} />
              <span>Kembali ke Daftar Artefak</span>
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {item.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {item.description}
            </p>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-playfair text-2xl font-bold mb-4">Bagikan Artikel Ini</h3>
              <div className="flex space-x-4">
                <Button variant="outline">Facebook</Button>
                <Button variant="outline">Twitter</Button>
                <Button variant="outline">WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtefakDetail;
