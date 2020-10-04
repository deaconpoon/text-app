import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";

interface TextNodeItemProps {
  textNode: TextNode;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
  deleteTextNode: DeleteTextNode;
}

export const TextNodeItem: React.FC<TextNodeItemProps> = ({
  textNode,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
  deleteTextNode,
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
  const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTextNode(textNode);
  };

  useEffect(() => {
    setTextNodePriority(textNode, priority);
  }, [priority]);

  useEffect(() => {
    setTextNodeText(textNode, text);
  }, [text]);

  return (
    <li className="textNode">
      <form className="textNode__form" id="textNode">
        <input
          type="checkbox"
          checked={textNode.complete}
          onChange={() => toggleTextNode(textNode)}
        ></input>
        <textarea
          className="textNodeText"
          value={text}
          onChange={handleText}
        ></textarea>
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
        <button onClick={handleDelete}>Delete</button>
      </form>
    </li>
  );
};
