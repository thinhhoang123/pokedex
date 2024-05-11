'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageFallback({
  src,
  fallbackSrc = '/pokemon-ball.svg',
  width = 50,
  height = 50,
  alt = 'image',
  className,
}: {
  src: string;
  fallbackSrc?: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      className={className}
      src={imgSrc}
      onLoad={(e: any) => {
        if (e.target.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
      width={width}
      height={height}
      alt={alt}
      loader={({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
      }}
      loading="lazy"
    />
  );
}
