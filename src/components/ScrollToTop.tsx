'use client';
import { useEffect, useState } from 'react';
import { ArrowBigUp } from 'lucide-react';
export default function ScrollToTop() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={
        isScroll
          ? 'fixed bottom-5 right-5 z-50 border cursor-pointer rounded-full backdrop-blur bg-background/50 supports-[backdrop-filter]:bg-background/60 hover:border-gray-500 drop-shadow-md'
          : 'hidden'
      }
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowBigUp className="m-2" />
    </div>
  );
}
