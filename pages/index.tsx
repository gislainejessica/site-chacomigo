import Head from 'next/head'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import About from '../components/About'
import DownloadApp from '../components/DownloadApp'
import People from '../components/People'
import Faq from '../components/Faq'
import Store from '../components/Store'
import Footer from '../components/Footer'
import WordsRun from '../components/WordsRun'
import News from '../components/News'
import Contact from '../components/Contact'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Site ChaComigo</title>
        <link rel="icon" href="/images/chalogo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />

      <main>
        <Welcome />
        <About />
        <News />
        <People />
        <WordsRun />
        <DownloadApp />
        <Faq />
        <Store />
        <Contact />
        <Footer />
      </main>

    </div >
  )
}
