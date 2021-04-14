import Image from 'next/image'
import { motion } from "framer-motion"

export default function WordsRun() {
  return (
    <div className="flex justify-center items-center bg-green-100 w-full p-20 md:p-36">

      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Chacomigo</span>
            <span>aprender nunca foi tão fácil</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Entre nessa!</div>
        </div>
      </div>

    </div>
  )
}
