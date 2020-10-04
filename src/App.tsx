import React, { useState } from "react";
import "./App.css";

import { TextNodeList } from "./TextNodeList";
import { AddTextNodeForm } from "./AddTextNodeForm";

const initialTextNodes: Array<TextNode> = [
  { text: "clean litter box", complete: true, priority: 1 },
  { text: "walk the cat", complete: false, priority: 1 },
];

const App: React.FC = () => {
  const [textNodes, setTextNodes] = useState(initialTextNodes);

  const toggleTextNode: ToggleTextNode = (selectedTextNode) => {
    const newTextNode = textNodes.map((textNode) => {
      if (textNode === selectedTextNode) {
        return {
          ...textNode,
          complete: !textNode.complete,
        };
      }
      return textNode;
    });
    setTextNodes(newTextNode);
  };

  //Map through textNodes, if it is the selected one, change the priority to the local state priority
  const setTextNodePriority: SetTextNodePriority = (
    selectedTextNode,
    priority
  ) => {
    const newTextNode = textNodes.map((textNode) => {
      if (textNode === selectedTextNode) {
        return {
          ...textNode,
          priority: priority,
        };
      }
      return textNode;
    });
    setTextNodes(newTextNode);
  };

  const setTextNodeText: SetTextNodeText = (selectedTextNode, text) => {
    const newTextNode = textNodes.map((textNode) => {
      if (textNode === selectedTextNode) {
        return {
          ...textNode,
          text: text,
        };
      }
      return textNode;
    });
    setTextNodes(newTextNode);
  };

  const addTextNode: AddTextNode = (newTextNode) => {
    newTextNode !== "" &&
      setTextNodes([
        ...textNodes,
        { text: newTextNode, complete: false, priority: 1 },
      ]);
  };

  return (
    <React.Fragment>
      <AddTextNodeForm addTextNode={addTextNode}></AddTextNodeForm>
      <TextNodeList
        textNodes={textNodes}
        toggleTextNode={toggleTextNode}
        setTextNodePriority={setTextNodePriority}
        setTextNodeText={setTextNodeText}
      ></TextNodeList>
    </React.Fragment>
  );
};

export default App;
