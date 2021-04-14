import Image from 'next/image'
import { motion } from "framer-motion"

export default function News() {
  return (
    <div className="flex flex-col bg-green-400 w-full px-8 py-16 md:px-16 md:py-16">

      {/* <div className="flex bg-green-100 py-0 mb-0.5 md:py-0.5 mx-28 md:mb-28" /> */}

      <h1 className="text-4xl text-center font-bold text-white pb-8 md:pb-8">
        Destaques
      </h1>

      <div className="flex flex-col md:flex-row align-center justify-center">

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-100 md:mx-8 my-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/foguete.png" width="150" height="150" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-600 pt-2 pb-1">
              Movimento decola mulher
            </h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Encontro realizado na pracinha do Bairro das Laranjeiras ás 19h, com rodas de discurssão e pipoca
            </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-100 md:mx-8 my-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/core.png" width="150" height="150" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-600 pt-2 pb-1">
              A felicidade na palma da sua mão
            </h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Quer tomar redeas da sua vida? Venha
              conversar sobre grandes conquistas e seus desafios
            </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-100 md:mx-8 my-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/alvo.png" width="150" height="150" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-600 pt-2 pb-1">
              Foque em você!
            </h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Estratégias para  fazer de você sua principal preocupação. O mais importante
              deve ser seu bem-estar, não deixe isso de lado por coisas pequenas.
            </h1>
          </div>

        </div>

      </div>
    </div>
  )
}
