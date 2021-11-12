import React from 'react';
import './App.css';
import Cart from './Cart';
import Goods from './Goods';
import goods from './goods.json';

function App() {

  const [cart, setCart] = React.useState({});
  const [count, setCount] = React.useState(0);

  function addToCart (event){
    event.preventDefault(); 

    if (!event.target.classList.contains('add-to-cart')) return false;

    const k = event.target.dataset.key;
    if (cart[k] === undefined) {
      cart[k] = 1;
    }
    else {
      cart[k]++;
    }

    setCart(cart);

    setCount(count + 1);
}

  return (
    <div className="container">
      <h1>
        Cart
      </h1>
      <div className="goods-field" onClick={addToCart}>
        {
          goods.map(item => <Goods articul={item.articul} title={item.title} cost={item.cost} image={item.image} key={item.articul}/>)
        }
      </div>
      <Cart goods={goods} cart={cart} />
    </div>
  );
}

export default App;
