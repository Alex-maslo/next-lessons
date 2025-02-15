import React from "react";
import { ICar } from "@/models/ICar";
import Link from "next/link";

const Navbar = ({ cars }: { cars: ICar[] }) => {
  return (
    <div className="flex justify-center navbar bg-primary text-primary-content  fixed top-0 left-0 w-full z-10">
      <Link href={"/"} className="btn btn-ghost text-xl">
        Cars{" "}
      </Link>
      <p className="btn btn-ghost text-xl">All cars: {cars.length}</p>
      <Link href={"/create-car"} className="btn btn-ghost text-xl">
        Create car
      </Link>
    </div>
  );
};

export default Navbar;
