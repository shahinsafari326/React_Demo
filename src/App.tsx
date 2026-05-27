import Alert from "./components/Alert";
import DynamicButton from "./components/DynamicButton";
import ListGroup from "./components/ListGroup";
import { ListGroupProps } from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const onClick = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      <DynamicButton
        color="danger"
        label="Ok"
        onClick={() => setShowAlert(true)}
      />
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </>
  );
}

export default App;
