import React, { useState, ChangeEvent, useEffect } from "react";

interface TextNodeItemProps {
  textNode: TextNode;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
}

export const TextNodeItem: React.FC<TextNodeItemProps> = ({
  textNode,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
}) => {
  //set textNode.priority as local state - priority in initiation
  const [priority, setPriority] = useState(textNode.priority);
  const [text, setText] = useState(textNode.text);

  //every time the select value change, set the textNode.priority to the new value

  const handlePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(Number(e.target.value));
  };
  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  useEffect(() => {
    setTextNodePriority(textNode, priority);
  }, [priority]);

  useEffect(() => {
    setTextNodeText(textNode, text);
  }, [text]);

  return (
    <li className="textNode">
      <form id="textNode">
        <input
          type="checkbox"
          checked={textNode.complete}
          onChange={() => toggleTextNode(textNode)}
        ></input>
        <textarea value={text} onChange={handleText}></textarea>
        <select
          onChange={handlePriority}
          name="text-node"
          id="text-node-select"
          value={priority}
        >
          <option value="1">High 😨</option>
          <option value="2">Normal 😉</option>
          <option value="3">Low 🤤</option>
        </select>
      </form>
    </li>
  );
};
