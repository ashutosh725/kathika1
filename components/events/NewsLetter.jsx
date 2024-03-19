import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#fefbf5] py-10  text-center">
      <h2 className="mb-4.5 lg:text-[43px] text-[22px] font-dMSerifDisplay font-semibold  leading-[62px]  text-[#292F36] dark:text-white">Dilli ki dil wali Newsletter</h2>
      <p className="text-[#4D5053]  font-jost font-[400] lg:text-[18px] text-[15px]  tracking-[0.22px] leading-[33px]">
        Do drop in your email so that we can share with you our latest
        exhibitions, upcoming events and a whole lot of Old Delhi memories.
      </p>
      <form action="# " className=" flex  justify-center">
        <div className="relative my-4 w-[400px]">
          <input
            type="text"
            placeholder="Email address"
            className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
          />

          <button
            aria-label="signup to newsletter"
            className="absolute right-0 p-4"
          >
            <svg
              className="fill-[#757693] hover:fill-primary dark:fill-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_1487)">
                <path
                  d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_48_1487">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </form>{" "}
      <div className="mb-10 flex  justify-center">
        <button
          aria-label="get started button"
          className="flex rounded-lg bg-black px-8 py-3 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[#4D5053]  font-jost font-[400] lg:text-[18px] text-[15px]  tracking-[0.22px] leading-[33px]">
        Join our mailing list to stay up to date on our progress and important
        announcements.
      </p>
    </div>
  );
};

export default NewsLetter;
