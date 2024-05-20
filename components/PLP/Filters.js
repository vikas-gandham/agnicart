import Accordion from "../reusable/Accordian";

export default function Filters({ filters }) {
  return (
    <div className=" overflow-y-auto scrollbar-thin max-h-screen  ">
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
