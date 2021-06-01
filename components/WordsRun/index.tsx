import Image from 'next/image'
import { motion } from "framer-motion"

export default function WordsRun() {
  return (
    <div className="flex justify-center items-center bg-white w-full p-20 md:p-36">

      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Sucesso</span>
            <span>consiste em ir de fracasso em fracasso sem perder o entusiasmo</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>"Winston Churchill"</div>
        </div>
      </div>

    </div>
  )
}
