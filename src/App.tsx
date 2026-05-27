import Alert from "./components/Alert";
import DynamicButton from "./components/DynamicButton/DynamicButton";
import ListGroup from "./components/ListGroup";
import { ListGroupProps } from "./components/ListGroup";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const onClick = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      <DynamicButton
        color="primary"
        label="Ok"
        onClick={() => setShowAlert(true)}
      />
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </>
  );
}

export default App;
