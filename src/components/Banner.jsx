import React from "react";
import bikeBanner from "../assets/images/bike.png";

const Banner = () => {
  return (
    <div className="w-full h-[500px]  md:h-[627px] relative">
      <img
        src={bikeBanner}
        alt="img"
        className="w-full h-[500px] md:h-[627px] object-cover"
      />
      <div className="flex absolute left-[38px] sm:left-[100px]  lg:left-[200px] top-1/2 transform -translate-y-1/2">
        <div
          className="max-w-[300px]  md:max-w-[400px] bg-red-600  p-8 shadow-md"
        >
          <h1 className="text-white text-xl font-semibold mb-4">Know More</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />

            <div className="flex space-x-2">
              <select className="w-1/2 p-2 border border-gray-300 rounded bg-white">
                <option value="" disabled>
                  Model
                </option>
                <option value="Place1">Place 1</option>
                <option value="Place2">Place 2</option>
              </select>
              <select
                className="w-1/2 p-2 border border-gray-300 rounded bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Place
                </option>
                <option value="Place1">Place 1</option>
                <option value="Place2">Place 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className=" w-[400px] mt-[300px] ml-2 md:mt-[300px] md:ml-[90px] hidden sm:block">
          <h1 className="text-3xl font-semibold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
