type ItemType = {
  id: number;
  name: string;
  description: string;
};

export const NumberedList = ({
  items,
  sourceName,
  ItemComponent,
}: {
  items: ItemType[];
  sourceName: string;
  ItemComponent: React.ComponentType<{ [sourceName: string]: ItemType }>;
}) => {
  return (
    <>
      {items.map((item: ItemType, index: number) => {
        return (
          <>
            <h3>{index + 1}</h3>
            <ItemComponent
              key={index}
              {...{
                [sourceName]: item,
              }}
            />
          </>
        );
      })}
    </>
  );
};
