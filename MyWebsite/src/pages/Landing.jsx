import React, { useRef } from 'react';
import Navbar from '../components/Navbar';

function Landing() {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="h-screen w-full flex justify-center items-center bg-gray-200">
        <h1 className="text-black text-4xl">Hero Section</h1>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => scrollToSection(section2Ref)}>Scroll to Section 2</button>
      </section>

      {/* Section 2: Navbar and Content */}
      <section ref={section2Ref} className="h-screen w-full flex flex-col justify-center items-center bg-gray-300">
        <Navbar />
        <h2 className="text-black text-4xl">Section 2</h2>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => scrollToSection(section3Ref)}>Scroll to Section 3</button>
      </section>

      {/* Section 3: Navbar and Content */}
      <section ref={section3Ref} className="h-screen w-full flex flex-col justify-center items-center bg-gray-400">
        <Navbar />
        <h2 className="text-black text-4xl">Section 3</h2>
      </section>
    </div>
  );
}

export default Landing;