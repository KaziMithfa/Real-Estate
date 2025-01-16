import { useEffect, useState } from "react";

const Estate = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("../../../public/estates.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, [estates]);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      {estates.map((estate) => (
        <div key={estate.id} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={estate.image}
              alt="Shoes"
              className="rounded-xl w-[300px] h-[330px] object-cover "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{estate.estate_title}</h2>
            <div className="flex justify-between gap-x-5">
              <h1 className="lg:text-xl text-xs font-bold">{estate.id}</h1>
              <p className="lg:text-xl text-xs font-bold">
                {estate.segment_name}
              </p>
            </div>

            <p className="text-center text-[14px] font-normal">
              {estate.description}
            </p>

            <div className="flex justify-between gap-x-5">
              <h1 className="text-center text-xl font-semibold">
                Price: {estate.price} $
              </h1>
              <h3 className="text-center text-xl font-semibold">
                Status: {estate.status}
              </h3>
            </div>
            <div className="flex justify-start items-start">
              <h1 className=" text-xl font-semibold ">Area: {estate.area}</h1>
            </div>
            <div className="flex justify-start items-start">
              <h3 className=" text-xl font-semibold">
                Location: {estate.location}
              </h3>
            </div>

            <div className="flex justify-evenly gap-4 font-semibold text-xs lg:text-xl">
              {estate.facilities.map((facility) => (
                <p key={facility.idx}>{facility}</p>
              ))}
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">View Property</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Estate;
