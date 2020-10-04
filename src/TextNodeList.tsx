import React from "react";
import { TextNodeItem } from "./TextNodeItem";

interface TextNodeListProps {
  textNodes: Array<TextNode>;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
}

export const TextNodeList: React.FC<TextNodeListProps> = ({
  textNodes,
  toggleTextNode,
  setTextNodePriority,
}) => {
  return (
    <ul>
      {textNodes.map((textNode) => {
        return (
          <TextNodeItem
            key={textNode.text}
            textNode={textNode}
            toggleTextNode={toggleTextNode}
            setTextNodePriority={setTextNodePriority}
          ></TextNodeItem>
        );
      })}
    </ul>
  );
};
