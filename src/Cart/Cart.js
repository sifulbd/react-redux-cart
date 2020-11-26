import React, { useContext, useState } from 'react';
import ThemeContext from '../ThemeContext';

const CartItem = ({id, title, price, quantity, removeCartItem}) => {
    return (
        <div className="cart-item">
            <button className="close" onClick={()=>removeCartItem(id)}>X</button>
            <div className="info">
                <span>{title} * {quantity}</span>
                <span>{price * quantity}</span>
            </div>
        </div>
    );
};


const Cart = ({cartItems, removeCartItem, handleCancel}) => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [addressForm, setAddressForm] = useState('');
    const {dark} = useContext(ThemeContext);

    const hanldeCheckout = () => {
        setCheckoutOpen(status => !status);
    }
    const handleAddress = e => {
        setAddressForm(e.target.value);
    }

    const total = cartItems.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
    return (
        <div className={`cart ${dark ? 'dark' : 'light'}`}>
            <h2>Cart Items</h2>
            <div className="cart-items">
                {cartItems.length === 0 && (
                    <div className="cart-item">
                        <div className="info">
                            <span>Cart is empty</span>
                        </div>
                    </div>
                )}
                {cartItems.length !== 0 && 
                    cartItems.map(item => <CartItem {...item} removeCartItem={removeCartItem}></CartItem>)
                }
                {cartItems.length !== 0 && ( <>
                    <div className="cart-item">
                        <div className="info">
                            <span>Total</span>
                            <span>{total}</span>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="info">
                            <button onClick={handleCancel}>Clear All</button>
                            <button onClick={hanldeCheckout}>{checkoutOpen ? 'Hide' : 'Checkout'}</button>
                        </div>
                    </div>
                    </>
                )}
                {checkoutOpen && (<div className="cart-item">
                    <div className="info">
                        <input type="text" onChange={handleAddress} placeholder="Enter address"/>
                        <button style={{color: 'white', backgroundColor: !addressForm ? 'grey' : 'green'}} disabled={!addressForm}>Pay</button>
                    </div>
                </div>)}
                
            </div>

      </div>
    );
};

export default Cart;