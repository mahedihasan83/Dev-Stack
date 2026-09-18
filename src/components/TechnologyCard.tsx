import React from "react";
import type { Technology } from "../types/Technology";
import { FcRating } from "react-icons/fc";
interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}
const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className=" card bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-8 h-8 object-contain"
          />
          <span className="badge badge-sm badge-info">{technology.badge}</span>
        </div>
        <h2 className="text-lg font-bold text-black mt-2">{technology.name}</h2>
        <p className="text-xs text-gray-500 leading-5 min-h-15">
          {technology.description}
        </p>

        <div className="flex items-center justify-between text-[11px] text-gray-500 border-t  border-gray-100 pt-3">
          <span className="badge badge-ghost badge-sm">
            {technology.category}
          </span>
          <span>{technology.difficulty}</span>
          <span className="flex items-center gap-1">
            <span>
              <FcRating />
            </span>
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`btn btn-sm w-full mt-2 ${isAdded ? "bg-gray-300 text-gray-600" : "bg-black text-white hover:bg-[#1e293b]"}`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
