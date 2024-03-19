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
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded absolute bottom-0 mb-4" onClick={() => scrollToSection(section2Ref)}>Click me</button>
        </div>
      </section>

      {/* Section 2: Navbar and Content */}
      <section ref={section2Ref} className="h-screen w-full bg-slate-900 relative">
        <Navbar />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">I am a medicale computer science student</h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
                tumeric truffaut hexagon try-hard chambray.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-xl shadow-2xl transition-transform duration-700 hover:scale-105" alt="hero" src='https://i.imgur.com/EV8oLI9.jpeg'></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded absolute bottom-0 mb-4" onClick={() => scrollToSection(section3Ref)}>Some projects</button>
        </div> 
      </section>

      {/* Section 3: Navbar and Content */}
      <section ref={section3Ref} className="h-screen w-full bg-slate-900 relative">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-white text-4xl">Section 3</h2>
        </div>
      </section>
    </div>
  );
}

export default Landing;