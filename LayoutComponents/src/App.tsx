import { LargeAuthorListItem } from "./components/authors/LargeListItem";
import { SmallAuthorListItem } from "./components/authors/SmallListItem";
import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/author";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
