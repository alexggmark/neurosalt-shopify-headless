"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Button from "../ui/Button";

type Faq = {
  title: string;
  description: string;
};

const faqs: Faq[] = [
  {
    title: "How long does shipping take?",
    description: "Shipping usually takes 3-7 business days, depending on your location. Expedited shipping options are available for faster delivery. Contact us for any specific shipping inquiries.",
  },
  {
    title: "How long does shipping take?",
    description: "Shipping usually takes 3-7 business days, depending on your location. Expedited shipping options are available for faster delivery. Contact us for any specific shipping inquiries.",
  },
  {
    title: "How long does shipping take?",
    description: "Shipping usually takes 3-7 business days, depending on your location. Expedited shipping options are available for faster delivery. Contact us for any specific shipping inquiries.",
  },
  {
    title: "How long does shipping take?",
    description: "Shipping usually takes 3-7 business days, depending on your location. Expedited shipping options are available for faster delivery. Contact us for any specific shipping inquiries.",
  },
  {
    title: "Pea protein",
    description: "This is pea protein, it's jolly nice, and I think you'll like it.",
  }
];

export default function ProductFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page-width">
      <div className="rounded-3xl flex overflow-hidden py-16 px-8 bg-black text-white">
        <div className="w-1/2 flex items-start justify-center">
          <Image src="/images/transparent-image-placeholder.png" width={400} height={400} alt="test" className="" />
        </div>
        <div className="w-1/2">
          {faqs.map((data, index) => (
            <div key={index} className={`w-full text-left px-6 text-white hover:bg-white/10 hover:border-white rounded-2xl border ${openIndex === index ? 'border-white' : 'border-white/40'} mb-3 cursor-pointer`}>
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left flex items-center justify-between cursor-pointer py-6`}
              >
                <div className="flex items-center">
                  <span className="text-lg font-medium">{data.title}</span>
                </div>
                <span>
                  <Image src={openIndex === index ? '/images/white-minus.svg' : '/images/white-plus.svg'} width={22} height={22} alt="test" />
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
                    className="overflow-hidden border-t border-white/40"
                  >
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="pb-8 pt-6"
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