import React from 'react';
import './App.css';
import Goods from './Goods';
import goods from './goods.json';

function App() {

  const [cart, setCart] = React.useState({}); // object basket
  const [count, setCount] = React.useState(0); // goods counter

  return (
    <div className="container">
      <h1>
        Cart
      </h1>
      <div className="goods-field">
        {
          goods.map(item => <Goods articul={item.articul} title={item.title} cost={item.cost} image={item.image} />)
        }
      </div>
    </div>
  );
}

export default App;
