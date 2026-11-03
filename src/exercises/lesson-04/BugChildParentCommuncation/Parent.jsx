import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function handleIncrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrementCounter={handleIncrementCounter} />
    </div>
  );
}

// State lives in Parent. Props can't pass data up, so Parent passes its handler
// function down for Child to call.
