const NavBar = () => {
    return (
      <footer className="bg-[#f0b267] text-black font-semibold shadow-lg px-10 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2"> Caffeine Dreams</h2>
            <p className="mb-4 text-lg italic">Delicious Coffee Made with Love to your Loved One!</p>
          </div>
          <div className="flex space-x-8">
            <a href="/about" className="hover:underline hover:text-yellow-900 transition duration-200">About Us</a>
            <a href="/menu" className="hover:underline hover:text-yellow-900 transition duration-200">Menu</a>
            <a href="/contact" className="hover:underline hover:text-yellow-900 transition duration-200">Contact Us</a>
            <a href="/custom-order" className="hover:underline hover:text-yellow-900 transition duration-200">Custom Order</a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          {/*new Date().getFullYear() -> used to get the year change according to the present year */}
          &copy; {new Date().getFullYear()} Caffeine Dreams. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default NavBar;