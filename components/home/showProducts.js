import { useEffect, useState } from "react";
import Product from "../reusable/product";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);

  const productList = [
    {
      pid: "3fd0124f",
      img: "/saree1.webp",
      ratingCount: 5,
    },
    {
      pid: "c2f7b78b",
      img: "/saree2.webp",
      ratingCount: 2,
    },
    {
      pid: "2e476c4d",
      img: "/saree3.webp",
      ratingCount: 4,
    },
    {
      pid: "a3ca886f",
      img: "/saree4.webp",
      ratingCount: 5,
    },
    {
      pid: "c0be623f",
      img: "/saree5.webp",
      ratingCount: 3,
    },
    {
      pid: "5e243056",
      img: "/saree6.webp",
      ratingCount: 5,
    },
    {
      pid: "0945c01c",
      img: "/saree7.webp",
      ratingCount: 5,
    },
    {
      pid: "79cdb464",
      img: "/saree8.webp",
      ratingCount: 5,
    },
    {
      pid: "c5ff7769",
      img: "/saree9.webp",
      ratingCount: null,
    },
    {
      pid: "70879e34",
      img: "/saree10.webp",
      ratingCount: 5,
    },
    {
      pid: "ce94fa60",
      img: "/saree11.webp",
      ratingCount: 2,
    },
    {
      pid: "0160bae0",
      img: "/saree12.webp",
      ratingCount: 5,
    },
    {
      pid: "62522c30",
      img: "/saree13.webp",
      ratingCount: 5,
    },
    {
      pid: "e9f1eb66",
      img: "/saree14.webp",
      ratingCount: null,
    },
    {
      pid: "716ce40d",
      img: "/saree15.webp",
      ratingCount: 5,
    },
    {
      pid: "224ee29f",
      img: "/saree16.webp",
      ratingCount: 3,
    },
    {
      pid: "2c8cd11d",
      img: "/saree17.webp",
      ratingCount: 5,
    },
    {
      pid: "eaa19f63",
      img: "/saree18.webp",
      ratingCount: 4,
    },
    {
      pid: "17f54bbf",
      img: "/saree19.webp",
      ratingCount: null,
    },
    {
      pid: "4cbd63ab",
      img: "/saree20.webp",
      ratingCount: 5,
    },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch(
        "https://devapi.agnicart.com/api/stores/1f0bcd4b/products/"
      );
      if (!res.ok)
        throw new Error("Something went wrong with fetching products");
      const data = await res.json();
      setProducts(data.results);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="w-full mx-auto col-span-3">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {products.map((product, i) => {
          const productValues = productList.find(
            (productItem) => product.uid === productItem.pid
          );
          console.log(productValues);

          return (
            <Product
              key={product.uid}
              id={product.uid}
              title="Agni Originals"
              description={product.slug}
              price={product.price}
              reference_price={product.reference_price}
              img={productValues.img}
              ratingCount={productValues.ratingCount}
            />
          );
        })}
      </div>
    </div>
  );
}
