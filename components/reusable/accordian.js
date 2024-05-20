"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Accordion({ title, options, filter }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-fit h-fit">
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
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm   ${
              toggle
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
          >
            <div className="flex flex-col items-start justify-center gap-2 overflow-hidden w-full ">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-start justify-start gap-2 px-1 pt-2  w-full "
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
                </div>
              ))}
            </div>
          </div>
        ) : filter.id === 169 ? (
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              toggle
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
          >
            <div className="flex flex-col  items-start justify-center gap-6 overflow-hidden">
              <div className="flex flex-col  items-start justify-center gap-2">
                {options.map((filterItem) => (
                  <div key={filterItem.id}>
                    <div className="flex items-center justify-start gap-2 ">
                      <input type="checkbox" />
                      <h1 className=" uppercase font-semibold text-slate-600">
                        {filterItem.name}
                      </h1>
                      <h1 className="font-semibold text-slate-600">
                        &#40;{filterItem.id}&#41;
                      </h1>
                    </div>
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
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              toggle
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
          >
            <div className="flex flex-col items-start justify-center gap-6 overflow-hidden ">
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
              <div className="flex flex-col gap-2">
                {options.map((filterItem) => (
                  <div
                    key={filterItem.id}
                    className="flex items-center justify-start gap-2 "
                  >
                    <input type="checkbox" />
                    <h1 className=" uppercase font-semibold text-slate-600">
                      {filterItem.name}
                    </h1>
                    <h1 className="font-semibold text-slate-600">
                      &#40;{filterItem.id}&#41;
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              toggle
                ? `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
            }`}
          >
            <div className="flex flex-col items-start justify-center gap-2 overflow-hidden w-full">
              {options.map((filterItem) => (
                <div
                  key={filterItem.id}
                  className="flex items-center justify-start gap-2 "
                >
                  <input type="checkbox" />
                  <h1 className=" uppercase font-semibold text-slate-600">
                    {filterItem.name}
                  </h1>
                  <h1 className="font-semibold text-slate-600">
                    &#40;{filterItem.id}&#41;
                  </h1>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Accordion;
