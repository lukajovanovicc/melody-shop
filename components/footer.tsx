import Link from 'next/link';
import {
  Music,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-muted py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <Music className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold'>MusicShop</span>
            </div>
            <p className='text-muted-foreground mb-4'>
              Your one-stop destination for quality musical instruments and
              accessories.
            </p>
            <div className='flex space-x-4'>
              <Facebook className='h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer' />
              <Twitter className='h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer' />
              <Instagram className='h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer' />
              <Youtube className='h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer' />
            </div>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <Link href='#' className='hover:text-primary'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Contact
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Categories</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Electric Guitars
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Acoustic Guitars
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Digital Pianos
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Drum Sets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Contact Info</h3>
            <div className='space-y-2 text-muted-foreground'>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span>(555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <span>info@melodymart.com</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>123 Music St, Harmony City</span>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
          <p>&copy; 2024 MelodyMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
