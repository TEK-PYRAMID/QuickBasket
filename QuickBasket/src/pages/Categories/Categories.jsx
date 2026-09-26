// Owner: Sayeed
// Page: Categories

import { useEffect, useState } from "react";
import CategoryCard from "../../components/home/CategoryCard";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { categories } from "../../data/categories";

// TODO: replace with productService.getCategories() once the backend is wired in.
const fetchCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(categories), 300);
  });

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const loadCategories = () => {
    setLoading(true);
    setError(false);

    fetchCategories()
      .then(setAllCategories)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) {
    return <Loader message="Loading categories..." />;
  }

  if (error) {
    return (
      <ErrorState
        message="We couldn't load categories right now."
        onRetry={loadCategories}
      />
    );
  }

  if (allCategories.length === 0) {
    return (
      <EmptyState
        title="No categories yet"
        message="Categories will show up here once they're added."
      />
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-4 text-xl font-semibold text-gray-900">
        Shop by Category
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {allCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
