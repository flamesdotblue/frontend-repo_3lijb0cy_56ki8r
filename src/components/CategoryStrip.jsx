const categories = [
  { name: "Mobiles", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=60" },
  { name: "Electronics", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=200&q=60" },
  { name: "Appliances", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200&q=60" },
  { name: "Fashion", img: "https://images.unsplash.com/photo-1520970022701-83e2a710c9a6?w=200&q=60" },
  { name: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&q=60" },
  { name: "Home", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=200&q=60" },
  { name: "Furniture", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=200&q=60" },
  { name: "Travel", img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=200&q=60" },
  { name: "Grocery", img: "https://images.unsplash.com/photo-1543168256-418811576931?w=200&q=60" },
  { name: "Toys", img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=200&q=60" },
];

export default function CategoryStrip() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="flex-shrink-0 group text-center"
              aria-label={c.name}
            >
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-1 ring-gray-200 group-hover:ring-blue-500 transition">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 text-xs font-medium text-gray-700 group-hover:text-blue-600">
                {c.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
