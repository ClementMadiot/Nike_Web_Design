import React from "react";
import { products } from "../../constants";
import ProductCard from "./ProductCard"; // Adjust the path as necessary

function Products() {
  return (
    <section className="padding">
      <div id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg font-montserrat text-slate-gray first-letter:text-coral-red first-letter:font-bold first-letter:text-3xl">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design and value
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
