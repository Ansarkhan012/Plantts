import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ChevronDownIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import { BiLogOut } from 'react-icons/bi';
import { FaLeaf } from 'react-icons/fa';
import { useCart } from '../context/CartContent';

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 font-medium rounded-md transition duration-200 ${
        isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
      }`
    }
  >
    {label}
  </NavLink>
);

const DropdownItem = ({ to, label, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-green-50 ${
        isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const user = JSON.parse(localStorage.getItem('email'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('Logged out successfully!');
    window.location.href = '/';
  };

  const plantIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.395 2.553a1 1 0..." clipRule="evenodd" />
    </svg>
  );

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-sm">
            <FaLeaf />
          </div>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Plantt</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItem to="/" label="Home" />
          <div className="relative group">
            <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 font-medium rounded-md hover:text-green-600">
              <span>Shop</span>
              <ChevronDownIcon className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <DropdownItem to="/indoor" label="Indoor Plants" icon={plantIcon} />
              <DropdownItem to="/outdoor" label="Outdoor Plants" icon={plantIcon} />
              <DropdownItem to="/accessories" label="Accessories" icon={plantIcon} />
              <div className="border-t my-2" />
              <DropdownItem to="/shop" label="All Products" icon={plantIcon} />
            </div>
          </div>
          <NavItem to="/about" label="About" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact" label="Contact" />
      
        </nav>

        {/* Icons  */}
        <div className="flex items-center space-x-6">
          {user ? (
            <button
              onClick={handleLogout}
              className="group relative text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <BiLogOut className="w-5 h-5" />
              <span className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-red-100 text-red-600 px-2 py-1 rounded transition-opacity duration-200">
                Logout
              </span>
            </button>
          ) : (
            <Link
              to="/login"
              className="group relative text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              <UserIcon className="w-5 h-5" />
              <span className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-green-100 text-green-600 px-2 py-1 rounded transition-opacity duration-200">
                Account
              </span>
            </Link>
          )}

          <Link
            to="/cart"
            className="group relative text-gray-600 hover:text-green-600"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQty}
            </span>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
              Cart
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-green-600"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow">
          <div className="px-4 py-4 space-y-2">
            <NavItem to="/" label="Home" />
            <button
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              <span>Shop</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileShopOpen && (
              <div className="ml-4 space-y-1">
                <NavItem to="/indoor" label="Indoor Plants" />
                <NavItem to="/outdoor" label="Outdoor Plants" />
                <NavItem to="/accessories" label="Accessories" />
                <NavItem to="/shop" label="All Products" />
              </div>
            )}
            <NavItem to="/about" label="About" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/contact" label="Contact" />
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
