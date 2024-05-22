import React, { useState } from "react";

const arrayOfNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
const Form: React.FC = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(arrayOfNumbers[0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    setQuantity(arrayOfNumbers[0]);
    setDescription("");
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={handleChangeSelect} value={quantity}>
        {arrayOfNumbers.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleChangeInput}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
