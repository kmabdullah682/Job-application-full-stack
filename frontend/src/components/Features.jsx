import { SearchCheck , LayoutDashboard , MousePointerClick , ChartNoAxesCombined , Bookmark  , IdCardLanyard  } from "lucide-react"

const Features = () => {
  return (
    <section className="h-[130vh] bg-[#ffffff] p-20">
      <div className="flex items-center gap-6 flex-col">
        <h3 className="capitalize text-center text-3xl font-semibold text-[#213145]">powerful featuring for modern hiring</h3>
        <p className="text-[#87948C]">Everything you need to navigate the modern job market with clarity.</p>
      </div>
      <div className="p-20 grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#6FFBBE] rounded-xl text-[#003824]"><SearchCheck size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">Seamless Job Search</h4>
              <p>Advanced filters and AI-driven recommendations tailored to your unique stack.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#89CEFF] rounded-xl text-[#006591]"><LayoutDashboard size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">Role-Based Dashboards</h4>
              <p>Specific views for candidates and recruiters to keep workflows separated and clean.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#6FFBBE] rounded-xl text-[#003824]"><MousePointerClick size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">One-Click Applications</h4>
              <p>Apply instantly with your verified profile. No more repetitive form-filling fatigue.</p>
          </div>
          
          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#89CEFF] rounded-xl text-[#006591]"><ChartNoAxesCombined size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">Application Tracking</h4>
              <p>Visualize your journey from submitted to hired with our sleek pipeline tracker.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#6FFBBE] rounded-xl text-[#003824]"><Bookmark size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">Save for Later</h4>
              <p>Curate your favorite roles and companies to revisit when the time is right.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-95">
            <div className="w-14 h-14 flex items-center justify-center bg-[#89CEFF] rounded-xl text-[#006591]"><IdCardLanyard size={30} /></div>
              <h4 className="text-xl font-semibold text-[#3E4943]">Employer Job Management</h4>
              <p>Powerful CRM tools for hiring managers to post, screen, and interview talent effortlessly.</p>
          </div>

      </div>
    </section>
  )
}

export default Features
