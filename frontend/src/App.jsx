import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <main className="min-h-screen w-full relative">  
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App