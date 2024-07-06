import { LargeAuthorListItem } from "./components/authors/LargeListItem";
import { SmallAuthorListItem } from "./components/authors/SmallListItem";
import { LargeBookListItem } from "./components/books/LargeListItem";
import { SmallBookListItem } from "./components/books/SmallListItem";
import { NumberedList } from "./components/lists/Numbered";
import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/author";
import { books } from "./data/books";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={"books"}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={"books"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
