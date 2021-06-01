import Image from 'next/image'

export default function DownloadApp() {
  return (
    <div id="download-content" className="flex flex-row justify-around w-full  bg-green-100	
      px-8 py-16 md:px-28 md:py-28">

      <div className="hidden md:flex w-full h-auto">

        <div className="grid grid-cols-5 gap-4">

          <div className="flex flex-row justify-center" />

          <div className="flex flex-col col-span-3 pb-8">
            <div className="flex flex-row justify-center col-span-3">
              <Image src="/images/coffee-cup.png" width="50" height="50" className="" />
            </div>

            <h1 className="text-2xl text-center font-bold text-pink-800 text-opacity-100 py-2">
              ChaComigo
            </h1 >
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              Um App para todos porque a
            </h3>
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              nossa missão é levar luz aos relacionamentos
            </h3>
          </div>

          <div className="flex flex-row justify-center" />


          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center col-span-3">
              <Image src="/images/touch.png" width="50" height="50" className="" />
            </div>

            <h1 className="text-2xl text-center font-bold text-pink-800  py-2">
              Fácil de usar
            </h1 >
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              Projetado para ser usado dos mais jovens até as pessoas com mais dificuldades com a tecnologia
            </h3>
          </div>

          <div className="flex py-16 flex-row justify-center col-span-3">
            <Image src="/images/chat.png" width="200" height="200" className="" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center col-span-3">
              <Image src="/images/laughing.png" width="50" height="50" className="" />
            </div>

            <h1 className="text-2xl text-center font-bold text-pink-800  py-2">
              Divertido e Interativo
            </h1 >
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              Aprender não precisa ser chato, você vai aprender brincando. Uma aventura que te leverá ao próximo nível.
            </h3>
          </div>


          <div className="flex flex-row justify-center" />

          <div className="flex flex-col justify-center col-span-1">

            <div className="flex flex-row justify-center col-span-3">
              <Image src="/images/community.png" width="50" height="50" className="" />
            </div>

            <h1 className="text-2xl text-center font-bold text-pink-800  py-2">
              Comunidade
            </h1 >
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              Acesso a uma comunidade de pessoas engajadas e interessadas em ajudar você no que for necessário. Discursões
              e apresentações dos mais variados temas.
            </h3>
          </div>

          <div className="flex flex-row justify-center" />

          <div className="flex flex-col justify-center col-span-1">
            <div className="flex flex-row justify-center col-span-3">
              <Image src="/images/news.png" width="50" height="50" className="" />
            </div>

            <h1 className="text-2xl text-center font-bold text-pink-800  py-2">
              Novidade
            </h1 >
            <h3 className="flex justify-center text-base text-center font-normal text-gray-600 ">
              De tempos em tempos ações surpresas são realizadas, fique ligada. Quando você menos esperar estamos
              com uma novidade saindo do forno.
            </h3>
          </div>

          <div className="flex flex-row justify-center" />

        </div>

      </div>



      <div className="md:hidden flex-col w-full">

        <div className="flex flex-row justify-center col-span-3">
          <Image src="/images/chat.png" width="200" height="200" className="" />
        </div>

        <div className="flex flex-col pt-8">
          <div className="flex flex-row ">
            <Image src="/images/coffee-cup.png" width="40" height="40" className="" />
          </div>
          <h1 className="text-xl text-left font-bold text-pink-800 py-2">
            ChaComigo
          </h1 >
          <h3 className="flex  text-md text-left font-normal text-gray-600 ">
            Um App para todos porque a
          </h3>
          <h3 className="flex  text-md text-left font-normal text-gray-600 pb-4">
            nossa missão é levar luz aos relacionamentos
          </h3>
        </div>


        <div className="flex flex-col justify-center">
          <div className="flex flex-row col-span-3 pt-4">
            <Image src="/images/touch.png" width="40" height="40" className="" />
          </div>

          <h1 className="text-xl text-left font-bold text-pink-800  py-2">
            Fácil de usar
          </h1 >
          <h3 className="flex  text-md text-left font-normal text-gray-600  pb-4">
            Projetado para ser usado dos mais jovens até as pessoas com mais dificuldades com a tecnologia
          </h3>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row col-span-3 pt-4">
            <Image src="/images/laughing.png" width="40" height="40" className="" />
          </div>

          <h1 className="text-xl text-left font-bold text-pink-800  py-2">
            Divertido e Interativo
          </h1 >
          <h3 className="flex text-md text-left font-normal text-gray-600  pb-4">
            Aprender não precisa ser chato, você vai aprender brincando. Uma aventura que te leverá ao próximo nível.
          </h3>
        </div>


        <div className="flex flex-col col-span-1">
          <div className="flex flex-row col-span-3 pt-4">
            <Image src="/images/community.png" width="40" height="40" className="" />
          </div>

          <h1 className="text-xl text-left font-bold text-pink-800  py-2">
            Comunidade
          </h1 >
          <h3 className="flex text-md text-left font-normal text-gray-600  pb-4">
            Acesso a uma comunidade de pessoas engajadas e interessadas em ajudar você no que for necessário. Discursões
            e apresentações dos mais variados temas.
          </h3>
        </div>

        <div className="flex flex-col col-span-1">
          <div className="flex flex-row col-span-3 pt-4">
            <Image src="/images/news.png" width="40" height="40" className="" />
          </div>

          <h1 className="text-xl text-left font-bold text-pink-800  py-2">
            Novidades
          </h1 >
          <h3 className="flex text-md text-left font-normal text-gray-600  pb-4">
            De tempos em tempos ações surpresas são realizadas, fique ligada. Quando você menos esperar estamos
            com uma novidade saindo do forno.
          </h3>
        </div>


      </div>

    </div>
  )
}
