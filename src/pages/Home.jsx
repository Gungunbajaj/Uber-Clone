import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Uber - Ride anywhere, anytime"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-8 pb-4 sm:pt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Uber
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="bg-white/95 backdrop-blur-sm rounded-t-3xl p-6 sm:p-8 pb-12 sm:pb-16 shadow-2xl border border-white/20 w-full">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Get Started with Uber
              </h2>

              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Ride anywhere. Anytime.
                <br className="sm:hidden" />
                Safe, reliable, and affordable.
              </p>

              <Link
                to="/login"
                className="group block w-full bg-black hover:bg-gray-900 transition-all duration-200 py-4 px-6 rounded-2xl text-center font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-black/20"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200 text-white">
                  Continue →
                </span>
              </Link>

              {/* Secondary CTA */}
              <p className="mt-6 text-xs text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-black font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;