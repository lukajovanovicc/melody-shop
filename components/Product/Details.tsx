import { Product } from '@/app/products/[id]/types';
import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Props {
  product: Product;
}

const Details: FC<Props> = ({ product }) => {
  return (
    <div className='mt-16'>
      <Tabs defaultValue='features' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='features'>Features</TabsTrigger>
          <TabsTrigger value='specifications'>Specifications</TabsTrigger>
          <TabsTrigger value='reviews'>Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value='features' className='mt-6'>
          <div className='prose max-w-none'>
            <h3 className='text-xl font-semibold mb-4'>Key Features</h3>
            <ul className='space-y-2'>
              {product.features.map((feature, index) => (
                <li key={index} className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value='specifications' className='mt-6'>
          <div className='prose max-w-none'>
            <h3 className='text-xl font-semibold mb-4'>
              Technical Specifications
            </h3>
            <div className='grid md:grid-cols-2 gap-4'>
              {Object.entries(product?.specifications).map(([key, value]) => (
                <div key={key} className='flex justify-between py-2 border-b'>
                  <span className='font-medium'>{key}:</span>
                  <span className='text-muted-foreground'>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value='reviews' className='mt-6'>
          <div className='prose max-w-none'>
            <h3 className='text-xl font-semibold mb-4'>Customer Reviews</h3>
            <p className='text-muted-foreground'>
              Reviews feature coming soon...
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Details;
