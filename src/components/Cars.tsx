import { getData } from "@/services/api.service";
import Navbar from "@/components/Navbar";
import Car from "@/components/Car";
import { ICar } from "@/models/ICar";

export async function getServerSideProps() {
  const cars = await getData();

  return {
    props: { cars },
  };
}

const Cars = ({ cars }: { cars: ICar[] }) => {
  return (
    <>
      <Navbar cars={cars} />
      <div className={`grid sm:grid-cols-5 gap-3 p-3 mt-16`}>
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default Cars;
