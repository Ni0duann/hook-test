import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  });
  return (
    <div onClick={()=>setNum((prevNum => prevNum + 1))}>{num}</div>
  );
}

export default App;
