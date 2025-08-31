import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  rating: { rate: number; count: number };
  // Add more fields as needed
};

const FetchData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold">Products</h2>
      <div className="w-full mt-10 border p-5">
        <ul className="flex flex-col">
          {products.map((product) => (
            <li
              className="mb-5 border-b pb-5 flex items-center gap-5"
              key={product.id}
            >
              <div>
                <img src={product.thumbnail} alt={product.title} width={100} />
              </div>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchData;
