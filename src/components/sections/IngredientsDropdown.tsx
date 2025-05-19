"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Button from "../ui/Button";

type Ingredients = {
  title: string;
  description: string;
  imgSrc: string;
};

const ingredients: Ingredients[] = [
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it. This is pea protein, it's jolly nice, and I think you'll like it.",
    imgSrc: "/images/placeholder.png"
  },
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it.",
    imgSrc: "/images/placeholder.png"
  },
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it. This is pea protein, it's jolly nice, and I think you'll like it. This is pea protein, it's jolly nice, and I think you'll like it.",
    imgSrc: "/images/placeholder.png"
  },
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it.",
    imgSrc: "/images/placeholder.png"
  },
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it.",
    imgSrc: "/images/placeholder.png"
  }
];

export default function IngredientsDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page-width">
      <div className="rounded-2xl flex overflow-hidden py-16">
        <div className="w-1/2">
          <div className="max-w-96">
            <h1 className="font-heading-3xl mb-6">Made with the world’s most powerful superfood</h1>
            <p className="font-body-lg mb-10">We carefully select nutrient-packed ingredients to support your whole body, from your muscles to your metabolism.</p>
          </div>
        </div>
        <div className="w-1/2">
          {ingredients.map((data, index) => (
            <div key={index} className={`hover:bg-brand-grey border ${openIndex === index ? 'border-black' : 'border-gray-200'} hover:border-black rounded-2xl py-2 pl-2 pr-4 mb-3`}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={data.imgSrc}
                    width={68}
                    height={68}
                    alt="icon"
                    className="rounded-full flex-shrink-0"
                  />
                  <span className="text-lg font-medium">{data.title}</span>
                </div>
                <span>
                  <Image src="/images/chevron.svg" width={22} height={22} alt="test" className={openIndex === index ? '-rotate-90' : 'rotate-90'} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="wrapper"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="pb-6 pt-4 pl-20 border-t border-black/20"
                    >
                      <p className="text-base">
                        {data.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}