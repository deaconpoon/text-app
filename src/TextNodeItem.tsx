import React from "react";

interface TextNodeItemProps {
  textNode: TextNode;
}

export const TextNodeItem: React.FC<TextNodeItemProps> = ({ textNode }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={textNode.complete}></input>
        <textarea>{textNode.text}</textarea>
      </label>
    </li>
  );
};
