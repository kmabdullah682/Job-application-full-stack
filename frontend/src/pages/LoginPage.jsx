import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", 
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isEmail = formData.identifier.includes("@");
    
    const loginPayload = {
      password: formData.password,
      ...(isEmail ? { email: formData.identifier } : { username: formData.identifier })
    };

    console.log("Ready to send to backend:", loginPayload);

    try {

      const response = await axios.post("http://localhost:3000/api/auth/login", loginPayload, {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      }
    });

    if (response.status === 200) {
      console.log("Login successful! Response data:", response.data);
      navigate("/dashboard");
    }

    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      alert("Login failed: " + (error.response ? error.response.data.message : error.message));
    }
    
    
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center py-10">
        <div className="flex items-center gap-10">
          
          {/* Left Side Banner (Slightly shorter for the login page, updated text) */}
          <div className="bg-linear-to-br from-[#e6fff1] via-white to-[#edf6ff] w-120 h-[520px] shadow-xl rounded-lg p-7">
            <div className="flex flex-col items-start justify-between gap-10 h-full">
              <div className="flex items-start gap-4 flex-col">
                <h2 className="text-[#006C49] text-3xl font-bold">Career Fresh</h2>
                <h4 className="text-[#0B1C30] font-bold capitalize text-4xl">Welcome Back to your journey</h4>
                <p className="text-gray-400 font-semibold">Pick up right where you left off. Discover new opportunities, track your applications, and keep growing.</p>
              </div>

              <div className="flex item-start gap-2 flex-col">
                <div className="avatar-group -space-x-6">
                  <div className="avatar">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoFaTxrg3YfNDTnl-OFT5iqteWZ_0w0VVD5bvqdKby9tz5R0B0X-gUaY&s" alt="user" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodwy8NZV3qqsXMSSu-l3_24BDeen8F0dRvFZ9DoY3s5sxzS24FHRbaQ&s" alt="user" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD68r9a1r_kF_TZ0xCIl0jD4ebyEEAH2LE2SmQmY5kPCQzr2E89bJbYA&s" alt="user" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-W0qvxLgpmk6qaKDLxL6HZ7ruo9HMNStfIH9Ejv71mBEGOEZBRNjAM30&s" alt="user" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-semibold">Join over 10,000 professionals who have found their dream jobs.</p>
              </div>
            </div>
          </div>

          {/* Right Side Login Form */}
          <div className="flex flex-col justify-center w-full max-w-md h-[520px] mx-auto p-8 bg-white rounded-2xl shadow-lg">
            
            {/* Header Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-sm text-gray-500">Enter your credentials to access your account.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Username OR Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Username or Email</label>
                <div className="relative">
                  <input
                    type="text"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="johndoe or john@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-4 py-3.5 bg-[#26C289] text-white font-bold rounded-full hover:bg-[#00885D] cursor-pointer transition-colors shadow-md text-lg"
              >
                SIGN IN
              </button>

            </form>

            {/* Footer text */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account? <a href="/sign-up" className="text-[#26C289] font-bold hover:underline">Sign up</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;