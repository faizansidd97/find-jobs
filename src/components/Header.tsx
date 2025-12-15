import React, { useState } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  FileText,
  Calendar,
  Layout,
  X,
  Menu,
} from "lucide-react";
import user from "../assests/img/Oval.webp";
import logo from "../assests/img/logo.webp";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Find Jobs", active: true },
    { label: "Top Companies", active: false },
    { label: "Job Tracker", active: false },
    { label: "My Calendar", active: false },
    { label: "Documents", active: false },
    { label: "Messages", active: false },
    { label: "Notifications", active: false },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Left: Logo and Nav */}
        <div className="max-w-7xl px-4">
          <div className="flex h-16 gap-md-4 gap-2 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm font-medium ${
                    item.active
                      ? "text-primary-700"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-gray-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Background Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 xl:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        {open && (
          <div className="absolute left-0 right-0 top-16 bg-white shadow-lg xl:hidden">
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm font-medium ${
                    item.active
                      ? "text-primary-700"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Right: Search, Actions, Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex relative group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>

          <button className="hidden sm:block bg-primary-700 hover:bg-primary-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Resume Builder
          </button>

          <div className="w-10 h-10 rounded-full border border-gray-200 p-0.5 cursor-pointer">
            <img
              src={user}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
