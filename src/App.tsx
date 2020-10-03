import React from "react";
import { TextNodeItem } from "./TextNodeItem";

const textNodes: Array<TextNode> = [
  { text: "clean litter box", complete: true, priority: 1 },
  { text: "walk the cat", complete: false, priority: 2 },
];

const App: React.FC = () => {
  return <TextNodeItem textNode={textNodes[0]}></TextNodeItem>;
};

export default App;
