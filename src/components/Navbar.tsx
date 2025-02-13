import React from "react";
import { ICar } from "@/models/ICar";

const Navbar = ({ cars }: { cars: ICar[] }) => {
  console.log(cars);
  return (
    <div className="flex justify-center navbar bg-primary text-primary-content   fixed top-0 left-0 w-full z-10">
      <p className="btn btn-ghost text-xl">{cars.length}</p>
    </div>
  );
};

export default Navbar;
