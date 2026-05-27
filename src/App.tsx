import Alert from "./components/Alert";
import DynamicButton from "./components/DynamicButton/DynamicButton";
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
      <Like onClick={handleLikeClick} liked={liked} />
    </>
  );
}

export default App;
