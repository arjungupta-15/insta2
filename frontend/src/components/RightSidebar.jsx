import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SuggestedUsers from './SuggestedUsers';

const RightSidebar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div
      className="w-fit my-10 pr-32 bg-gradient-to-l from-gray-100 via-white to-gray-50 
      p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <Link to={`/profile/${user?._id}`} className="hover:opacity-90 transition-opacity duration-200">
          <Avatar>
            <AvatarImage src={user?.profilePicture} alt="post_image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1
            className="font-semibold text-sm md:text-base lg:text-lg 
            text-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
          </h1>
          <span className="text-gray-600 text-xs md:text-sm italic">
            {user?.bio || 'Bio here...'}
          </span>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-sm md:text-base lg:text-lg mb-4 text-gray-700">
          Suggested Users
        </h2>
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default RightSidebar;
