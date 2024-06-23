import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuBar = ({ toggleNavbar, setToggleNavbar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academic', path: '/academic', dropdownItems: [{ name: 'Undergrad', path: '/undergrad' }, { name: 'Postgrad', path: '/postgrad' }] },
    { name: 'Notice', path: '/notice' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Research', path: '/research' },
    { name: 'Peoples', path: '/peoples' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => {
    setToggleNavbar(false);
  };

  return (
    <>
      <div className="mb-4 w-[80vw] mx-auto md:flex gap-0 flex-row justify-between py-0 hidden">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            itemName={menuItem.name}
            isActive={currentPath === menuItem.path}
            to={menuItem.path}
            dropdownItems={menuItem.dropdownItems}
            toggleNavbar={toggleNavbar}
            setToggleNavbar={setToggleNavbar}
            closeMobileMenu={closeMobileMenu}
          />
        ))}
      </div>

      <div className={`absolute bg-white flex md:hidden flex-col  py-10 w-1/2 z-20 ${toggleNavbar ? "right-0 duration-300 shadow-xl" : "-right-1/2 duration-300 hidden"}`}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            itemName={menuItem.name}
            isActive={currentPath === menuItem.path}
            to={menuItem.path}
            dropdownItems={menuItem.dropdownItems}
            toggleNavbar={toggleNavbar}
            setToggleNavbar={setToggleNavbar}
            mobileView={true}
            closeMobileMenu={closeMobileMenu}
          />
        ))}
      </div>
    </>
  );
};

const MenuItem = ({ itemName, isActive, to, dropdownItems, toggleNavbar, setToggleNavbar, mobileView = false, closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);

    if (isDropdownOpen  && mobileView) {
      navigate("/academic")
      closeMobileMenu();
    }
  };
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (dropdownItems && mobileView) {
      e.preventDefault();
      handleToggleDropdown(e);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <div className="w-full relative z-20">
      <Link
        className={`text-dark block py-4 px-10 hover:bg-dark hover:text-white w-full cursor-pointer ${isActive ? 'font-bold bg-dark text-white' : ''}`}
        onMouseEnter={!mobileView ? handleToggleDropdown : undefined}
        onMouseLeave={!mobileView ? handleToggleDropdown : undefined}
        onClick={handleClick}
        to={to}
      >
        {itemName}
      </Link>

      {dropdownItems && (
        <div
          className={`md:absolute w-full left-0 bg-blue-900 text-white text-center divide-y ${isDropdownOpen ? 'block' : 'hidden'}`}
          onMouseEnter={!mobileView ? () => setDropdownOpen(true) : undefined}
          onMouseLeave={!mobileView ? () => setDropdownOpen(false) : undefined}
        >
          {dropdownItems.map((item, index) => (
            <Link key={index} to={item.path} className="block px-4 py-4 hover:bg-blue-800" onClick={closeMobileMenu}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
