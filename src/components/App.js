import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <p>I am learning React. My life is getting better.</p>
      <ButtonCounter />
    </div>
  );
}

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Button clicked {count} times.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
