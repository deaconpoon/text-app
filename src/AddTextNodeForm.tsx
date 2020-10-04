import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTextNodeFormProps {
  addTextNode: AddTextNode;
}

export const AddTextNodeForm: React.FC<AddTextNodeFormProps> = ({
  addTextNode,
}) => {
  const [newTextNode, setNewTextNode] = useState("");
  const [priority, setPriority] = useState(1);

  const handlePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(Number(e.target.value));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTextNode(e.target.value);
  };

  const handleSumbit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTextNode(newTextNode, priority);
    setNewTextNode("");
  };

  return (
    <form>
      <input type="text" value={newTextNode} onChange={handleChange}></input>
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
      <button type="submit" onClick={handleSumbit}>
        Add Text Node
      </button>
    </form>
  );
};
