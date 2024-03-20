import React from 'react';

function Navbar() {
  const addUnderline = (event) => {
    const target = event.target;
    target.style.position = 'relative';

    const underline = document.createElement('div');
    underline.className = 'underline';
    underline.style.position = 'absolute';
    underline.style.bottom = '0';
    underline.style.left = '0';
    underline.style.width = '0';
    underline.style.height = '2px';
    underline.style.backgroundColor = '#39e75f';
    underline.style.transition = 'width 0.3s ease';
    target.appendChild(underline);

    setTimeout(() => {
      underline.style.width = '100%';
    }, 50);
  };

  const removeUnderline = (event) => {
    const underline = event.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '0';
      setTimeout(() => {
        event.target.removeChild(underline);
      }, 300);
    }
  };

  return (
    <div className="flex justify-end items-center bg-gradient-to-r from-slate-800 to-slate-900 p-3 text-white">
      <h1 className="nav-link cursor-pointer relative mx-4 text-lg" onMouseEnter={addUnderline} onMouseLeave={removeUnderline}>Linkedin</h1>
      <h1 className="nav-link cursor-pointer relative mx-4 text-lg" onMouseEnter={addUnderline} onMouseLeave={removeUnderline}>Github</h1>
      <h1 className="nav-link cursor-pointer relative mx-4 text-lg" onMouseEnter={addUnderline} onMouseLeave={removeUnderline}>Projects</h1>
      <h1 className="nav-link cursor-pointer relative mx-4 text-lg" onMouseEnter={addUnderline} onMouseLeave={removeUnderline}>About me</h1>
    </div>
  );
}

export default Navbar;
