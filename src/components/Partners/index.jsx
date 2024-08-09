import React from 'react';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';

const Partners = () => {
  return (
    <div className="text-center py-8 bg-gradient-to-r from-red-50 via-gray-200 to-blue-50">
      <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <div className="p-4">
          <img src={logo1} className="h-12 w-auto"/>
        </div>
        <div className="p-4">
          <img src={logo2} className="h-12 w-auto"/>
        </div>
        <div className="p-4">
          <img src={logo3} className="h-12 w-auto"/>
        </div>
        <div className="p-4">
          <img src={logo4} className="h-12 w-auto"/>
        </div>
        <div className="p-4">
          <img src={logo5} className="h-12 w-auto"/>
        </div>
        <div className="p-4">
          <img src={logo6} className="h-12 w-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Partners;
