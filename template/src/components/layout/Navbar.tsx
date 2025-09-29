'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-black bg-opacity-50 backdrop-blur-sm p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-xl sm:text-2xl font-bold">
                        The Golden Fork
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About Us
                        </Link>
                        <Link href="/menu" className="text-gray-300 hover:text-white transition-colors">
                            Our Menu
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-gray-300 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={closeMenu}
                    />
                    
                    {/* Menu Panel */}
                    <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <Link 
                                    href="/" 
                                    className="text-black text-xl font-bold"
                                    onClick={closeMenu}
                                >
                                    The Golden Fork
                                </Link>
                                <button
                                    onClick={closeMenu}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-1 flex flex-col justify-center px-6 space-y-8">
                                <Link 
                                    href="/" 
                                    className="text-gray-700 hover:text-black text-2xl font-medium transition-colors"
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/about" 
                                    className="text-gray-700 hover:text-black text-2xl font-medium transition-colors"
                                    onClick={closeMenu}
                                >
                                    About Us
                                </Link>
                                <Link 
                                    href="/menu" 
                                    className="text-gray-700 hover:text-black text-2xl font-medium transition-colors"
                                    onClick={closeMenu}
                                >
                                    Our Menu
                                </Link>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">
                                    Est. Melbourne 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;