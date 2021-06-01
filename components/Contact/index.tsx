
export default function Contact() {
  return (
    <div id="contact-content" className=" flex flex-col justify-center items-center w-full h-auto bg-gray-100 md:bg-white	
      px-4 py-8 md:px-28 md:py-24">

      <div className="flex flex-col bg-gray-100 p-8 md:px-16 shadow-none rounded-sm border-1 w-full md:w-144">
        <h1 className="text-4xl text-center font-bold text-gray-700 pb-6">
          Contato
        </h1>

        {/* <h1 className="text-lg text-left font-bold text-gray-600 pb-6">
          Tem interesse em saber mais ou tem alguma dica legal?
        </h1> */}

        <label className="font-bold text-base text-gray-700 pb-1 pt-3">
          Nome
        </label>
        <input type="text" className="border-gray-200 w border-2 mb-2 px-2 rounded-lg p-1" placeholder="Janaina Lima" />


        <label className="font-bold text-base text-gray-700 pb-1 pt-3">
          Email
        </label>
        <input type="text" className="border-gray-200 w border-2 mb-2 px-2 rounded-lg p-1" placeholder="email@gmail.com" />


        <label className="font-bold text-base text-gray-700 pb-1 pt-3">
          Assunto
        </label>
        <input type="text" className="border-gray-200 border-2 mb-2 px-2 rounded-lg p-10" placeholder="Escreve aqui sua mensagem..." />

        <button className="w-full bg-green-500 md:bg-green-600 px-4 py-2 rounded-lg mt-16">
          <p className="text-white font-bold"> Enviar Mensagem </p>
        </button>
      </div>
    </div>
  )
}
