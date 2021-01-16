import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProductList from "./Products/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";
import { useEffect, useState } from "react";
import useCart from './useCart';
import ThemeContext from './ThemeContext';

import TextLoop from 'react-text-loop';


const App = () => {
  const [products, setProducts] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const [dark, setDark] = useState(true);
  const {cartItems, addToCart, removeCartItem, handleCancel} = useCart([], products);
  useEffect(() => {
    const results = data.filter(
      (prodcut) =>
        prodcut.title.includes(keyword) || prodcut.brand.includes(keyword)
    );
    setProducts(results);
  }, [keyword]);  

  const toggleDark = () => {
    setDark(isDark => !isDark)
<<<<<<< HEAD
  }


=======
  } 
>>>>>>> 2043dd88ee32dac6f298c077733f10b0b6426ecd
  return (

    <ThemeContext.Provider value={{dark: dark, toggle: toggleDark }}>
      <div className={`App ${ dark ? 'dark' : 'light'}`}>
        <Navbar setKeyword={setKeyword}></Navbar>
        <div>
          <TextLoop>
            <span>Trade fast</span>
            <span>another</span>
            <span>ano no anotherß</span>
          </TextLoop>
        </div>
        <ProductList addToCart={addToCart} products={products}></ProductList>
        <Cart cartItems={cartItems} removeCartItem={removeCartItem} handleCancel={handleCancel}></Cart>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
