import Navbar from "./components/Navbar";
import CategoryStrip from "./components/CategoryStrip";
import HeroBanner from "./components/HeroBanner";
import ProductShowcase from "./components/ProductShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <CategoryStrip />
      <HeroBanner />
      <ProductShowcase />
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Flipkart Clone – for demo purposes only.
        </div>
      </footer>
    </div>
  );
}
