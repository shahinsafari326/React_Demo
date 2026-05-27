import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { ListGroupProps } from "./components/ListGroup";

function App() {
  const items = [
    "Paris",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const listGroupPrope: ListGroupProps = {
    items: items,
    heading: "Cities",
    onSelectItem: handleSelectItem,
  };
  return <Alert>Hello, React!</Alert>;
}

export default App;
