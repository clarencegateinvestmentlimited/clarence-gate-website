import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) closeMenu();
    };

    const handleClickOutside = (e) => {
      const target = e.target;
      const navContainer = document.getElementById("navContainer");
      const hamburger = document.getElementById("hamburger");

      if (
        isMenuOpen &&
        navContainer &&
        !navContainer.contains(target) &&
        hamburger &&
        !hamburger.contains(target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-[6%] py-7 bg-[#010101]/90 backdrop-blur-[12px] z-[1000000] border-b border-white/5">
      {/* Logo */}
      <Link to="/" className="logo z-[1000002]">
        <img
          src="/Images/Caladium-Logo_5-2-1-1536x457.png"
          alt="Logo"
          className="h-[22px] md:h-[26px] w-auto "
        />
      </Link>

      {/* Hamburger */}
      <div
        id="hamburger"
        className={`hamburger w-[24px] h-[16px] relative cursor-pointer flex flex-col justify-between z-[1000002] transition-all duration-500 
          ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"} group`}
        onClick={toggleMenu}
      >
        <span className="block h-[1.5px] w-full bg-white rounded-full transition-all duration-500 group-hover:w-[12px]"></span>
        <span className="block h-[1.5px] w-full bg-[#94257a] rounded-full transition-all duration-500"></span>
        <span className="block h-[1.5px] w-[18px] bg-white rounded-full transition-all duration-500 group-hover:w-full self-end"></span>
      </div>

      {/* NAV OVERLAY - Now with limited width and right alignment */}
      <div
        id="navContainer"
        className={`nav-container fixed top-0 right-0 w-full md:w-[450px] 
          bg-[#0a0a0a] border-l border-b border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-[1000001]
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{
          boxShadow: "-10px 15px 40px rgba(0,0,0,0.8)",
          borderBottomLeftRadius: "20px" // Adds a nice premium curve to the corner
        }}
      >
        <div className="relative p-[50px_30px] md:p-[60px_50px]">
          
          <button
            id="closeBtn"
            className="close-btn absolute top-[20px] left-[25px] w-[32px] h-[32px] cursor-pointer flex items-center justify-center group"
            onClick={closeMenu}
          >
            <div className="relative w-full h-full flex items-center justify-center">
                <span className="absolute w-[18px] h-[1px] bg-white/40 rotate-45 group-hover:bg-[#94257a] transition-all"></span>
                <span className="absolute w-[18px] h-[1px] bg-white/40 -rotate-45 group-hover:bg-[#94257a] transition-all"></span>
            </div>
          </button>

          <div className="mt-4">
            <h2 className="text-zinc-600 text-[8px] font-bold uppercase tracking-[0.6em] mb-6">
              Menu
            </h2>

            <nav className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Service" },
                { path: "/contact", label: "Contact Us" },
                { path: "/blogs", label: "Blogs" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`relative text-white no-underline text-[18px] md:text-[22px] font-sans font-medium transition-all duration-300 flex items-center group
                    ${location.pathname === item.path ? "text-white" : "text-white/30 hover:text-white"}`}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                    {location.pathname === item.path && (
                      <span className="w-1 h-1 rounded-full bg-[#94257a] shadow-[0_0_8px_#94257a]" />
                    )}
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Micro Footer for the menu */}
            {/* <div className="mt-12 pt-6 border-t border-white/5 flex flex-col gap-2">
              <p className="text-[7px] tracking-[0.3em] text-zinc-700 uppercase">CALADIUM — © 2024</p>
              <p className="text-[7px] tracking-[0.3em] text-[#94257a] uppercase font-bold">Research. Data. Scale.</p>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;