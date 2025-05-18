'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GetProductByHandleQuery } from '@/lib/shopify/graphql-types';

type Props = {
  images: NonNullable<GetProductByHandleQuery['productByHandle']>['images']['edges'];
};

export default function ProductGallery({ images }: Props) {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 0]);
  const imageCount = images.length;
  const showNavigation = imageCount > 1;
  const containerRef = useRef<HTMLDivElement>(null);

  const paginate = (newDirection: number) => {
    setActiveIndex(([prev]) => {
      const nextIndex = (prev + newDirection + imageCount) % imageCount;
      return [nextIndex, newDirection];
    });
  };

  const handleDragEnd = (_: any, { offset }: { offset: { x: number } }) => {
    if (offset.x < -50) {
      paginate(1);
    } else if (offset.x > 50) {
      paginate(-1);
    }
  };

  return (
    <div className="flex md:flex-row gap-2">
      {showNavigation && (<div className="flex md:flex-col gap-2 overflow-x-auto shrink-0">
        {images.map((img, index) => (
          <button
            key={img.node.url}
            onClick={() => setActiveIndex([index, index > activeIndex ? 1 : -1])}
            className={`w-20 h-20 rounded-lg overflow-hidden shrink-0 cursor-pointer bg-brand-grey ${
              index === activeIndex ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <Image
              src={img.node.url}
              alt={img.node.altText ?? 'Thumbnail'}
              width={80}
              height={80}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </button>
        ))}
      </div>)}

      <div ref={containerRef} className="relative aspect-square rounded-xl overflow-hidden w-full bg-brand-grey">
        {showNavigation ? (
          <>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={images[activeIndex].node.url}
                custom={direction}
                className="absolute inset-0"
                initial={{ x: direction > 0 ? 300 : -300 }}
                animate={{ x: 0 }}
                exit={{ x: direction < 0 ? 300 : -300 }}
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 } }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
              >
                <Image
                  src={images[activeIndex].node.url}
                  alt={images[activeIndex].node.altText ?? 'Product image'}
                  fill
                  className="object-cover pointer-events-none select-none"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 hover:border-gray-500 flex items-center justify-center"
            >
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" className="rotate-180" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 hover:border-gray-500 flex items-center justify-center"
            >
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" className="rotate" />
            </button>
          </>
        ) : (
          <Image
            src={images[activeIndex].node.url}
            alt={images[activeIndex].node.altText ?? 'Product image'}
            fill
            className="object-cover pointer-events-none select-none"
            priority
          />
        )}
      </div>
    </div>
  );
}
