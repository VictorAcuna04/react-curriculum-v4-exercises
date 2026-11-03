// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [totalButtonClicks, setTotalButtonClicks] = useState(0);

  function handleButtonClick() {
    setTotalButtonClicks(totalButtonClicks + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleButtonClick}>{totalButtonClicks} Clicks</button>
    </div>
  );
}

// useState is correct because the count appears in the UI and the component
// must re-render when it changes. A regular variable or a ref would not update the button text.
