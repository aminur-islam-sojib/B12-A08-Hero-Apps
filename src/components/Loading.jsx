import React from 'react';

const Loading = () => {
  return (
    <div className="px-10 py-20">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );
};

export default Loading;
