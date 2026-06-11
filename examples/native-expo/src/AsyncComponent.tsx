import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { TestList } from './TestList';

export function AsyncComponent() {
  const [requested, setRequested] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(requested);
  }, [requested]);

  const handlePress = () => {
    setRequested((r) => r + 1);
  };

  return (
    <View>
      <Pressable accessibilityRole="button" onPress={handlePress}>
        <Text>Action</Text>
      </Pressable>

      <Text>Count: {count}</Text>

      <TestList count={200} />
    </View>
  );
}
