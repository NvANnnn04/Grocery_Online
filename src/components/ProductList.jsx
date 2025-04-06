import React from 'react';
const ProductList = ({title, nameDanhmuc, items}) => {
    return (
        <div className="product-list">
            <h1>{title}</h1>
            <p>{nameDanhmuc}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div> 
    );
}
export default ProductList;