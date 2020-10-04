import React from "react";
import { TextNodeItem } from "./TextNodeItem";

interface TextNodeListProps {
  textNodes: Array<TextNode>;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
  deleteTextNode: DeleteTextNode;
}

export const TextNodeList: React.FC<TextNodeListProps> = ({
  textNodes,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
  deleteTextNode,
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
            deleteTextNode={deleteTextNode}
          ></TextNodeItem>
        );
      })}
    </ul>
  );
};
