import React from 'react';

const Product = ({id, title, brand, price, image_url, addToCart}) => {    
    return (
        <div className="product">
            <img src={image_url} alt=""/>
            <div className="product-title">
                <span>{title}</span>
                <span>{brand}</span>
            </div>
            <div className="actions">
                <span>${price}</span>
                <button onClick={()=> addToCart(id)} className='btn'>Add to cart</button>
            </div>
        </div>
    );
};

const ProductList = ({products, addToCart}) => {    
    return (
        <div className="product-list">
            {products.map(pd => (<Product {...pd} key={pd.id} addToCart={addToCart}></Product>))}  
      </div>
    );
};

export default ProductList;