import React from 'react';

interface TestListProps {
  count: number;
}

export const TestList = ({ count }: TestListProps) => {
  const data = Array.from({ length: count }, (_, index) => index);

  return (
    <div>
      {data.map((item) => (
        <ListItem key={item} title={`Item ${item}`} />
      ))}
    </div>
  );
};

interface ItemProps {
  title: string;
}

const ListItem = ({ title }: ItemProps) => {
  // Uncomment to introduce a performance issue
  // const [, forceRender] = React.useState<object>();
  // React.useEffect(() => {
  //   forceRender({});
  // }, [title]);

  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
