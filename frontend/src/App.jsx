import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import { Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <main className="min-h-screen w-full relative">  
          <Navbar />
          <HeroSection />
          <Features />
          <Testimonials />
          <Footer />
          </main>
        </>
        }
      
      />

      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      
    </Routes>
  )
}

export default App