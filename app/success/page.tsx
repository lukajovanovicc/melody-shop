import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import CustomLayout from '../layout/CustomLayout';
import { NextPage } from 'next';

const SuccessPage: NextPage<any> = async () => {
  return (
    <CustomLayout>
      <div className='min-h-[55vh] flex items-center justify-center font-medium'>
        <Card className='w-full max-w-md'>
          <CardContent className='p-8 text-center'>
            <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-4 text-green-600'>
              Payment Successful!
            </h2>
            <p className='text-gray-600 mb-6'>
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>
            <Link href='/products'>
              <Button className='w-full'>Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </CustomLayout>
  );
};

export default SuccessPage;
