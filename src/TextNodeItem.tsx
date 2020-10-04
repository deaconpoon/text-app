import React, { useState, ChangeEvent, useEffect } from "react";

interface TextNodeItemProps {
  textNode: TextNode;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
}

export const TextNodeItem: React.FC<TextNodeItemProps> = ({
  textNode,
  toggleTextNode,
  setTextNodePriority,
}) => {
  //set textNode.priority as local state - priority in initiation
  const [priority, setPriority] = useState(textNode.priority);

  //every time the select value change, set the textNode.priority to the new value

  const handlePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(Number(e.target.value));
  };

  useEffect(() => {
    setTextNodePriority(textNode, priority);
  }, [priority]);

  return (
    <li className="textNode">
      <label>
        <input
          type="checkbox"
          checked={textNode.complete}
          onChange={() => toggleTextNode(textNode)}
        ></input>
        <textarea>{textNode.text}</textarea>
        <select
          onChange={handlePriority}
          name="text-node"
          id="text-node-select"
        >
          <option value="1">High 😨</option>
          <option value="2">Normal 😉</option>
          <option value="3">Low 🤤</option>
        </select>
      </label>
    </li>
  );
};
