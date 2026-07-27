import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://shop-nest-qonk.onrender.com/api/products');
        if (!res.ok) {
          throw new Error(`Could not load products (HTTP ${res.status})`);
        }

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('Could not load products: the API returned HTML instead of JSON. Start the backend on port 5000.');
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Could not load products: the API returned an invalid response.');
        }
        setProducts(data.slice(0, 4)); // Featured products
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to ShopNest</h1>
        <p>Discover the best products at unbeatable prices.</p>
      </div>
      <h2>Featured Products</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
