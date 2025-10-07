import React from 'react';

const HeaderCard = () => {
  return (
    <div className=" p-10 md:p-20 bgGradient text-white">
      <h1 className=" text-4xl font-bold text-center">
        Trusted by Millions, Built for You
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-10 justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-2">
          <p className=" text-sm text-gray-300">Total Downloads</p>
          <h1 className=" text-6xl font-bold">29.6M</h1>
          <p className=" text-sm text-gray-300">21% more than last month</p>
        </div>
        <div className=" flex flex-col justify-center items-center  gap-2">
          <p className=" text-sm text-gray-300">Total Reviews</p>
          <h1 className=" text-6xl font-bold">906K</h1>
          <p className=" text-sm text-gray-300">46% more than last month</p>
        </div>
        <div className=" flex flex-col justify-center items-center  gap-2">
          <p className=" text-sm text-gray-300">Active Apps</p>
          <h1 className=" text-6xl font-bold">132+</h1>
          <p className=" text-sm text-gray-300">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
