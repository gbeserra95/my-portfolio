import Head from 'next/head'
import Navbar from '../src/patterns/Navbar'
import Cover from '../src/patterns/Cover'
import About from '../src/patterns/About'
import Portfolio from '../src/patterns/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Beserra | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Cover />
        <About />
        <Portfolio />
      </main>
    </>
  )
}
