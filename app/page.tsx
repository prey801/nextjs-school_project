import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Welcome to Smart Vending
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience the future of vending with our smart machines.
          </p>
          <Link href="/purchase">
            <Button size="lg" className="gap-2">
              <ShoppingCart className="h-5 w-5" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}