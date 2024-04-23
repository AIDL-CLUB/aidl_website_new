import React, { useState } from "react";
import data from "./data";
import { FaCaretRight } from "react-icons/fa";
import { Container } from "react-bootstrap";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Container className="container mx-auto pt-10">
      <div id="FAQ" className="mt-0 justify-items-center gap-1 justify-items-center pt-10 text-gray-400 text-sm pb-8 sm:ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 font-normal text-white text-sm pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white pt-10 mt-10">
          Some FAQs
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-900 pl-4 pt-10">
        <div className="w-full max-w-3xl">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center my-3 px-4">
              <div className="flex items-center justify-between w-full border-b-2 border-rose-500">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#c59d5f]">
                  {item.title}
                </h2>
                <div
                  className={`text-2xl lg:text-4xl cursor-pointer opacity-90 transition duration-500 ${
                    selected === i ? "rotate-90" : "rotate-0"
                  }`}
                  onClick={() => toggle(i)}
                >
                  <FaCaretRight />
                </div>
              </div>
              <div
                className={`p-3 text-xl lg:text-2xl transition duration-500 ${
                  selected === i ? "block" : "hidden"
                } text-white`}
              >
                <h2 className="mb-2">{item.stitle}</h2>
                <p className="text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Faq;
