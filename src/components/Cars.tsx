import React from "react";
import Navbar from "@/components/Navbar";
import { getData } from "@/services/api.service";
import Car from "@/components/Car";
import { ICar } from "@/models/ICar";

const Cars = async () => {
  const cars: ICar[] = await getData();
  cars.sort((a, b) => b.id - a.id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">
      <Navbar cars={cars} />

      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
