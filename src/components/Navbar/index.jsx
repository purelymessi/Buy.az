export default function Navbar() {
  return (
    <div>
      <nav className="flex bg-gradient-to-r from-red-50 via-gray-200 to-blue-50 justify-between items-center p-6 px-4 md:px-[94px] bg-white">
        <div className="text-2xl font-bold text-[#5E2BFF]">
          Buy.<span className="text-[#E85F5C]">az</span>
        </div>
        <div className="hidden md:flex space-x-4 font-semibold">
          <a className="text-black hover:text-[#E85F5C] cursor-pointer">Home</a>
          <a className="text-black opacity-35 hover:text-opacity-75 cursor-pointer">Search</a>
          <a className="text-black opacity-35 hover:text-opacity-75 cursor-pointer">About</a>
          <a className="text-black opacity-35 hover:text-opacity-75 cursor-pointer">Contacts</a>
        </div>
      </nav>
    </div>
  );
}
