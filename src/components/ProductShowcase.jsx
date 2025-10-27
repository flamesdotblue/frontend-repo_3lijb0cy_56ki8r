import { Star, ShoppingCart } from "lucide-react";

const sections = [
  {
    title: "Top Deals on Electronics",
    products: [
      {
        id: 1,
        title: "Wireless Headphones",
        price: 1299,
        mrp: 2499,
        rating: 4.4,
        img: "https://images.unsplash.com/photo-1518441902117-f6f36c0b1b91?w=400&q=60",
      },
      {
        id: 2,
        title: "Smartwatch Series 7",
        price: 3299,
        mrp: 4999,
        rating: 4.2,
        img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=400&q=60",
      },
      {
        id: 3,
        title: "Portable Speaker",
        price: 1799,
        mrp: 2499,
        rating: 4.1,
        img: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?w=400&q=60",
      },
      {
        id: 4,
        title: "Gaming Mouse",
        price: 899,
        mrp: 1499,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1585079542156-2755d9c8acc1?w=400&q=60",
      },
      {
        id: 5,
        title: "4K Action Camera",
        price: 5499,
        mrp: 7999,
        rating: 4.0,
        img: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=400&q=60",
      },
    ],
  },
  {
    title: "Best of Fashion",
    products: [
      {
        id: 6,
        title: "Men's Sneakers",
        price: 1499,
        mrp: 2999,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=60",
      },
      {
        id: 7,
        title: "Women's Handbag",
        price: 1899,
        mrp: 3499,
        rating: 4.2,
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=60",
      },
      {
        id: 8,
        title: "Analog Watch",
        price: 1199,
        mrp: 2399,
        rating: 4.0,
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=60",
      },
      {
        id: 9,
        title: "Sunglasses",
        price: 799,
        mrp: 1599,
        rating: 4.1,
        img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=60",
      },
      {
        id: 10,
        title: "Hoodie",
        price: 999,
        mrp: 1999,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1520975731045-7c58bdb8f0a5?w=400&q=60",
      },
    ],
  },
];

function ProductCard({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <div className="group w-56 flex-shrink-0 rounded-lg border border-gray-200 bg-white hover:shadow-md transition overflow-hidden">
      <div className="aspect-[4/3] bg-gray-50">
        <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 space-y-1">
        <div className="text-sm font-medium line-clamp-2">{product.title}</div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">₹{product.price}</span>
          <span className="text-xs text-gray-500 line-through">₹{product.mrp}</span>
          <span className="text-xs font-semibold text-green-600">{discount}% off</span>
        </div>
        <button className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-md bg-blue-600 px-3 py-2 text-white text-sm hover:bg-blue-700">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {sections.map((sec) => (
          <div key={sec.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">{sec.title}</h2>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View All
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {sec.products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
