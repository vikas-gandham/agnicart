import { useState } from "react";
import Accordion from "../reusable/accordian";

export default function Filters() {
  const [filterList, setFilterList] = useState([
    {
      id: 1,
      title: "BRANDS",
      catogories: [
        {
          cid: 1,
          description: "AMUKTI ",
          count: 149,
        },
        {
          cid: 2,
          description: "ANCESTRY ",
          count: 20,
        },
        {
          cid: 3,
          description: "ATURABI",
          count: 1,
        },
        {
          cid: 4,
          description: "AURELIA ",
          count: 31,
        },
        {
          cid: 5,
          description: "BIBA ",
          count: 110,
        },
        {
          cid: 6,
          description: "BLACK SCISSOR ",
          count: 56,
        },
      ],
    },
    {
      id: 2,
      title: "OFFERS",
      catogories: [
        {
          cid: 1,
          description: "FLAT 40% OFF ",
          count: 82,
        },
        {
          cid: 2,
          description: "FLAT 20% OFF   ",
          count: 1,
        },
      ],
    },
    {
      id: 3,
      title: "PRODUCT TYPE",
      catogories: [
        {
          cid: 1,
          description: "KURTA  ",
          count: 86,
        },
        {
          cid: 2,
          description: "TUNIC  ",
          count: 1,
        },
      ],
    },
    {
      id: 4,
      title: "SIZE",
      catogories: [
        {
          cid: 1,
          description: "SMALL ",
          count: 28,
        },
        {
          cid: 2,
          description: "MEDIUM  ",
          count: 62,
        },
        {
          cid: 3,
          description: "X-LARGE",
          count: 34,
        },
        {
          cid: 4,
          description: "XX-LARGE ",
          count: 52,
        },
        {
          cid: 5,
          description: "LARGE  ",
          count: 120,
        },
        {
          cid: 6,
          description: "XXX-LARGE  ",
          count: 86,
        },
      ],
    },
    {
      id: 5,
      title: "COLORS",
      catogories: [
        {
          cid: 1,
          description: "BLACK ",
          count: 149,
          color: "#000",
        },
        {
          cid: 2,
          description: "BLUE  ",
          count: 20,
          color: "#0d30f1",
        },
        {
          cid: 3,
          description: "BROWN ",
          count: 1,
          color: "#ae3c13",
        },
        {
          cid: 4,
          description: "GREEN  ",
          count: 31,
          color: "#06a36a",
        },
        {
          cid: 5,
          description: "GREY  ",
          count: 110,
          color: "#a4abb1",
        },
        {
          cid: 6,
          description: "ORANGE  ",
          count: 56,
          color: "#ff6900",
        },
      ],
    },
    {
      id: 6,
      title: "DELIVERY TYPE",
      catogories: [
        {
          cid: 1,
          description: "EXPRESS STORE PICK UP ",
          count: 36,
        },
      ],
    },
    {
      id: 7,
      title: "PRICE",
      catogories: [
        {
          cid: 1,
          description: "501-1000 ",
          count: 192,
          priceRange1: "",
          priceRange2: "",
        },
        {
          cid: 2,
          description: "1001-2000 ",
          count: 57,
          priceRange1: "",
          priceRange2: "",
        },
      ],
    },
  ]);
  return (
    <div className="">
      {filterList.map((filter) => (
        <Accordion
          key={filter.id}
          title={filter.title}
          catogories={filter.catogories}
          filter={filter}
        />
      ))}
    </div>
  );
}
