
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
}

interface CardGridProps {
  items: CardItem[];
  basePath: string;
  showCategory?: boolean;
  showDate?: boolean;
}

const CardGrid = ({ items, basePath, showCategory = false, showDate = false }: CardGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="aspect-video overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="line-clamp-2 font-playfair">{item.title}</CardTitle>
              {showCategory && item.category && (
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              )}
            </div>
            {showDate && item.date && (
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            )}
            <CardDescription className="line-clamp-3">{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to={`${basePath}/${item.id}`}>Baca Selengkapnya</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
