// Owner: Sayeed (Home & Categories)

const promos = [
  { id: "promo-1", title: "Free delivery over ₹499", icon: "🚚" },
  { id: "promo-2", title: "Fresh picks, every morning", icon: "🥬" },
  { id: "promo-3", title: "Easy returns within 24h", icon: "↩️" },
];

const PromoStrip = () => {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {promos.map((promo) => (
        <div
          key={promo.id}
          className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
        >
          <span className="text-2xl">{promo.icon}</span>
          <span className="text-sm font-medium text-gray-700">
            {promo.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default PromoStrip;
