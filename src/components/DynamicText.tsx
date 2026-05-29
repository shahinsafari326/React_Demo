import React from "react";

interface DynamicTextProps {
  children: string;
  maxSize: number;
}

const DynamicText = ({ children, maxSize }: DynamicTextProps) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const handleShowMoreClick = () => {
    console.log("Show more clicked");
    setShowFullText(!showFullText);
  };

  if (children.length <= maxSize) {
    return <p>{children}</p>;
  }
  const text = showFullText ? children : children.substring(0, maxSize) + "...";
  return (
    <p>
      {text}{" "}
      <button onClick={handleShowMoreClick}>
        {showFullText ? "Less" : "More"}
      </button>
    </p>
  );
};

export default DynamicText;
