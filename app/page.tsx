import type { NextPage } from 'next';
import { HeroSection } from '@/components/hero-section';
import { CategoriesSection } from '@/components/categories-section';
import { FeaturedProducts } from '@/components/featured-products';
import { FeaturesSection } from '@/components/features-section';
import { NewsletterSection } from '@/components/newsletter-section';
import PageLayout from './layout/CustomLayout';

const HomePage: NextPage<any> = async () => {
  return (
    <PageLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturesSection />
      <NewsletterSection />
    </PageLayout>
  );
};

export default HomePage;
