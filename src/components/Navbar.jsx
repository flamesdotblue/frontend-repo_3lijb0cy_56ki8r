import { Search, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          {/* Left: Logo and menu */}
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="flex items-baseline gap-1 font-extrabold text-xl tracking-tight">
              <span className="text-blue-600">Flip</span>
              <span className="text-[#f1c40f]">Kart</span>
            </a>
          </div>

          {/* Middle: Search */}
          <div className="flex-1 hidden md:block">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, brands and more"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
              <ChevronDown className="h-4 w-4 hidden sm:inline" />
            </button>
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50">
              <span>Become a Seller</span>
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, brands and more"
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
