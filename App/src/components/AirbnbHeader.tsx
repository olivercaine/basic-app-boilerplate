const AirbnbHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex items-center h-16 justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-airbnbRed font-bold text-lg">AirStay</a>
        </div>

        {/* Center - Navigation Tabs */}
        <nav className="hidden lg:flex space-x-8">
          {['Homes', 'Experiences', 'Services'].map((tab) => (
            <a
              key={tab}
              href="#"
              className="relative text-airbnbDarkText hover:text-airbnbRed font-medium py-2 px-3"
            >
              {tab}
              {/* Active underline */}
              {tab === 'Homes' && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-airbnbRed"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right - Actions */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-airbnbSecondaryText hover:text-airbnbDarkText font-medium">Become a Host</a>
          {/* Language/Currency Selector placeholder */}
          <button className="text-airbnbSecondaryText hover:text-airbnbDarkText font-medium px-2 py-1 rounded-full border border-transparent hover:border-airbnbBorder">
            EN &nbsp;|&nbsp; AUD
          </button>
          {/* User Menu Placeholder */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <img src="https://source.unsplash.com/random/32x32?person" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AirbnbHeader;