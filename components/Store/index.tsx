import Image from 'next/image'

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./images-data";

const swipeConfidenceThreshold = 10000;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Store() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full 
    md:h-screen bg-green-200 py-16 md:py-28 ">

      <div className="flex flex-col md:w-1/2 bg-green-200 px-8 md:px-28 ">
        <h1 className="text-2xl md:text-left font-bold text-gray-600 
        pb-8 md:pb-2 w-full uppercase">
          Venha conhecer nossa lojinha
        </h1>

        <h1 className="text-md md:text-left text-gray-600 
        font-normal pb-4 w-full">
          Camisetas, canecas, sticks personalizados...
        </h1>

        <div className=" flex text-base text-gray-600 
        justify-start md:justify-start font-bold pb-2 w-full">
          <Image src="/images/core.png" width="20" height="16" className="" />
          <h2 className="px-2"> Tamanhos e cores variadas</h2>
        </div>

        <div className="flex text-base text-gray-600 
        justify-start md:justify-start font-bold pb-2 w-full">
          <Image src="/images/core.png" width="20" height="16" className="" />
          <h2 className="px-2"> Lucro usado para investir na causa</h2>
        </div>

        <div className="flex text-base text-gray-600 
        justify-start md:justify-start font-bold pb-2 w-full">
          <Image src="/images/core.png" width="20" height="16" className="" />
          <h2 className="px-2">O primeiro passo é se questionar </h2>
        </div>

      </div>

      <div className="flex w-full bg-green-200 flex-col items-center justify-start 
      md:h-screen md:bg-green-100 md:w-1/2 px-8 md:px-28">

        <div className="example-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className="trans"
              key={page}
              width={250}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          <div className="next" onClick={() => paginate(1)}>
            {"‣"}
          </div>
          <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
          </div>
        </div>

        <div className=" px-4 py-3 flex items-center justify-between border-t
         md:border-gray-400 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border 
              border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-100">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border 
              border-gray-300 bg-green-100 text-sm font-medium text-gray-700 hover:bg-green-100">
                2
              </a>
              <a href="#" className="hidden md:inline-flex relative items-center px-4 py-2 border 
              border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-green-100">
                3
              </a>
            </nav>
          </div>
        </div>

        <button className="bg-green-500 md:bg-green-600 px-4 py-2 rounded-4xl mt-16 justify-end">
          <p className="w-40 text-white font-bold"> Ir para loja </p>
        </button>
      </div>

    </div>
  )
}
