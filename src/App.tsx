import React, { useState } from "react";
import cookie from "js-cookie";

import "./App.scss";

import { TextNodeList } from "./TextNodeList";
import { AddTextNodeForm } from "./AddTextNodeForm";
import { SearchBar } from "./SearchBar";

const initialTextNodes: Array<TextNode> = cookie.getJSON("textNodes") || [
  { text: "clean litter box", complete: false, priority: 1 },
  { text: "walk the cat", complete: false, priority: 1 },
];

const App: React.FC = () => {
  const [textNodes, setTextNodes] = useState(initialTextNodes);
  const [query, setQuery] = useState("");

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
    cookie.set("textNodes", JSON.stringify(newTextNode));
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
    cookie.set("textNodes", JSON.stringify(newTextNode));
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
    cookie.set("textNodes", JSON.stringify(newTextNode));
  };

  const addTextNode: AddTextNode = (newTextNode, priority) => {
    newTextNode !== "" &&
      setTextNodes([
        ...textNodes,
        { text: newTextNode, complete: false, priority: priority },
      ]);
    cookie.set("textNodes", JSON.stringify(newTextNode));
  };
  const deleteTextNode: DeleteTextNode = (deletedTextNode) => {
    const deletedTextNodes = textNodes.filter(
      (textNode) => textNode !== deletedTextNode
    );
    console.log(textNodes);
    setTextNodes(deletedTextNodes);
    cookie.set("textNodes", JSON.stringify(deletedTextNodes));
  };

  const searchTextNode: SearchTextNode = (query) => {
    const filterTextNodes = textNodes.filter((textNode) => {
      return textNode.text.includes(query);
    });
    console.log(filterTextNodes);
    return query === "" ? textNodes : filterTextNodes;
  };

  return (
    <body className="body">
      <main className="app">
        <AddTextNodeForm addTextNode={addTextNode}></AddTextNodeForm>
        <SearchBar setQuery={setQuery}></SearchBar>

        <TextNodeList
          query={query}
          searchTextNode={searchTextNode}
          textNodes={textNodes}
          setTextNodes={setTextNodes}
          toggleTextNode={toggleTextNode}
          setTextNodePriority={setTextNodePriority}
          setTextNodeText={setTextNodeText}
          deleteTextNode={deleteTextNode}
        ></TextNodeList>
      </main>
    </body>
  );
};

export default App;
