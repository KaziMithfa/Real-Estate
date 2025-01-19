import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions";
  }, []);

  return (
    <div>
      <h1 className="text-center lg:font-bold font-normal text-lg  ">
        Terms & conditions
      </h1>

      <div className="card bg-base-100 lg:w-96 lg:w-1/2 lg:text-center lg:mx-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            Have a look on this points
          </h2>
          <ol className="list-decimal list-outside lg:pl-8  pt-3 sm:text-xs">
            <li className="relative sm:text-xs">
              <span className="lg:ml-6  sm:text-xs ">
                You have to give two months of rent in advance as deposit
              </span>
            </li>
            <li className="relative sm:text-xs">
              <span className="lg:ml-6 ml-2">
                If you are taking rent our property you have to maintain our
                furniture & other things. We have the authority to take
                financial steps against you if you do not maintain that
              </span>
            </li>
            <li className="relative sm:text-xs">
              <span className="lg:ml-6 ml-2">
                You must maintain a good relationship with your neighbours
              </span>
            </li>

            <li className="relative sm:text-xs">
              <span className="lg:ml-6 ml-2">
                If you want to leave the residence you must give us information
                two months earlier regarding the issue.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
