import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  return (
    <section className='py-16 bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Stay in Tune</h2>
        <p className='text-lg mb-8 opacity-90'>
          Get the latest updates on new arrivals, exclusive deals, and music
          tips
        </p>
        <form className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 px-4 py-2 rounded-md text-foreground'
          />
          <Button variant='secondary' type='submit'>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
