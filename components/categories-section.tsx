import { Card, CardContent } from '@/components/ui/card';
import { Guitar, Piano, Drum, Mic, Headphones } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { icon: Guitar, name: 'Guitars', count: '250+ items' },
  { icon: Piano, name: 'Keyboards', count: '180+ items' },
  { icon: Drum, name: 'Drums', count: '120+ items' },
  { icon: Mic, name: 'Audio', count: '300+ items' },
  { icon: Headphones, name: 'Accessories', count: '500+ items' },
];

export function CategoriesSection() {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Shop by Category</h2>
          <p className='text-muted-foreground text-lg'>
            Explore our wide range of musical instruments
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {categories.map((category, index) => (
            <Link key={index} href={'/products'}>
              <Card className='group hover:shadow-lg transition-shadow cursor-pointer'>
                <CardContent className='p-6 text-center'>
                  <category.icon className='h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform' />
                  <h3 className='font-semibold mb-2'>{category.name}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
