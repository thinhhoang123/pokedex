'use client';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function ReturnButton() {
  const route = useRouter();
  return (
    <Button variant="outline" onClick={() => route.back()}>
      <ArrowLeft />
    </Button>
  );
}
