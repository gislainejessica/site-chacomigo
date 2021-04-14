import Image from 'next/image'
import { motion } from "framer-motion"

export default function Welcome() {
  return (
    <div className="flex flex-col  bg-green-600">
      <div className="flex flex-row justify-center bg-background h-screen py-24" >
        <motion.div
          className="flex flex-col-reverse md:flex-row justify-evenly items-center 
          h-5/6 bg-green-600 md:bg-green-500	md:px-28 md:py-28 border-customise w-3/5"
          animate={{ scale: 1.1 }}>

          <motion.div className="flex flex-col md:w-1/2 "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <h1 className="text-4xl text-center md:text-left font-bold text-gray-100 my-2">
              ChaComigo
            </h1>
            <h2 className="text-base text-center md:text-left text-gray-100 ">
              Na construção de um mundo mais consciente com pessoas mais inteligentes emocionalmente
            </h2>
            <h3 className="text-base text-center md:text-left text-gray-100">
              O mais importante é que esteja bem e que as pessoas a sua volta também
            </h3>
          </motion.div>
          <motion.div className="py-6" animate={{
            scale: [1, 1, 1.1, 1.1, 1],
            rotate: [0, 0, 15, -15, 0],
          }}>
            <Image className="" src="/images/chalogo.png" width="200" height="200" />
          </motion.div>

        </motion.div >
      </div >

      {/* <div className="flex bg-white py-0.5 mx-16" /> */}
    </div>
  )
}
