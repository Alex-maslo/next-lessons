import React from "react";
import { getData } from "@/services/api.service";
import { ICar } from "@/models/ICar";
import Car from "@/components/Car";
import Navbar from "@/components/Navbar";

const Cars = async () => {
  const cars: ICar[] = await getData();

  return (
    <>
      <Navbar cars={cars} />
      <div className={`grid sm:grid-cols-5 gap-3 p-3  mt-16 `}>
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default Cars;
