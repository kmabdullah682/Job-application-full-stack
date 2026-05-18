import { BadgeCheck  } from "lucide-react"

const Testimonials = () => {
  return (
      <section className="h-[205vh]  bg-[#F8F9FF] p-20">
          <div className="flex items-center flex-col gap-10 place-self-center">
              <div className="bg-[#6FFBBE] px-3 h-10 w-auto py-1 rounded-2xl text-[#006C49] flex items-center gap-2">
                  <BadgeCheck />
                  <p className="text-[#006C49] font-semibold">Verified Success Stories</p>
              </div>
              <h3 className="text-5xl font-bold text-[#213145] text-center">Success Stories from our <br /> Community</h3>
              <p className="text-center text-[#68788F]">Join thousands of professionals who have accelerated their careers and <br /> top-tier companies that found their perfect match through CareerFresh's <br /> refreshing approach to talent discovery.</p>

              <div className="flex items-center gap-20 mt-20">
                  
                  <div className="flex items-center gap-2 flex-col">
                      <p className="text-4xl font-bold text-green-800">12K+</p>
                      <p className="capitalize">job secured</p>
                  </div>

                  <div className="flex items-center gap-2 flex-col">
                      <p className="text-4xl font-bold text-blue-800">98%</p>
                      <p className="capitalize">satisfaction rate</p>
                  </div>

                  <div className="flex items-center gap-2 flex-col">
                      <p className="text-4xl font-bold text-green-800">450+</p>
                      <p className="capitalize">partner companies</p>
                  </div>

              </div>


              <div className="mt-20 grid grid-cols-3 gap-15">
                  <div className="bg-whtie shadow-xl h-60 w-100 rounded-xl p-5" >
                      <div className="flex items-center gap-4 mb-3">
                          <img src="https://images.pexels.com/photos/8217533/pexels-photo-8217533.jpeg" alt="employee image" className="object-cover w-15 h-15 rounded-full" />
                          <div className="flex items-start flex-col">
                              <h4 className="text-lg font-semibold">Adam Alam</h4>
                              <p className="text-gray-700">Senior Software Engineer</p>
                          </div>
                      </div>
                      <p className="italic text-gray-600">
                          "CareerFresh completely changed my job search experience. The clarity of the job descriptions and the seamless application process helped me land a role at my dream tech startup within just three weeks."
                      </p>
                  </div>

                  <div className="bg-whtie shadow-xl h-60 w-100 rounded-xl p-5" >
                      <div className="flex items-center gap-4 mb-3">
                          <img src="https://images.pexels.com/photos/17565396/pexels-photo-17565396.jpeg" alt="employee image" className="object-cover w-15 h-15 rounded-full" />
                          <div className="flex items-start flex-col">
                              <h4 className="text-lg font-semibold">Alex Carlsen</h4>
                              <p className="text-gray-700">HR & Human Resource Manager</p>
                          </div>
                      </div>
                      <p className="italic text-gray-600">
                          "As an employer, finding qualified talent used to be an exhausting process. CareerFresh's matching algorithm actually works. "
                      </p>
                  </div>

                  <div className="bg-whtie shadow-xl h-60 w-100 rounded-xl p-5" >
                      <div className="flex items-center gap-4 mb-3">
                          <img src="https://images.pexels.com/photos/5191346/pexels-photo-5191346.jpeg" alt="employee image" className="object-cover w-15 h-15 rounded-full" />
                          <div className="flex items-start flex-col">
                              <h4 className="text-lg font-semibold">Michal Aslow</h4>
                              <p className="text-gray-700">Product Manager</p>
                          </div>
                      </div>
                      <p className="italic text-gray-600">
                          "The interface is so clean it actually makes looking for a job enjoyable. I appreciated the progress tracking feature that kept me updated on where I stood with every application. "
                      </p>
                  </div>

              </div>

          </div>

          <div className="mt-30 place-self-center bg-[#213145] w-full h-75 p-10 rounded-xl">
              <div className="flex items-center flex-col justify-center gap-6 text-center">
                  <h4 className="capitalize text-white font-bold text-4xl">Join Them today</h4>
                  <p className="text-white">Your next professional milestone is closer than you think. <br /> Create your profile and start discovering opportunities tailored just for you.</p>
                  <button type="button" className="bg-[#00A572] w-2/4 px-5 py-4 rounded-2xl text-xl font-semibold border-black transition-colors duration-500 hover:bg-[#00885D] cursor-pointer mt-5">Create Free Profile</button>
              </div>
          </div>

      </section>
  )
}

export default Testimonials