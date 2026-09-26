// Owner: Sayeed (Home & Categories)
// Reusable across Home (quick nav) and Categories (full grid)

import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-16 w-16 rounded-full object-cover"
      />
      <span className="text-sm font-medium text-gray-700">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryCard;
