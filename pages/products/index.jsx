import axios from "axios";
import Layout from "../../components/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white rounded-md py-1 px-2"
        href={"/products/new"}
      >
        Add new product
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product Name</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.title}>
              <td>{product.title}</td>
              <td>
                <Link href={"/products/"}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
