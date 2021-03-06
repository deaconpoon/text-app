import React, { useEffect, useState, useRef, FormEvent } from "react";
import { TextNodeItem } from "./TextNodeItem";
import { findIndex, Position } from "./find-index";
import cookie from "js-cookie";
import move from "array-move";

interface TextNodeListProps {
  textNodes: Array<TextNode>;
  setTextNodes: React.Dispatch<React.SetStateAction<TextNode[]>>;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
  deleteTextNode: DeleteTextNode;
  searchTextNode: SearchTextNode;
  query: string;
}

export const TextNodeList: React.FC<TextNodeListProps> = ({
  textNodes,
  setTextNodes,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
  deleteTextNode,
  searchTextNode,
  query,
}) => {
  //Store searched text node in local state
  const [filteredTextNodes, setFilteredTextNodes] = useState(
    searchTextNode(query)
  );

  // We need to collect an array of height and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef<Position[]>([]).current;
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) {
      setTextNodes(move(textNodes, i, targetIndex));
    }
    cookie.set("textNodes", JSON.stringify(textNodes));
  };

  //Every the query and textNodes change, save the result to local state
  useEffect(() => {
    let filtered = searchTextNode(query);
    setFilteredTextNodes(filtered);
  }, [query, textNodes]);

  //Delete text node if the content is empty
  useEffect(() => {
    textNodes.map((textNode) => {
      if (textNode.text == "") {
        deleteTextNode(textNode);
      }
    });
  }, [textNodes]);

  /*   const handleSort = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sortTextNodes("high");
    console.log("textNodes sorted");

    setFilteredTextNodes(textNodes);
    console.log("filtered textNodes sorted");
  }; */

  return (
    <div>
      {/*  <form>
        <button onClick={(e) => handleSort(e)}>sort!</button>
      </form> */}
      <ul className="textNode-list">
        {filteredTextNodes.map((textNode, i) => {
          return (
            <TextNodeItem
              key={textNode.text}
              textNode={textNode}
              toggleTextNode={toggleTextNode}
              setTextNodePriority={setTextNodePriority}
              setTextNodeText={setTextNodeText}
              deleteTextNode={deleteTextNode}
              setPosition={setPosition}
              moveItem={moveItem}
              i={i}
            ></TextNodeItem>
          );
        })}
      </ul>
    </div>
  );
};
