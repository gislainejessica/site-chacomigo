import Image from 'next/image'

export default function Header() {
  return (
    <div className="sticky flex flex-row justify-between
      w-full h-16 bg-green-600	px-16 py-4 z-50 md:px:28">

      <h1 className="text-2xl font-bold text-gray-200">
        ChaComigo
      </h1>

      <div className="md:flex-row md:flex hidden justify-between">
        <h2 className="px-2 text-gray-200"> Sobre </h2>
        <h2 className="px-2 text-gray-200"> Eventos </h2>
        <h2 className="px-2 text-gray-200"> Produtos </h2>
        <h2 className="px-2 text-gray-200"> Team </h2>
        <h2 className="px-2 text-gray-200"> FAQ </h2>
        <h2 className="px-2 text-gray-200"> Loja </h2>
        <h2 className="px-2 text-gray-200"> Contato </h2>
      </div>

      <div className="md:hidden flex-row flex">
        <Image className="" src="/images/chalogo.png" width="20" height="40" />
      </div>

    </div>
  )
}
