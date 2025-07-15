'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products } from '@/dummy';
import PageLayout from '../layout/CustomLayout';
import ProductCard from '@/components/Product/ProductCard';

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategory, sortBy);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category, sortBy);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    filterProducts(searchQuery, selectedCategory, sort);
  };

  const filterProducts = (query: string, category: string, sort: string) => {
    let filtered = products;

    // Filter by search query
    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  };

  return (
    <PageLayout>
      <div className='container mx-auto px-4 py-8 min-h-[55vh]'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-4'>Our Products</h1>
          <p className='text-muted-foreground text-lg'>
            Discover our complete collection of musical instruments
          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <div className='flex-1'>
            <Input
              placeholder='Search products...'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={handleCategoryFilter}>
            <SelectTrigger className='w-full md:w-48'>
              <SelectValue placeholder='Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Categories</SelectItem>
              <SelectItem value='guitars'>Guitars</SelectItem>
              <SelectItem value='keyboards'>Keyboards</SelectItem>
              <SelectItem value='drums'>Drums</SelectItem>
              <SelectItem value='audio'>Audio</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={handleSort}>
            <SelectTrigger className='w-full md:w-48'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='name'>Name</SelectItem>
              <SelectItem value='price-low'>Price: Low to High</SelectItem>
              <SelectItem value='price-high'>Price: High to Low</SelectItem>
              <SelectItem value='rating'>Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-muted-foreground text-lg'>
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
