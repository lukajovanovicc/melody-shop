import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/footer';
import { NextPage } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import SingleProduct from '@/components/Product/SingleProduct';
import { products } from '@/dummy';
import Details from '@/components/Product/Details';
import PageLayout from '@/app/layout/CustomLayout';
import Header from '@/components/header';

const ProductPage: NextPage<any> = async (props) => {
  const params = await props.params;
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <PageLayout>
      <div className='container mx-auto px-4 py-8'>
        {product && <Breadcrumb product={product} />}

        <Link
          href='/products'
          className='inline-flex items-center gap-2 mb-6 text-primary hover:underline'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Products
        </Link>

        {product && <SingleProduct product={product} />}

        {product && <Details product={product} />}
      </div>
    </PageLayout>
  );
};

export default ProductPage;
