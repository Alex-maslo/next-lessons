import React, { FC } from "react";
import { ICar } from "@/models/ICar";

type CarProps = {
  car: ICar;
};

const Car: FC<CarProps> = ({ car }) => {
  return (
    <div className="card bg-orange-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          #{car.id} {car.brand}
        </h2>
        <p>Price: {car.price}</p>
        <p>Year: {car.year}</p>
      </div>
    </div>
  );
};

export default Car;
