import Layout from "../../components/Layout";
import React, { useState } from "react";

const New = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <Layout>
      <h1>New Product</h1>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea placeholder="description"></textarea>
      <label>Price (in USD)</label>
      <input type="number" placeholder="price" />
      <button className="btn-primary">Save</button>
    </Layout>
  );
};

export default New;
