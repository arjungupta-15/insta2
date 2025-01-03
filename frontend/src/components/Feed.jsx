import React from 'react';
import Posts from './Posts';

const Feed = () => {
  return (
    <div
      className="flex-1 my-8 flex flex-col items-center pl-[20%] 
      bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 
      rounded-lg shadow-lg py-6 px-4 sm:px-8 md:px-12 lg:px-16
      hover:shadow-2xl transition-shadow duration-300"
    >
      <h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold 
        text-gray-800 mb-6 animate-bounce"
      >
        Welcome to the Feed
      </h1>
      <div className="w-full">
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
