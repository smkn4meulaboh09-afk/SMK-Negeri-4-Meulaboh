import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { PageState } from '../types';
import { SCHOOL_NAME } from '../constants';

interface NavbarProps {
  activePage: PageState;
  setPage: (page: PageState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', value: PageState.HOME },
    { label: 'Profil Sekolah', value: PageState.PROFILE },
    { label: 'Jurusan', value: PageState.MAJORS },
    { label: 'Data Siswa & Guru', value: PageState.DATA },
    { label: 'PPDB', value: PageState.PPDB },
  ];

  const handleNavClick = (value: PageState) => {
    setPage(value);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-40 shadow-md border-b-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer font-bold text-xl"
            onClick={() => handleNavClick(PageState.HOME)}
          >
            <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
                <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="hidden sm:block text-lg leading-none">SMK NEGERI 4</span>
              <span className="hidden sm:block text-sm font-normal text-orange-200 leading-none mt-1">MEULABOH</span>
            </div>
            <span className="sm:hidden">SMKN 4</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                  activePage === item.value 
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
                    : 'text-blue-100 hover:text-orange-300 hover:bg-blue-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none hover:text-orange-400 transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                  activePage === item.value ? 'bg-orange-500 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};