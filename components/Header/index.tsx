import Image from 'next/image'

export default function Header() {
  return (
    <div className="sticky flex flex-row justify-between
      w-full h-14 bg-green-600 px-16 py-4 z-50 md:px:28 ">

      <h1 className="text-2xl font-bold text-gray-200">
        ChaComigo
      </h1>

      <div className="md:flex-row md:flex hidden justify-between">
        <a href="#about-content" >
          <h2 className="px-2 text-gray-200"> Sobre </h2>
        </a>
        <a href="#news-content" >
          <h2 className="px-2 text-gray-200"> Destaques </h2>
        </a>
        <a href="#people-content" >
          <h2 className="px-2 text-gray-200"> Time </h2>
        </a>
        <a href="#download-content" >
          <h2 className="px-2 text-gray-200"> Download </h2>
        </a>
        <a href="#faq-content" >
          <h2 className="px-2 text-gray-200"> FAQ </h2>
        </a>
        <a href="#store-contact" >
          <h2 className="px-2 text-gray-200"> Loja </h2>
        </a>
        <a href="#contact-content" >
          <h2 className="px-2 text-gray-200"> Contato </h2>
        </a>
      </div>

      <div className="md:hidden flex-row flex">
        <Image className="" src="/images/chalogo.png" width="20" height="40" />
      </div>

    </div>
  )
}
