import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 color bg-base-200">
      <p className="bg-[#D72050] py-1 px-3 text-base-100">Latest</p>
      <Marquee className="space-x-10" pauseOnHover={true}>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          dolores.
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          dolores.
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          dolores.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
