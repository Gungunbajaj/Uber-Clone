import React from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[firstName,setfirstName]=useState('')
  const[lastName,constlastName]=useState('')
  const[captainData,setcaptainData]=useState({})
  const submitHAnder=(e)=>{
    e.preventDefault()
    setuserData({
      username:{
        firstName:firstname,
        lastName:lastname
      },
      email:email,
      password:password

    })
    setemail('')
    setfirstName('')
    setlastName('')
    setpassword('')
  }
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-4 py-6 max-w-sm mx-auto">

      {/* 🔝 TOP SECTION */}
      <div>
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Uber <span>→</span>
        </h1>
<form onSubmit={(e)=>{
  submitHandler(e)
}}></form>
        {/* Name */}
        <label className="text-sm text-gray-700">What's your name</label>
        <div className="flex gap-3 mt-2 mb-5">
          <input
          required
          value={firstName}
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
          onChange={(e)=>{
            setfirstName(e.target.value)
          }}
          />
          <input
          required
          value={lastName}
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
          onChange={(e)=>{
            setlastName(e.target.value)
          }} 
          />
        </div>

        {/* Email */}
        <label className="text-sm text-gray-700">What's your email</label>
        <input
        required
        value={email}
          type="email"
          placeholder="email@example.com"
          className="w-full mt-2 mb-5 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
        onChange={(e)=>{
            setemail(e.target.value)
          }}
        />

        {/* Password */}
        <label className="text-sm text-gray-700">Enter Password</label>
        <input
        required
        value={password}
          type="password"
          placeholder="password"
          className="w-full mt-2 mb-5 px-4 py-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-black"
        onChange={(e)=>{
            setpassword(e.target.value)
          }}
        />

        {/* Signup Button */}
        <button className="w-full bg-black text-white py-3 rounded-md font-semibold mb-4 hover:bg-gray-900 transition">
          Create Captain Account
        </button>

        {/* Login link */}
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600 font-medium">
            Login here
          </Link>
        </p>
      </div>

      {/* 🔽 BOTTOM BUTTON */}
      <div className="pb-3">
        <Link
          to="/user-signup"
          className="block w-full bg-orange-500 text-white py-3 rounded-md font-semibold text-center hover:bg-orange-600 transition"
        >
          Sign up as User
        </Link>
      </div>

    </div>
  );
};

export default CaptainSignup;