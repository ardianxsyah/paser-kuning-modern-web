
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CardGrid from '@/components/CardGrid';
import { beritaData } from '@/data/mockData';

const Berita = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection
        title="Berita & Kegiatan"
        subtitle="Informasi Terkini Lembaga Adat Paser"
        description="Ikuti perkembangan terbaru kegiatan pelestarian budaya, acara adat, dan program-program Lembaga Adat Paser."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Berita Terbaru
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informasi terkini tentang kegiatan dan program pelestarian budaya Paser
            </p>
          </div>

          <CardGrid 
            items={beritaData} 
            basePath="/berita" 
            showCategory={true}
            showDate={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Berita;
