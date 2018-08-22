import "./ListItem.css";

import React from "react";

function ListItem({ children }) {
  return <li className="list-item">{children}</li>;
}

export default ListItem;
