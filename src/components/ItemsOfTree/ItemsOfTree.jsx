import React from "react";

import Item from "../Item/Item";

function ItemsOfTree({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemsOfTree;
