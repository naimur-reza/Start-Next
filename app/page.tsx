import Link from "next/link";
import React from "react";

// creating the interface for code auto complete


const page = async () => {

  return (
    <div className="flex items-center justify-center">
 
      <Link href={'/movies'} className="text-white border-2 p-2 border-white">Show Movies</Link>
      
    </div>
  );
};

export default page;
