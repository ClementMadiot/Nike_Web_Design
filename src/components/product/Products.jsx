import React from "react";
import { products } from "../../constants";
import ProductCard from "./ProductCard"; // Adjust the path as necessary
import Title from "../layout/Title";

function Products() {
  return (
    <section className="padding">
      <div id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <Title
            titleStart={"Our"}
            classTitle={"text-4xl"}
            titleOrange={"Popular"}
            titleEnd={"Products"}
            paragraph={"Experience top-notch quality and style sought-after selections. Discover a world of comfort, design and value"}
            classParagraph={"lg:max-w-lg"}
          />
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
