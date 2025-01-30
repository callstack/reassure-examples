import * as React from 'react';
import { TestList } from './TestList';

export function AsyncComponent() {
  const [count, setCount] = React.useState(0);

  const handlePress = () => {
    setTimeout(() => setCount((c) => c + 1), 10);
  };

  return (
    <div>
      <button onClick={handlePress}>Action</button>
      <span>Count: {count}</span>

      <TestList count={200} />
    </div>
  );
}
