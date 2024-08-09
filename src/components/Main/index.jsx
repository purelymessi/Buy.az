export default function Main() {
  return (
    <div className='flex items-center justify-center flex-col bg-gradient-to-r from-red-50 via-gray-200 to-blue-50 px-4 py-16'>
      <div className="max-w-[1040px] text-center gap-2">
        <h1 className='font-semibold  text-[76px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          Find anything that you want, in one <span className="text-[#5E2BFF]">website!</span>
        </h1>
        <div className="py-8 flex justify-center gap-4">
          <button className="py-3 px-6 sm:px-8 md:px-10 rounded-full bg-[#5E2BFF] text-white hover:bg-[#4C1D95] transition-colors duration-300">
            Get Started!
          </button>
          <button className="py-3 px-6 sm:px-8 md:px-10 rounded-full bg-[#E85F5C] text-white hover:bg-[#BF5C5A] transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
