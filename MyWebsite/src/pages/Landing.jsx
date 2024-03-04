import React, { useRef } from 'react';
import Navbar from '../components/Navbar';

function Landing() {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="h-screen w-full bg-slate-900 relative">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-6xl">Hi, i'm Claudius!</h1>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded absolute bottom-0 mb-4" onClick={() => scrollToSection(section2Ref)}>Scroll to Section 2</button>
        </div>
      </section>

      {/* Section 2: Navbar and Content */}
      <section ref={section2Ref} className="h-screen w-full bg-gray-300 relative">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-black text-4xl">Section 2</h2>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded absolute bottom-0 mb-4" onClick={() => scrollToSection(section3Ref)}>Scroll to Section 3</button>
        </div>
      </section>

      {/* Section 3: Navbar and Content */}
      <section ref={section3Ref} className="h-screen w-full bg-gray-400 relative">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-black text-4xl">Section 3</h2>
        </div>
      </section>
    </div>
  );
}

export default Landing;