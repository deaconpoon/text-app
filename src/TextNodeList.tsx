import React from "react";
import { TextNodeItem } from "./TextNodeItem";

interface TextNodeListProps {
  textNodes: Array<TextNode>;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
}

export const TextNodeList: React.FC<TextNodeListProps> = ({
  textNodes,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
}) => {
  return (
    <ul className="textNode-list">
      {textNodes.map((textNode) => {
        return (
          <TextNodeItem
            key={textNode.text}
            textNode={textNode}
            toggleTextNode={toggleTextNode}
            setTextNodePriority={setTextNodePriority}
            setTextNodeText={setTextNodeText}
          ></TextNodeItem>
        );
      })}
    </ul>
  );
};
