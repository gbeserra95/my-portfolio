import Metatags from '../src/components/Metatags'
import Navbar from '../src/patterns/Navbar'
import Cover from '../src/patterns/Cover'
import About from '../src/patterns/About'
import Portfolio from '../src/patterns/Portfolio'
import Contact from "../src/patterns/Contact"
import Footer from "../src/patterns/Footer"

export default function Home() {
  return (
    <>
      <Metatags />
      <Navbar />
      <main>
        <Cover />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
