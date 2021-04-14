import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-center
     md:justify-between w-full bg-gray-200 px-8	py-4 md:px-28 ">

      <h1 className=" text-center md:text-right text-2xl font-bold 
        text-gray-600">
        ChaComigo
      </h1>

      <div className=" justify-center align-center flex flex-col">


        <div className="flex flex-row justify-center pb-2 pt-2">
          <a className="px-4 py-2" href="https://www.facebook.com/ChaComigo-103978595029145">
            <FaFacebook color="#475569" size={24} />
          </a>
          <a className="px-4 py-2" href="https://www.instagram.com/chacomigobr/">
            <FaInstagram color="#475569" size={24} />
          </a>
          <a className="px-4 py-2" href="https://twitter.com/chacomigobr">
            <FaTwitter color="#475569" size={24} />
          </a>
          <a className="px-4 py-2" href="https://www.youtube.com/channel/UCZn_QEPoxB0yQHuSGIE87NQ/featured">
            <FaYoutube color="#475569" size={24} />
          </a>
        </div>
        <h2 className="text-center md:text-right px-0 md:px-2 text-gray-800 text-sm">
          @ChaComigo 2021
        </h2>
      </div>

    </div>
  )
}
