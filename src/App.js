import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import ProductList from "./Products/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const results = data.filter(
      (prodcut) =>
        prodcut.title.includes(keyword) || prodcut.brand.includes(keyword)
    );
    setProducts(results);
  }, [keyword]);

  const addToCart = (id) => {
    const item = products.find((product) => product.id === id);
    setCartItems((items) => {
      const itemIndex = items.findIndex((currentItem) => currentItem.id === id);
      if (itemIndex === -1) {
        return [
          ...items,
          {
            ...item,
            quantity: 1,
          },
        ];
      } else {
        return items.map((currentItem) =>
          currentItem.id === id
            ? {
                ...item,
                quantity: parseInt(currentItem.quantity) + 1,
              }
            : currentItem
        );
      }
    });
  };

  const removeCartItem = id => {
    setCartItems(items => items.filter((item) => item.id !== id ));
  };

  const handleCancel = () => {
    const res = window.confirm("are you sure?");
    if(res) {
      setCartItems([]);
    }
  }

  return (
    <div className="App">
      <Navbar setKeyword={setKeyword}></Navbar>
      <ProductList addToCart={addToCart} products={products}></ProductList>
      <Cart cartItems={cartItems} removeCartItem={removeCartItem} handleCancel={handleCancel}></Cart>
    </div>
  );
};

export default App;
