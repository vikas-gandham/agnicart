import React from "react";
import Filters from "./Filters";
import ShowProducts from "./ShowProducts";

export default function Plp({ products, filters }) {
  return (
    <div className="w-full lg:w-[80%] mx-auto p-10 pt-[200px] z-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-center gap-10 relative">
        <Filters filters={filters} />
        <ShowProducts products={products} />
      </div>
    </div>
  );
}
