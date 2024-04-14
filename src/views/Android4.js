import React from 'react';
import { Link } from 'react-router-dom';

const Android4 = () => {
  return (
    <>
      <p className="font-semibold text-md font-heading mt-16 ms-4">
        Create an account
      </p>
      <div>
        <div className="formctrl">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            First Name
          </p>
        </div>
        <div className="formctrl">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Last Name
          </p>
        </div>
        <div className="formctrl">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Email
          </p>
        </div>
        <div className="formctrl">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Password
          </p>
        </div>
        <div className="flex justify-evenly mb-2">
          <p className="w-22 h-22 border"></p>
          <p className="text-xs font-semibold font-text m-1">
            By proceeding, I agree to all{' '}
            <span className="text-myblue underline">T&C</span> and{' '}
            <span className="text-myblue underline">Privacy Policy</span>
          </p>
        </div>
        <div className="btn">
          <p className="text-sm text-white text-center font-text font-semibold pt-4">
            Create an Account
          </p>
        </div>
        <div className="flex justify-between m-2">
          <p className="w-155 bg-gray-200 h-1 mt-2 mx-2"></p>
          <p className="text-xs font-text font-medium">Or</p>
          <p className="w-155 bg-gray-200 h-1 mt-2 mx-2"></p>
        </div>
        <div className="flex justify-center gap-4 mt-6 ">
          <div className="btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 48 48"
              className="m-2"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              />
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              />
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              />
            </svg>
          </div>
          <div className="btn-sm">
            <p className="text-lg font-bold font-text text-center">f</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium font-text text-xs m-2">
            Already have an account?{' '}
            <Link to="../android5">
              <span className="text-myblue text-xs hover:underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Android4;
