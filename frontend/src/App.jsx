import Features from "./components/Features"
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
    </main>
  )
}

export default App