import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/dummy';
import ProductCard from './Product/ProductCard';

export function FeaturedProducts() {
  return (
    <section className='bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Featured Products</h2>
          <p className='text-muted-foreground text-lg'>
            Hand-picked instruments from our collection
          </p>
        </div>
        <Carousel className='w-full max-w-full mx-auto'>
          <CarouselContent className='-ml-2 md:-ml-4'>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
