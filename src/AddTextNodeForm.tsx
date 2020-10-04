import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTextNodeFormProps {
  addTextNode: AddTextNode;
}

export const AddTextNodeForm: React.FC<AddTextNodeFormProps> = ({
  addTextNode,
}) => {
  const [newTextNode, setNewTextNode] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTextNode(e.target.value);
  };

  const handleSumbit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTextNode(newTextNode);
    setNewTextNode("");
  };
  return (
    <form>
      <input type="text" value={newTextNode} onChange={handleChange}></input>
      <button type="submit" onClick={handleSumbit}>
        Add Text Node
      </button>
    </form>
  );
};
