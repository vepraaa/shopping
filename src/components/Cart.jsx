import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cartItems}) => {
// пропс - cartItems, - это массив товаров, которые добавлены в корзину
    return (
        <div className='cart'>

            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
// cartItems.length === 0 ? - провряем, пустая ли корзина
                <div>
                    <p>Здесь пусто</p>
                    <Link to="/" className="back-to-products">
            Back to Products
          </Link>
{/* Кнопка перемещающая на страницу товаров */}
                </div>
            ) : (
                cartItems.map((item, index) => (
// Если корзина не пустая, то отображаем товары,
// каждый товар отображается в отдельном блоке
// index используется как ключ (key), для идентификации каждого элемента
                    <div key = {index} className='cart-item'>
                        <img 
                        scr = {item.image} 
                        alt = {item.title}
                        />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;