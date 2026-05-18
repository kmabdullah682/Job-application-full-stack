

const Footer = () => {
  return (
    <footer className="h-[30vh] p-10">
      <div className="flex items-start justify-between">
        <div className="flex item-start flex-col gap-1">
          <h5 className="text-3xl font-bold text-[#006C49]">Carrer Fresh</h5>
          <p className="text-gray-600 font-semibold">Refreshing the way the world finds work.<br />Designed for clarity, built for growth.</p>
        </div>
        
        <div className="flex item-start gap-10">

          <div className="flex gap-2 text-center flex-col">
          <h4 className="text-xl font-bold">Company</h4>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="flex gap-2 text-center flex-col">
          <h4 className="text-xl font-bold">Legal</h4>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Resources</a>
          </div>
          
        </div>
      </div>

      <p className="self-end text-gray-700 font-semibold">© 2024 CareerFresh. Refresh your professional journey.</p>

    </footer>
  )
}

export default Footer