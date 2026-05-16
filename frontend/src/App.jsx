import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="min-h-screen w-full relative">  
      <Navbar />
      <HeroSection />
    </main>
  )
}

export default App