'use client'
import PaginationProps from "@/utils/PaginationProps";
import React, { useState } from "react";



const Pagination:React.FC<PaginationProps> = ({activeButton, setActiveButton, handleButtonClick}) => {
const buttons = [1,2,3,4,5,6]
  return (
    <div className="flex justify-center gap-2 py-10">
      {buttons.map((button, i) => (
        <button className={`${activeButton === i ? 'bg-zinc-300 text-black transition-colors duration-300' : ''} text-white px-3 py-1 rounded-lg `} onClick={() => handleButtonClick(i)} key={i}>{button}</button>
      ))}
    </div>
  );
};

export default Pagination;
