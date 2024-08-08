import { Link, Route, Routes } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to our homepage!</p>
  </div>
);

const Categories = () => (
  <div>
    <h2>Categories</h2>
    <p>Browse items by category.</p>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
    <p>Browse individual products.</p>
  </div>
);

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}