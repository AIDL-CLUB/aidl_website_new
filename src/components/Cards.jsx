import React from "react";

import AS from '../components/images/AS.png';
import MS from '../components/images/MS.png';
import SMK from '../components/images/SMK.png';
import PC from '../components/images/PC.png';
import SV from '../components/images/SV.png';

const Cards = () => {
  const techs = [
    {
      id: 1,
      src: SV,
      title: "Dr. Shubhangi Vaikole",
      style: "shadow-blue-600",
      posi: "Convener of the Club",
    },
    {
      id: 2,
      src: SMK,
      title: "Dr. S. M. Khot",
      style: "shadow-blue-600",
      posi: "Principal",
    },
    {
      id: 3,
      src: MS,
      title: "Dr. Milind Shah",
      style: "shadow-blue-600",
      posi: "Dean of Academics",
    },
    {
      id: 4,
      src: PC,
      title: "Dr. Pranali Choudhari",
      style: "shadow-blue-600",
      posi: "Member",
    },
    {
      id: 5,
      src: AS,
      title: "Mr. Amroz Siddiqui",
      style: "shadow-blue-600",
      posi: "Member",
    },
  ];

  return (
    <div className="my-20 mt-10 bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-2 sm:p-10">
        <div>
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-white">
            The People
          </h2>
          <p className="py-6 text-white">Driving Force behind the club...</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-30 px-12 sm:px-0 sm:py-100">
          {techs.map(({ id, src, title, style, posi }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-60 mx-auto" />
              <p className="mt-4 text-white">{title}</p>
              <p className="mt-4 text-white">{posi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
