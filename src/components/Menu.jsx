import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Icon */}
      <div onClick={toggleMenu} className="cursor-pointer z-10">
        <motion.div
          className="bg-black h-1 w-8 mb-2"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        />
        <motion.div
          className="bg-black h-1 w-8 mb-2"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div
          className="bg-black h-1 w-8 mb-2"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        />
      </div>

      {/* Menu content */}
      <motion.div
        className="absolute top-12 left-0 bg-pink-200 p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <ul>
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
          <li className="p-2">Services</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MenuIcon;
