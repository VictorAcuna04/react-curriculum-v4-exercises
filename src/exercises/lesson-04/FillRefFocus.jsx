// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const textInputRef = useRef(null);

  function focusInput() {
    textInputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={textInputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// The ref holds the input's DOM node, so focusInput can call focus() on it
// without causing a re-render.
