// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerIntervalId = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    // Cleanup clears the interval so only one timer runs
    return () => clearInterval(timerIntervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// StrictMode mounts, unmounts, and remounts the component in development.
// Without cleanup, the first interval kept running, so two intervals
// incremented the count by 2 each second. Clearing the interval in the cleanup
// function fixes this.
