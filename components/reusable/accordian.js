"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Accordion({ title, options, filter, isChecked }) {
  const router = useRouter();

  const handleFilterClick = (id, checked) => {
    if (id === undefined || id === null) {
      console.error("ID is undefined or null");
      return;
    }

    const currentUrl = router.asPath;
    console.log("current Url: ", currentUrl);

    const url = new URL(currentUrl, "http://localhost:3000/variant");
    let idParams = url.searchParams.getAll("id");
    console.log("Checkbox state: ", checked);

    // Check if the ID is already present in the parameters
    const idAlreadyExists = idParams.includes(id);

    if (checked && !idAlreadyExists) {
      // Add the ID to the parameters if it's checked and not already present
      idParams.push(id);
    } else if (!checked && idAlreadyExists) {
      // Remove the ID from the parameters if it's unchecked and already present
      idParams = idParams.filter((param) => param !== id);
      url.searchParams.delete("id");
    }

    // Clear existing ID parameters

    // Append each ID from the updated idParams array
    idParams.forEach((param) => url.searchParams.append("id", param));

    // If there are no IDs left, remove the entire id parameter from the URL
    if (idParams.length === 0) {
      url.searchParams.delete("id");
    }

    // Push the updated URL to the router
    router.push(url.pathname + url.search);

    // const query = { ...router.query };
    // query[id] = !query[id];
    // if (!query[id]) {
    //   delete query[id];
    // }
    // router.push(`/filter?id=${id}`, undefined, {
    //   shallow: true,
    // });
  };

  const [toggle, setToggle] = useState(true);
  return (
    <div className="  flex-col flex gap-3 bg-white py-3 px-4 border-b  border-slate-600 relative   ">
      <button
        onClick={() => setToggle(!toggle)}
        className=" w-full flex items-center justify-between"
      >
        <h3 className=" text-slate-500 text-start  font-semibold uppercase">
          {title}
        </h3>
        {toggle ? (
          <span>
            <IoIosArrowUp />
          </span>
        ) : (
          <span>
            <IoIosArrowDown />
          </span>
        )}
      </button>

      {filter.id === 168 ? (
        <div
          className={`grid transition-all  duration-300 ease-in-out text-slate-600 text-sm   ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className=" overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-4 w-[235px] py-2 ">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-start justify-start gap-2 px-1 pt-2"
                >
                  <Link
                    href={`/filter?id=${filterItem.id}`}
                    className="flex items-center justify-start gap-2 "
                  >
                    <button
                      className="p-2 border border-slate-500 ring-1 rounded-full  hover:ring-offset-1"
                      style={{ backgroundColor: filterItem.hex_code }}
                    ></button>
                    <h1 className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </h1>
                    <h1 className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : filter.id === 169 ? (
        <div
          className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className="flex flex-col  items-start justify-center gap-6 overflow-hidden">
            <div className="flex flex-col  items-start justify-center gap-4 overflow-y-auto max-h-[150px] w-full scrollbar-thin scrollbar-webkit pt-48 pb-2">
              {options.map((filterItem) => (
                <div key={filterItem.id}>
                  <label className="flex items-center justify-start gap-2 ">
                    <input type="checkbox" />
                    <h1 className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </h1>
                    <h1 className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </h1>
                  </label>
                </div>
              ))}
            </div>
            <div className=" flex flex-col items-start gap-3 justify-center">
              <span>Enter a price range</span>
              <div className="flex items-center justify-start gap-2">
                <div className="relative">
                  <span className=" absolute top-0 left-0 translate-x-4 translate-y-3">
                    &#8377;
                  </span>
                  <input
                    type="number"
                    className="border border-solid rounded-md text-center px-3 py-2 w-[100px] "
                  />
                </div>
                <span>to</span>
                <div className="relative">
                  <span className=" absolute top-0 left-0 translate-x-4 translate-y-3">
                    &#8377;
                  </span>
                  <input
                    type="number"
                    className="border border-solid rounded-md text-center px-3 py-2 w-[100px] "
                  />
                </div>
              </div>
              <button className=" text-white font-semibold border bg-black px-8 py-2 rounded-sm w-[250px]  text-center ">
                REFINE SEARCH
              </button>
            </div>
          </div>
        </div>
      ) : filter.id === 170 ? (
        <div
          className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className="flex flex-col items-start justify-center gap-6 overflow-hidden w-[235px] ">
            <div className="  flex items-center justify-between mx-auto border border-black border-solid px-4 py-2 w-full  ">
              <input
                type="text"
                placeholder="Search"
                className=" text-start border-0 border-transparent outline-none "
              />
              <button className=" border-0 border-transparent  ">
                <CiSearch size="1.5rem" color="#000" />
              </button>
            </div>
            <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-webkit pt-2 ">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-center justify-start gap-2 "
                >
                  <label
                    onClick={(e) =>
                      handleFilterClick(filterItem.id, e.target.checked)
                    }
                    className="flex items-center justify-start gap-2 cursor-pointer "
                  >
                    <input type="checkbox" checked={isChecked} />

                    <span className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </span>
                    <span className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : filter.id === 173 ? (
        <div
          className={`grid  transition-all duration-300 ease-in-out text-slate-600 text-sm  ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-4  max-h-[150px] overflow-y-auto w-[235px] scrollbar-thin scrollbar-webkit pt-44 pb-2 ">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-center justify-start gap-2 "
                >
                  <label className="flex items-center justify-start gap-2 ">
                    <input type="checkbox" />
                    <h1 className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </h1>
                    <h1 className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </h1>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
          }`}
        >
          <div className="flex flex-col items-start justify-center gap-4 overflow-hidden w-full py-2">
            {options.map((filterItem) => (
              <div
                key={filterItem.id}
                className="flex items-center justify-start gap-2 "
              >
                <label className="flex items-center justify-start gap-2 ">
                  <input type="checkbox" />
                  <h1 className=" uppercase font-semibold text-slate-600">
                    {filterItem.name}
                  </h1>
                  <h1 className="font-semibold text-slate-600">
                    &#40;{filterItem.id}&#41;
                  </h1>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const isChecked = query.checked === "true"; // Convert string to boolean
  return {
    props: {
      isChecked,
    },
  };
}

export default Accordion;

// const FiltersComponent = () => {
//   const router = useRouter();
//   const { query } = router;

//   const addFilter = (filterName, filterValue) => {
//     const currentValues = query[filterName] ? [].concat(query[filterName]) : [];
//     const newValues = [...new Set([...currentValues, filterValue])]; // Ensure unique values
//     router.push({
//       pathname: router.pathname,
//       query: { ...query, [filterName]: newValues },
//     });
//   };

//   const removeFilter = (filterName, filterValue) => {
//     const currentValues = query[filterName] ? [].concat(query[filterName]) : [];
//     const newValues = currentValues.filter(value => value !== filterValue);
//     const newQuery = { ...query, [filterName]: newValues };
//     if (newValues.length === 0) {
//       delete newQuery[filterName];
//     }
//     router.push({
//       pathname: router.pathname,
//       query: newQuery,
//     });
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked, value } = event.target;
//     if (checked) {
//       addFilter(name, value);
//     } else {
//       removeFilter(name, value);
//     }
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="filter1"
//           value="value1"
//           onChange={handleCheckboxChange}
//           checked={query.filter1 && query.filter1.includes('value1')}
//         />
//         Filter 1 - Value 1
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="filter1"
//           value="value2"
//           onChange={handleCheckboxChange}
//           checked={query.filter1 && query.filter1.includes('value2')}
//         />
//         Filter 1 - Value 2
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="filter2"
//           value="value1"
//           onChange={handleCheckboxChange}
//           checked={query.filter2 && query.filter2.includes('value1')}
//         />
//         Filter 2 - Value 1
//       </label>
//       {/* Add more filters as needed */}
//     </div>
//   );
// };

// -------------or-----------------

// const handleCheckboxChange = (event, filterName, filterValue) => {
//   const { checked } = event.target;
//   if (checked) {
//     addFilter(filterName, filterValue);
//   } else {
//     removeFilter(filterName, filterValue);
//   }
// };

// return (
//   <div>
//     {filters.map((filter, index) => (
//       <label key={index}>
//         <input
//           type="checkbox"
//           name={filter.name}
//           value={filter.value}
//           onChange={(event) => handleCheckboxChange(event, filter.name, filter.value)}
//           checked={query[filter.name] && query[filter.name].includes(filter.value)}
//         />
//         {filter.label}
//       </label>
//     ))}
//   </div>
// );
// };

// export default FiltersComponent;
