import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./MealCard.css";

const MealCard = ({ name, image, id }) => {
  return (
    <div className="relative parent p-3 cursor-pointer">
      <img
        className="h-[300px] object-cover image rounded-lg border-double border-8 border-amber-900 hover:rounded-3xl hover:outline-dashed outline-4 outline-orange-800"
        src={image}
        alt=""
      />
      <Link to={`/detail/${id}`}>
        <span className="icon bg-amber-900 rounded-[50%] flex align-middle items-center justify-center h-10 w-10 absolute top-[45%] left-[45%] animate-bounce outline-double outline-8 outline-amber-900">
          <GiKnifeFork className="text-3xl text-white" />
        </span>
      </Link>
    </div>
  );
};

export default MealCard;
