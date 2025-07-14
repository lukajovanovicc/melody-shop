import { Product } from '@/app/products/[id]/types';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  product: Product;
}

const Breadcrumb: FC<Props> = ({ product }) => {
  return (
    <div className='flex items-center gap-2 mb-6 text-sm text-muted-foreground'>
      <Link href='/' className='hover:text-primary'>
        Home
      </Link>
      <span>/</span>
      <Link href='/products' className='hover:text-primary'>
        Products
      </Link>
      <span>/</span>
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrumb;
