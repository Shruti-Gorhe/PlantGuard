
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Filter, SortDesc } from 'lucide-react';

interface HistoryItem {
  id: string;
  imageUrl: string;
  plantName: string;
  diseaseName: string;
  date: Date;
  severity: 'low' | 'medium' | 'high';
}

const HistoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data
  const historyItems: HistoryItem[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      plantName: 'Tomato',
      diseaseName: 'Late Blight',
      date: new Date(2023, 10, 5),
      severity: 'high'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1587554722947-6a35995cca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      plantName: 'Cucumber',
      diseaseName: 'Downy Mildew',
      date: new Date(2023, 9, 28),
      severity: 'medium'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      plantName: 'Apple',
      diseaseName: 'Apple Scab',
      date: new Date(2023, 9, 15),
      severity: 'low'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      plantName: 'Grape',
      diseaseName: 'Black Rot',
      date: new Date(2023, 8, 22),
      severity: 'medium'
    },
  ];

  const filteredItems = historyItems.filter(item =>
    item.plantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.diseaseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="w-full animate-fade-in-up">
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search by plant or disease name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 input-field w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <SortDesc className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No history items found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/results/${item.id}`}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer h-full flex flex-col">
                <div className="aspect-video relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.plantName} 
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-2 right-2 capitalize ${getSeverityColor(item.severity)}`}
                  >
                    {item.severity}
                  </Badge>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium truncate">{item.plantName}</h3>
                    <span className="text-xs text-muted-foreground">
                      {format(item.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.diseaseName}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryList;
