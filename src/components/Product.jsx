import React from 'react';

const Product = ({product, addToCart}) => {
// в 3 строчке 2 пропса: product - информация о товаре
// и addToCart - функция, которая вызывается при добавлении товара в корзину
    return (
        <div className='product'>
            <img src = {product.image} alt = {product.title}/>
{/* scr - url изображения, alt - альтернативный вид, если картинка не загрузится */}
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
{/* При нажатии на кнопку, вызывается функция addToCart, которой передаётся текущий товар (product) */}
        </div>
    );
};

export default Product;