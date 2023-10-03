import Link from "next/link";
import React from "react";

// creating the interface for code auto complete


const page = async () => {

  return (
    <div>
    
      <Link href={'/movies'} className="btn btn-outline">Show Movies</Link>
      
    </div>
  );
};

export default page;
