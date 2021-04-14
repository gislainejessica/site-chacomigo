
export default function Contact() {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-auto bg-white	
      px-8 py-16 md:px-28 md:py-24">

      <div className="flex flex-col bg-gray-100 p-16 shadow-none rounded-sm border-green-200 border-1">
        <h1 className="text-4xl text-center font-bold text-gray-700 pb-10">
          Contato
        </h1>

        <h1 className="text-xl text-left font-bold text-gray-600 pb-10">
          Tem interesse em saber mais ou tem alguma dica legal?
        </h1>

        <label className="font-bold text-gray-700 pb-1 pt-3">
          Nome
        </label>
        <input type="text" className="border-gray-200 w border-2 mb-2 px-2 rounded-lg p-2" placeholder="Janaina Lima" />
        <label className="font-bold text-gray-700 pb-1 pt-3">
          Email
        </label>
        <input type="text" className="border-gray-200 w border-2 mb-2 px-2 rounded-lg p-2" placeholder="email@gmail.com" />
        <label className="font-bold text-gray-700 pb-1 pt-3">
          Assunto
        </label>
        <input type="text" className="border-gray-200 border-2 mb-2 px-2 rounded-lg p-20" placeholder="Escreve aqui sua mensagem..." />

        <button className="w-full bg-green-500 md:bg-green-600 px-4 py-2 rounded-4xl mt-16">
          <p className="text-white font-bold"> Enviar Mensagem </p>
        </button>
      </div>
    </div>
  )
}
