import logo from './logo.svg';
import './App.css';
// import Todo from './todo';
import Mytodo from './mytodo';
import { useEffect, useState } from 'react';

function App() {
  const [init] = useState(true)

  return (
    <div className="App">
      <Mytodo />
    </div>
  );
}

export default App;
