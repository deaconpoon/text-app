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
    <form className="textNode__add">
      <div className="textNode__add__container">
        <input
          placeholder="Write something"
          type="text"
          className="textNode__add__input"
          value={newTextNode}
          onChange={handleChange}
        ></input>
        <div className="textNode__add__priority--container">
          Priority:{" "}
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
        </div>
        <button
          className="textNode__add--btn"
          type="submit"
          onClick={handleSumbit}
        >
          Add
        </button>
      </div>
    </form>
  );
};
