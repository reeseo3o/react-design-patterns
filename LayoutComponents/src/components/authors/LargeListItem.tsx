export const LargeAuthorListItem = ({
  author,
}: {
  author: {
    name: string;
    age: number;
    country: string;
    books: string[];
  };
}) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h3>Books: {books}</h3>
      <ul>
        {books.map((book: string) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};
