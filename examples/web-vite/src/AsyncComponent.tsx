import * as React from 'react';
import { SlowList } from './SlowList';

export function AsyncComponent() {
  const [count, setCount] = React.useState(0);

  const handlePress = () => {
    setTimeout(() => setCount((c) => c + 1), 10);
  };

  return (
    <div>
      <button onClick={handlePress}>Action</button>
      <span>Count: {count}</span>

      <SlowList count={200} />
    </div>
  );
}
