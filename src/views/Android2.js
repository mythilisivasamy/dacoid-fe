import React from 'react';
import {Link} from 'react-router-dom';

const Android2 = () => {
  return (
    <>
      <div className="hover:underline text-sm text-myblue font-medium bottom-0 text-right p-1">
        Skip
      </div>
      <div className="flex justify-center mt-16">
        <img
          src="images/cycling.png"
          alt="cycling-pic"
          className="w-352 h-234 object-cover"
        />
      </div>
      <div className=" font-semibold text-md text-black mx-2 mt-4">Get Burn</div>
      <div className="text-sm text-slate font-medium w-80 h-16 m-2">
        Let’s keep burning to achieve your goals, it hurts only temporarily, if
        you give up now you will be in pain forever
      </div>
      <div className="flex justify-end m-2">
        <div className="p-1 rounded-full bg-gradient-to-l from-myblue to-white ">
          <Link to="../android4">
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

export default Android2;
