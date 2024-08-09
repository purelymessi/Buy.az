import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 via-gray-200 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div>
          <h3 className="text-5xl font-extrabold text-purple-600">100K+</h3>
          <p className="mt-2 text-base text-gray-700">USERS</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-purple-600">500K+</h3>
          <p className="mt-2 text-base text-gray-700">CLASSIFIEDS</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-purple-600">25K+</h3>
          <p className="mt-2 text-base text-gray-700">USERS/DAY</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
