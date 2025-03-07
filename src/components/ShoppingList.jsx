import React, { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, formData]);
  };
  return (
    <div>
      <h2>Shopping List</h2>

      {list?.map((item, index) => (
        <p key={index}>
          {index + 1}. {item.name} = {item.quantity} pcs
        </p>
      ))}

      <form onSubmit={handleAdd}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingList;
