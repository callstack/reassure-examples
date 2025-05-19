import * as React from 'react';
import {View, Text} from 'react-native';

interface TestListProps {
  count: number;
}

export const TestList = ({count}: TestListProps) => {
  const data = Array.from({length: count}, (_, index) => index);

  return (
    <View>
      {data.map(item => (
        <ListItem key={item} title={`Item ${item}`} />
      ))}
    </View>
  );
};

interface ListItemProps {
  title: string;
}

const ListItem = ({title}: ListItemProps) => {
  // Uncomment to introduce a performance issue
  // const [, forceRender] = React.useState<{}>();
  // React.useEffect(() => {
  //   forceRender({});
  // }, [title]);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
