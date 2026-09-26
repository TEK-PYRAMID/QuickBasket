// Owner: Sayeed (Home & Categories)

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-10 text-white sm:px-10">
      <div className="max-w-lg">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Groceries delivered in minutes
        </h1>
        <p className="mt-2 text-sm text-green-50 sm:text-base">
          Fresh produce, dairy, and everyday essentials — straight to your
          door.
        </p>
        <Link
          to="/products"
          className="mt-5 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
