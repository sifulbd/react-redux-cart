import React, { useContext } from 'react';
import ThemeContext from "./../ThemeContext";

const Navbar = ({setKeyword}) => {
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const {dark, toggle} = useContext(ThemeContext);
    return (
      <ThemeContext.Consumer>
      {
        value => (
          <div className="navbar">
            <span>My Shop {dark ? 'Dark' : 'Light'}</span>  
            <input type="text" placeholder="Search Products" onChange={handleChange}/>
            <button onClick={toggle}>Change Color</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
};

export default Navbar;