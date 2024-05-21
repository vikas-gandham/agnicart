import Product from "../reusable/Product";

export default function ShowProducts({ products }) {
  const productList = [
    {
      pid: "3fd0124f",
      img: "/saree1.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "c2f7b78b",
      img: "/saree2.webp",
      rating: 1,
      ratingCount: 2,
    },
    {
      pid: "2e476c4d",
      img: "/saree3.webp",
      rating: null,
      ratingCount: null,
    },
    {
      pid: "a3ca886f",
      img: "/saree4.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "c0be623f",
      img: "/saree5.webp",
      rating: 1,
      ratingCount: 3,
    },
    {
      pid: "5e243056",
      img: "/saree6.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "0945c01c",
      img: "/saree7.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "79cdb464",
      img: "/saree8.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "c5ff7769",
      img: "/saree9.webp",
      rating: null,
      ratingCount: null,
    },
    {
      pid: "70879e34",
      img: "/saree10.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "ce94fa60",
      img: "/saree11.webp",
      rating: 1,
      ratingCount: 2,
    },
    {
      pid: "0160bae0",
      img: "/saree12.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "62522c30",
      img: "/saree13.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "e9f1eb66",
      img: "/saree14.webp",
      rating: null,
      ratingCount: null,
    },
    {
      pid: "716ce40d",
      img: "/saree15.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "224ee29f",
      img: "/saree16.webp",
      rating: 1,
      ratingCount: 3,
    },
    {
      pid: "2c8cd11d",
      img: "/saree17.webp",
      rating: 1,
      ratingCount: 5,
    },
    {
      pid: "eaa19f63",
      img: "/saree18.webp",
      rating: 1,
      ratingCount: 4,
    },
    {
      pid: "17f54bbf",
      img: "/saree19.webp",
      rating: null,
      ratingCount: null,
    },
    {
      pid: "4cbd63ab",
      img: "/saree20.webp",
      rating: 1,
      ratingCount: 5,
    },
  ];

  return (
    <div className="w-full mx-auto col-span-3">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {products &&
          products.length > 0 &&
          products.map((product, i) => {
            const productValues = productList.find(
              (productItem) => product.uid === productItem.pid
            );

            return (
              <Product
                key={product.uid}
                id={product.uid}
                title="Agni Originals"
                description={product.slug}
                price={product.price}
                reference_price={product.reference_price}
                img={product.featured_image_resized}
                rating={productValues.rating}
                ratingCount={productValues.ratingCount}
              />
            );
          })}
      </div>
    </div>
  );
}
