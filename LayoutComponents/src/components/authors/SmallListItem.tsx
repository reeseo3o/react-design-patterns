export const SmallAuthorListItem = ({
  author,
}: {
  name: string;
  age: number;
}) => {
  const { name, age } = author;
  return (
    <>
      <p>
        Name: {name}, Age: {age}
      </p>
    </>
  );
};
