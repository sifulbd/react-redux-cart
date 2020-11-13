import React from 'react';

const Navbar = ({setKeyword}) => {
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
    return (
        <div className="navbar">
          <span>My Shop</span>  
          <input type="text" placeholder="Search Products" onChange={handleChange}/>
        </div>
    );
};

export default Navbar;