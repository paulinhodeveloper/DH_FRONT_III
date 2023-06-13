import React, { useState } from 'react';
import './App.css';

function ListItem({ id, value }) {
  return <li>{id}: {value}</li>;
}

function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue !== '') {
      setItems([...items, { id: count, value: inputValue }]);
      setCount(count + 1);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Aula 7 - Front III - Lista Dinâmica</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Adicionar</button>
        <ul>
          {items.map((item) => (
            <ListItem key={item.id} id={item.id} value={item.value} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
