"use client";

import Filters from "@/components/home/filters";
import ShowProducts from "@/components/home/showProducts";

export default function Home() {
  return (
    <main>
      <div className="w-full lg:w-[80%] mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-center gap-8 ">
          <Filters />
          <ShowProducts />
        </div>
      </div>
    </main>
  );
}
