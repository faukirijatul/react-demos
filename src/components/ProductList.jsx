import React from "react";

const products = [
  {
    id: 1,
    name: "Phone",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$1200",
  },
  { id: 3, name: "Handpnones", price: "$199" },
];

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ol>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            Name : {name}, Price : {price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList;
