import { SplitScreen } from "./components/split-screen";

const LeftSideComp = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "salmon" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"Right"} />
        <RightSideComp title={"Left"} />
      </SplitScreen>
    </>
  );
}

export default App;
