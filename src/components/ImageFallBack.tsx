'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageFallback({
  src,
  fallbackSrc,
  width = 50,
  height = 50,
  alt = 'image',
}: {
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  alt: string;
}) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      priority={true}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
      width={width}
      height={height}
      alt={alt}
      loader={({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
      }}
    />
  );
}
