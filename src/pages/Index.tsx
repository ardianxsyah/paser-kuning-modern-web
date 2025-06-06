
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, FileText, Gallery, Image, News, Users } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Book,
      title: "Warisan Budaya",
      description: "Pelajari kekayaan tradisi, tarian, dan ritual adat yang telah diwariskan turun-temurun.",
      link: "/budaya"
    },
    {
      icon: FileText,
      title: "Sejarah Paser",
      description: "Jelajahi perjalanan sejarah panjang dari Kerajaan Paser hingga era modern.",
      link: "/sejarah"
    },
    {
      icon: Gallery,
      title: "Kerajinan Tradisional",
      description: "Temukan keindahan anyaman rotan, ukiran kayu, dan tenun khas Paser.",
      link: "/kerajinan"
    },
    {
      icon: Image,
      title: "Artefak Bersejarah",
      description: "Koleksi benda-benda pusaka dan artefak yang menjadi saksi sejarah.",
      link: "/artefak"
    },
    {
      icon: News,
      title: "Berita & Kegiatan",
      description: "Informasi terbaru tentang kegiatan pelestarian budaya dan acara adat.",
      link: "/berita"
    },
    {
      icon: Users,
      title: "Komunitas Adat",
      description: "Bergabung dengan komunitas yang peduli pelestarian budaya Paser.",
      link: "/budaya"
    }
  ];

  const stats = [
    { number: "600+", label: "Tahun Sejarah" },
    { number: "50+", label: "Tradisi Budaya" },
    { number: "100+", label: "Artefak Koleksi" },
    { number: "25+", label: "Kerajinan Tradisional" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Lembaga Adat Paser"
        subtitle="Melestarikan Warisan Budaya untuk Generasi Mendatang"
        description="Portal resmi untuk mengenal, mempelajari, dan melestarikan kekayaan budaya, sejarah, dan tradisi adat Paser yang telah diwariskan selama berabad-abad."
        showCTA={true}
      />

      {/* About Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Tentang Lembaga Adat Paser
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Lembaga Adat Paser adalah institusi yang berkomitmen untuk melestarikan, mengembangkan, 
              dan mempromosikan kekayaan budaya Paser. Dengan dukungan masyarakat adat dan pemerintah, 
              kami berupaya memastikan warisan leluhur tetap hidup di tengah arus modernisasi.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Jelajahi Warisan Budaya Paser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai aspek budaya Paser melalui koleksi digital yang lengkap dan informatif
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-primary">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6 text-gray-600">
                      {feature.description}
                    </CardDescription>
                    <Button asChild className="w-full">
                      <Link to={feature.link}>Pelajari Lebih Lanjut</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Misi Pelestarian Budaya
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Kami berkomitmen untuk menjaga kelestarian budaya Paser melalui dokumentasi, 
                  edukasi, dan pemberdayaan masyarakat. Setiap tradisi, setiap cerita, dan setiap 
                  karya seni memiliki nilai yang tak ternilai bagi generasi mendatang.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mendokumentasikan tradisi dan budaya Paser
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Menyelenggarakan program edukasi budaya
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Memberdayakan pengrajin dan seniman lokal
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Membangun jembatan antara tradisi dan modernitas
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Budaya Paser" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
