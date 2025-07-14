import { Footer } from '@/components/footer';
import Header from '@/components/header';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CustomLayout: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CustomLayout;
