import {useState } from "react";
const useCart = (init, products) => {
    const [cartItems, setCartItems] = useState(init);
  
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
  
    // // // // //
    const removeCartItem = id => {
      setCartItems(items => items.filter((item) => item.id !== id ));
    };
  
    const handleCancel = () => {
      const res = window.confirm("are you sure?");
      if(res) {
        setCartItems([]);
      }
    }
  
    return {
      cartItems,
      addToCart,
      removeCartItem,
      handleCancel
  
    }
  }
  export default useCart;