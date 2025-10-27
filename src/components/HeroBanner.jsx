import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=60",
    alt: "Premium headphones sale",
  },
  {
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&q=60",
    alt: "Smartphone festival offers",
  },
  {
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=60",
    alt: "Home appliances mega deals",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={slides[index].img}
            alt={slides[index].alt}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-600" : "bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
