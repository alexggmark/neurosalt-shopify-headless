'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StarRating from '../ui/RatingStar';

type Review = {
  imgSrc: string;
  author: string;
  rating: number;
  content: string;
};

const reviews: Review[] = [
  {
    imgSrc: '/images/placeholder-light.png',
    author: 'Jaroslava K.',
    rating: 4.5,
    content: 'This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!',
  },
  {
    imgSrc: '/images/placeholder.png',
    author: 'Alexandra M.',
    rating: 5,
    content: 'This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!',
  },
  {
    imgSrc: '/images/placeholder-light.png',
    author: 'Danielle S.',
    rating: 3.5,
    content: 'This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!',
  },
  {
    imgSrc: '/images/placeholder.png',
    author: 'Jaroslava K.',
    rating: 5,
    content: 'This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!',
  },
  {
    imgSrc: '/images/placeholder-light.png',
    author: 'Alexandra M.',
    rating: 5,
    content: 'This moisturizer left my skin feeling incredibly soft and hydrated. No greasy residue. Perfect for daily use!',
  },
];

export default function ReviewSlide() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <>
      <div className="page-width">
        <div className="flex justify-between items-center py-7">
          <h2 className="font-heading-xl">
            Over 2,000 Happy reviews
          </h2>
          <div className="flex justify-between max-w-24 w-full">
            <button className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" className="rotate-180" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" />
            </button>
          </div>
        </div>
      </div>
      <div className="page-width--overflow-right relative">
        <div className="w-full overflow-hidden pb-10">
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-4 cursor-grab active:cursor-grabbing will-change-transform mr-12"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative max-w-[380px] min-w-[380px] min-h-[460px] overflow-hidden rounded-2xl flex-shrink-0"
              >
                <Image
                  src={review.imgSrc}
                  alt={review.author}
                  width={600}
                  height={600}
                  className="pointer-events-none max-w-full w-full h-60 object-cover"
                />
                <div className="flex flex-col justify-end py-7 px-4">
                  <p className="text-lg font-medium tracking-tight mb-0.5">{review.author}</p>
                  <StarRating rating={review.rating} />
                  <p className="font-body-base mt-3">{review.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
