import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id?: string;
  name: string;
  price: number;
  stock: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({ name: "", price: 0, stock: 0 });

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const addProduct = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/products", form);
      setProducts([...products, res.data]);
      setForm({ name: "", price: 0, stock: 0 });
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>🛒 Products</h1>
      <div>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
        <input
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} — ₹{p.price} (Stock: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}
