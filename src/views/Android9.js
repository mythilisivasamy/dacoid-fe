import React from 'react';

const Android9 = () => {
  return (
    <>
      <div className="flex justify-between mt-12 ms-2">
        <div className="btn-sm-gray ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" font-medium text-xs"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <p className="font-semibold text-md font-heading grow text-center">
          Workout Schedule
        </p>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" font-medium text-xs w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </p>
        <p>Feb 2024</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="font-medium text-xs w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
      <div className="flex justify-evenly mt-3">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-text font-medium">Sun</p>
          <p className="text-center text-lg font-bold">5</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-text font-medium">Mon</p>
          <p className="text-center text-lg font-bold">6</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-text font-medium">Tue</p>
          <p className="text-center text-lg font-bold">7</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-text font-medium">Wed</p>
          <p className="text-center text-lg font-bold">8</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-text font-medium">Thu</p>
          <p className="text-center text-lg font-bold">9</p>
        </div>
      </div>
      <div className="relative">
        <p class="time">06:00 AM</p>
        <hr />
        <p class="time">07:00 AM</p>
        <hr />
        <p class="time">08:00 AM</p>
        <hr />
        <p class="time">08:00 AM</p>
        <hr />
        <p class="time">09:00 AM</p>
        <hr />
        <p class="time">10:00 AM</p>
        <hr />
        <p class="time">12:00 AM</p>
        <hr />
        <p class="time">01:00 PM</p>
        <hr />
        <p class="time">02:00 PM</p>
        <hr />
        <p class="time">03:00 PM</p>
        <hr />
        <p class="time">04:00 PM</p>
        <hr />
        <p class="time">05:00 PM</p>
        <hr />
        <div className="time-btn absolute top-16 left-40">
          <p className="text-xs text-white font-text font-medium text-center p-1">
            Ab Workout, 7:30am
          </p>
        </div>
        <div className="time-btn absolute top-40 left-28">
          <p className="text-xs text-white font-text font-medium text-center p-1">
            Upperbody Workout, 9am
          </p>
        </div>
        <div className="time-btn absolute top-80 left-28">
          <p className="text-xs text-white font-text font-medium text-center p-1">
            Lowerbody Workout, 3pm
          </p>
        </div>
        <div className="flex justify-between m-4">
          <div className="flex gap-8">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </p>
          </div>
          <div className="flex gap-8">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Android9;
