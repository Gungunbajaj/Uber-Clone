import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[userData,setuserData] = useState({})

  const submitHandler =(e)=>{
    e.preventDefault();
setuserData({
  email:email,
  password:password
})
    setEmail('')
    setPassword('')
      
  }
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-4 py-6 max-w-sm mx-auto">

      {/* 🔝 TOP SECTION */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Uber</h1>
<form onSubmit={(e)=>{
  submitHandler(e)
  }} >
        {/* Email */}
        <label className="text-sm text-gray-700">What's your email</label>
        <input
        required
        value={email}
        onChange={(e)=>{
setEmail(e.target.value);
        }}
          type="email"
          placeholder="email@example.com"
          className="w-full mt-2 mb-5 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
        />

        {/* Password */}
        <label className="text-sm text-gray-700 flex justify-between items-center">
          Enter Password
          <span className="text-gray-400 text-lg">•</span>
        </label>
        <input
         value={password}
        onChange={(e)=>{
setPassword(e.target.value);
        }}
          type="password"
          placeholder="password"
          className="w-full mt-2 mb-5 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
        />

        {/* Login Button */}
        <button className="w-full bg-black text-white py-3 rounded-md font-semibold mb-4 hover:bg-gray-900 transition">
          Login
        </button>
        </form>

        {/* Signup */}
        <p className="text-sm text-gray-600 text-center">
          New here?{" "}
          <Link to="/user-signup" className="text-blue-600 font-medium">
            Create new Account
          </Link>
        </p>
      </div>

      {/* 🔽 BOTTOM SECTION */}
      <div>
        <Link
        to='/captain-login'
         className="w-full flex items-center justify-center bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition">
          Sign in as Captain
        </Link>
      </div>

    </div>
  );
};

export default UserLogin;