import { useState } from "react";

export interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // React Fragment
    <>
      {/*list-group section */}
      {items.length === 0 && <p>No item found</p>}
      <h3>{heading}</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${index === selectedIndex ? "active" : ""}`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
