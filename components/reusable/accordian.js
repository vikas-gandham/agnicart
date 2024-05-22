"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Accordion({ title, options, filter }) {
  const router = useRouter();

  const handleFilterClick = (id) => {
    const query = { ...router.query };

    query[id] = !query[id];

    if (!query[id]) {
      delete query[id];
    }

    router.push(`/filter?id=${id}`, undefined, {
      shallow: true,
    });
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
                  <label
                    onClick={() => handleFilterClick(filterItem.id)}
                    className="flex items-center justify-start gap-2 "
                  >
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
                    onClick={() => handleFilterClick(filterItem.id)}
                    className="flex items-center justify-start gap-2 cursor-pointer "
                  >
                    <input type="checkbox" />

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
                  <label
                    onClick={() => handleFilterClick(filterItem.id)}
                    className="flex items-center justify-start gap-2 "
                  >
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
                <label
                  onClick={() => handleFilterClick(filterItem.id)}
                  className="flex items-center justify-start gap-2 "
                >
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
export default Accordion;
