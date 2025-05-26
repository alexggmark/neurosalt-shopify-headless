"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

import { IngredientDropdownBlock } from '@/lib/dato/types';

type Props = {
  data: IngredientDropdownBlock;
}

export default function IngredientsDropdown({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page-width">
      <div className="rounded-2xl flex overflow-hidden py-16">
        <div className="w-1/2">
          <div className="max-w-96">
            <h1 className="font-heading-3xl mb-6">{data.title}</h1>
            <p className="font-body-lg mb-10">{data.description}</p>
          </div>
        </div>
        <div className="w-1/2">
          {data.ingredient.map((block, index) => (
            <div key={index} className={`hover:bg-brand-grey border ${openIndex === index ? 'border-black' : 'border-gray-200'} hover:border-black rounded-2xl py-2 pl-2 pr-4 mb-3`}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={block.ingredientimage ? block.ingredientimage.url : "/images/placeholder.png"}
                    width={68}
                    height={68}
                    alt="icon"
                    className="rounded-full flex-shrink-0"
                  />
                  <span className="text-lg font-medium">{block.title}</span>
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
                        {block.information}
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