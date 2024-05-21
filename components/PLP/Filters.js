import Accordion from "../reusable/Accordian";

export default function Filters({ filters }) {
  return (
    <div className=" sticky top-10  ">
      {filters &&
        filters.length > 0 &&
        filters.map((filter) => (
          <Accordion
            key={filter.id}
            title={filter.name}
            options={filter.options}
            filter={filter}
          />
        ))}
    </div>
  );
}
