import React, { useEffect, useState } from "react";
import { TextNodeItem } from "./TextNodeItem";

interface TextNodeListProps {
  textNodes: Array<TextNode>;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
  deleteTextNode: DeleteTextNode;
  searchTextNode: SearchTextNode;
  query: string;
}

export const TextNodeList: React.FC<TextNodeListProps> = ({
  textNodes,
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

  //Every the query change, save the result to local state
  useEffect(() => {
    let filtered = searchTextNode(query);
    setFilteredTextNodes(filtered);
  }, [query]);

  return (
    <ul className="textNode-list">
      {filteredTextNodes.map((textNode) => {
        return (
          <TextNodeItem
            key={textNode.text}
            textNode={textNode}
            toggleTextNode={toggleTextNode}
            setTextNodePriority={setTextNodePriority}
            setTextNodeText={setTextNodeText}
            deleteTextNode={deleteTextNode}
          ></TextNodeItem>
        );
      })}
    </ul>
  );
};
