type ItemType = {
  id: number;
  name: string;
  description: string;
};

export const RegularList = ({
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
          <ItemComponent
            key={index}
            {...{
              [sourceName]: item,
            }}
          />
        );
      })}
    </>
  );
};
