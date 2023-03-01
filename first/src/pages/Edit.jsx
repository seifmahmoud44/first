import React, { useState } from "react";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const hanelSubmit = (e) => {
    e.preventDefault();
    console.log(title, price);
    setTitle("");
    setPrice("");
  };
  return (
    <form onSubmit={hanelSubmit}>
      <div className="email">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="email">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="Sign-in" type="submit">
        Update
      </button>
    </form>
  );
};

export default Edit;
