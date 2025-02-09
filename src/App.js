import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./styles/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  // мы используем хук useState для создания состояния products, которое будет хранить список товаров,
  // изначально products - пустой массив
  const [cartItems, setCartItems] = useState([]);
  // то же самое, что и с products, только с cartItems
  useEffect(() => {
    // хук useEffect - используется для выполнения побочных эффектов, например(загрузка данных)
    // в данный момент используем для выполнения побочного эффекта - загрузка данных о товарах, useEffects используется после первого рендера,
    // так как массив зависимостей пуст

    fetch('https://dummyjson.com/products')
      // http запрос для получения списка товаров
      .then((response) => response.json())
      // преобразование ответа в json-форма
      .then((data) => setProducts(data.products))
      // обновление состояния products, передавая в него данные полученные из api
      .catch((error) => console.error("Error fetching products", error));
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз после первого рендера.

  const addToCart = (product) => {
    // Обновляем состояние cartItems, добавляя новый товар в конец массива.
    // Используем оператор расширения (...) для создания нового массива на основе текущего cartItems.

    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>MEOW</h1>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartItems.length})
          </Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="products-container">
                {products.map((product) => (
                  // Проходим по массиву products и для каждого товара создаем компонент Product.
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                  // Компонент Product отображает информацию о товаре.
                  // key={product.id} — уникальный ключ для каждого товара (необходим для оптимизации рендеринга списка).
                  // product={product} — передаем данные о товаре в компонент Product.
                  // addToCart={addToCart} — передаем функцию addToCart в компонент Product, чтобы товар можно было добавить в корзину.
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
        {/* Отображаем компонент Cart, передавая в него текущие товары в корзине (cartItems). */}
      </div>
    </Router>
  );
};

export default App;
