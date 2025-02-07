const Navbar = () => {
    return (
        <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16" >
          <div className="flex justify-between items-center h-full py-4">
            <div>
              <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">CodeChallenges</p>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
    );
}

export default Navbar;