import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { TestList } from './TestList';

export function TestComponent() {
  const [count, setCount] = React.useState(0);

  const handlePress = () => {
    setCount((c) => c + 1);
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
