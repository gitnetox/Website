import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-gray-100 w-full py-4">
      <button className="mx-4 bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
      <button className="mx-4 bg-blue-500 text-white px-4 py-2 rounded">Button 2</button>
      <button className="mx-4 bg-blue-500 text-white px-4 py-2 rounded">Button 3</button>
    </nav>
  );
}

export default Navbar;