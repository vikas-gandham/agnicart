import Plp from "../../components/PLP/Plp";

async function getProductsData() {
  const res = await fetch(
    "https://devapi.agnicart.com/api/stores/1f0bcd4b/products/"
  );
  const data = await res.json();
  return data.results;
}

async function getFiltersData() {
  const res = await fetch(
    "https://devapi.agnicart.com/api/stores/1f0bcd4b/variants/"
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const products = await getProductsData();
  const filters = await getFiltersData();
  return (
    <div>
      <Plp products={products} filters={filters} />
    </div>
  );
}
