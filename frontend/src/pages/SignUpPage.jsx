import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUpForm } from "../app/features/authSlice";
import axios from "axios";

const SignUpPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "applicant", // Added role with a default value, removed confirmPassword
  });

  // New states for the image file and the live preview URL
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value
    }));

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Pack the data
    const submitData = new FormData();
    submitData.append("username", formData.username);
    submitData.append("email", formData.email);
    submitData.append("password", formData.password);
    submitData.append("role", formData.role); 
    
    // FIXED: Re-added the image attachment!
    if (imageFile) {
      submitData.append("image", imageFile);
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });

      console.log("Backend response:", response.data);

      if (response.status === 201) {
        dispatch(setSignUpForm(response.data.user));
        navigate("/login");
      }

    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message);
      alert("Registration failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center py-10">
        <div className="flex items-center gap-10">
          
          {/* Left Side Banner */}
          <div className="bg-linear-to-br from-[#e6fff1] via-white to-[#edf6ff] w-120 h-152.5 shadow-xl rounded-lg p-7">
            <div className="flex flex-col items-start justify-between gap-10 h-full">
              <div className="flex items-start gap-4 flex-col">
                <h2 className="text-[#006C49] text-3xl font-bold">Career Fresh</h2>
                <h4 className="text-[#0B1C30] font-bold capitalize text-4xl">Refreshing For a personal journey</h4>
                <p className="text-gray-400 font-semibold">Join a community where opportunities are transparent, and growth is the priority. Sign up to find your next great role or discover top talent.</p>
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

          {/* Right Side Form */}
          <div className="flex flex-col justify-center w-full max-w-md h-[610px] mx-auto p-8 bg-white rounded-2xl shadow-lg">
            
            {/* Header Section */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h2>
              <p className="text-sm text-gray-500">Enter your details below to create your account.</p>
            </div>

            {/* Profile Photo Upload Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  id="profilePhoto"
                  onChange={handleImageChange}
                  className="hidden"
                  name="image"
                />
                <label
                  htmlFor="profilePhoto"
                  className="cursor-pointer flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors overflow-hidden relative"
                >
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[10px] font-semibold uppercase tracking-wider">Photo</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              
              {/* Username */}
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all"
                  />
                  {formData.username.length >= 6 && (
                    <svg className="w-5 h-5 text-green-500 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Role Dropdown */}
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C289] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="applicant">Applicant</option>
                    <option value="employer">Employer</option>
                  </select>
                  {/* Custom dropdown arrow so it matches your sleek design */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-3 py-3 bg-[#26C289] text-white font-semibold rounded-full hover:bg-[#00885D] cursor-pointer transition-colors shadow-md"
              >
                CREATE ACCOUNT
              </button>

            </form>

            {/* Footer text */}
            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account? <RouterLink to="/login" className="text-[#26C289] font-semibold hover:underline">Log in</RouterLink>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignUpPage;