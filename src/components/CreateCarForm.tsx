import React from "react";
import Form from "next/form";
import { saveCar } from "@/services/serverAction";

const CreateCarForm = () => {
  return (
    <div className={`flex justify-center `}>
      <div className="mt-3 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Form action={saveCar} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="brand"
              className="input input-bordered"
              name="brand"
              // required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered"
              name="price"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year</span>
            </label>
            <input
              type="text"
              placeholder="year"
              className="input input-bordered"
              name="year"
              // required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Create car</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateCarForm;
