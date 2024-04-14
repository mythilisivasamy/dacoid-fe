import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className="hover:underline text-sm text-myblue font-medium bottom-0 text-right p-1">
        Skip
      </div>
      <div className="flex justify-center">
        <img
          src="images/landingimg.png"
          alt="landing-pic"
          className="w-72 h-72 object-cover"
        />
      </div>
      <div className=" font-semibold text-md text-black w-40 h-6 m-2">
        Track Your Goal
      </div>
      <div className="text-sm text-slate font-medium w-80 h-16 m-2">
        Don’t worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </div>
      <div className="flex justify-end m-2">
        <div className="p-1 rounded-full bg-gradient-to-l from-myblue to-white ">
          <Link to="android2">
            <div className="w-60 h-60 bg-myblue rounded-full p-1 border-2 border-white flex justify-center pt-4 hover:bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
