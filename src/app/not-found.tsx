// 
// Not Found
// 

import Link from 'next/link';
import Header from '../components/ui/Header';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 w-full p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-6 text-gray-600">Could not find the requested resource.</p>
        <Link 
          href="/" 
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}