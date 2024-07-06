export const LargeBookListItem = ({ books }) => {
  const { name, price, title, pages } = books;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <h2>{title}</h2>
      <p># of Pages: {pages}</p>
    </>
  );
};
