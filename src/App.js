import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProductList from "./Products/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";
import { useEffect, useState } from "react";
import useCart from './useCart';

const App = () => {
  const [products, setProducts] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const {cartItems, addToCart, removeCartItem, handleCancel} = useCart([], products);
  useEffect(() => {
    const results = data.filter(
      (prodcut) =>
        prodcut.title.includes(keyword) || prodcut.brand.includes(keyword)
    );
    setProducts(results);
  }, [keyword]);

  return (
    <div className="App">
      <Navbar setKeyword={setKeyword}></Navbar>
      <ProductList addToCart={addToCart} products={products}></ProductList>
      <Cart cartItems={cartItems} removeCartItem={removeCartItem} handleCancel={handleCancel}></Cart>
    </div>
  );
};

export default App;
