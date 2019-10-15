import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber + 1}>+</button>
      <button onClick={() => setNumber - 1}>-</button>
      {number}
    </div>
  );
}

export default App;