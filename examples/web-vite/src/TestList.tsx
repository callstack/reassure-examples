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

interface ListItemProps {
  title: string;
}

const ListItem = ({ title }: ListItemProps) => {
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
