/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
      <Link href="/add-product" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Add Product
      </Link>
    </div>
  );
}

