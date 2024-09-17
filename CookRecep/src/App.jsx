import { useState } from 'react';
import './App.css';
import Data from './data';

function App() {
  const [cookie, setCookie] = useState(0);
  const {name, recepie, image} = Data[cookie];

const  randomfood=() =>{
  let randomfoodie=Math.floor(Math.random()  * Data.length)
  setCookie(randomfoodie);
  console.log(randomfoodie);
  
}
  return (
    <div className="app-container">
      <h2>Indian Food</h2>
      <h4>Name of Dish: {name}</h4>
      <img src={image} alt={name} className="food-item" />
      <p>{recepie}</p>
      <div className="nav-buttons">
       
        <button onClick={randomfood}>Foodies</button>
      </div>
    </div>
  );
}

export default App;
