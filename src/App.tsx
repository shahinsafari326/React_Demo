import Alert from "./components/Alert";
import ChangeNameButton from "./components/ChangeNameButton";
import DynamicButton from "./components/DynamicButton/DynamicButton";
import DynamicText from "./components/DynamicText";
import Like from "./components/Like/Like";
import ListGroup from "./components/ListGroup";
import { ListGroupProps } from "./components/ListGroup";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <DynamicText maxSize={10}>Dynamic Button</DynamicText>
    </>
  );
}

export default App;
