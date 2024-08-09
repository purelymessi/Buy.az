import React from 'react';
import footerlogo from '../../assets/footer logo.png';

function Footer() {
  return (
    <footer className="bg-gray-100 py-20 border-t-2 border-gray-300  h-[500px]">
      <div className="container mx-auto flex flex-col items-start px-4 lg:px-16">
        <div className="w-full lg:w-1/5 flex flex-col items-start">
          <img src={footerlogo} alt="Logo" className="w-[124px] h-[35px] mb-4" />
          <p className="text-gray-500 text-lg">
            Babek Pr. 14.<br />
            Baku, Azerbaijan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
