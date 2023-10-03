import Link from "next/link";
import React from "react";

// creating the interface for code auto complete


const page = async () => {

  return (
    <div>
      All User
      <br />
      <Link href={'/users'}>User</Link>
    </div>
  );
};

export default page;
