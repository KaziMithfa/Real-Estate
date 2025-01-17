import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const Id = parseInt(id);

  const estateDetails = estates.find((estate) => estate.id === Id);

  return (
    <div>
      <h1 className="text-center lg:font-bold font-normal lg:text-xl text-xs">
        Here is the details description for the Estate you looking for is given
        below
      </h1>

      <div className="card bg-base-100 w-full shadow-xl text-center">
        <figure className="px-10 pt-10">
          <img
            src={estateDetails.image}
            alt="Shoes"
            className="rounded-xl w-[300px] h-[330px] object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estateDetails.estate_title}</h2>
          <div className="flex justify-between gap-x-5">
            <h1 className="lg:text-xl text-xs font-bold">{estateDetails.id}</h1>
            <p className="lg:text-xl text-xs font-bold">
              {estateDetails.segment_name}
            </p>
          </div>

          <p className="text-center text-[14px] font-normal">
            {estateDetails.description}
          </p>

          <div className="flex justify-between gap-x-5">
            <h1 className="text-center text-xl font-semibold">
              Price: {estateDetails.price} $
            </h1>
            <h3 className="text-center text-xl font-semibold">
              Status: {estateDetails.status}
            </h3>
          </div>
          <div className="flex justify-start items-start">
            <h1 className=" text-xl font-semibold ">
              Area: {estateDetails.area}
            </h1>
          </div>
          <div className="flex justify-start items-start">
            <h3 className=" text-xl font-semibold">
              Location: {estateDetails.location}
            </h3>
          </div>

          <div className="flex justify-evenly gap-4 font-semibold text-xs lg:text-xl">
            {estateDetails.facilities.map((facility) => (
              <p key={facility.idx}>{facility}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
