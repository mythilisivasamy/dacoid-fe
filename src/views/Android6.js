import React from 'react';
import { Link } from 'react-router-dom';

const Android6 = () => {
  return (
    <>
      <p className="font-semibold text-md font-heading mt-16 ms-4 text-center">
        What are your goals ?
      </p>

      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Weight Loss
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Muscle Gain
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Flexibility and Mobility
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            General Fitness
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Event - specific training
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="formctrl">
        <div className="flex justify-between ">
          <p className="text-xs font-text font-semibold p-4 text-gray-200">
            Mindfulness and Mental Health
          </p>
          <div className="btn-sm-blue"></div>
        </div>
      </div>
      <div className="btn">
        <Link to="../android8">
          <p className="text-sm text-white text-center font-text font-semibold pt-4">
            Confirm
          </p>
        </Link>
      </div>
    </>
  );
};

export default Android6;
