import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const TermsConditions = () => {
  return (
    <div>
      <h1 className="text-center lg:font-bold font-medium lg:text-lg text-xs ">
        Terms & conditions
      </h1>

      <div className="card bg-base-100 w-96 lg:w-1/2 text-center mx-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            Have a look on this points
          </h2>
          <ol className="list-decimal list-outside pl-8 pt-3">
            <li className="relative">
              <span className="ml--6">
                You have to give two months of rent in advance as deposit
              </span>
            </li>
            <li className="relative">
              <span className="ml-6">
                If you are taking rent our property you have to maintain our
                furniture & other things. We have the authority to take
                financial steps against you if you do not maintain that
              </span>
            </li>
            <li className="relative">
              <span className="ml-6">
                You must maintain a good relationship with your neighbours
              </span>
            </li>

            <li className="relative">
              <span className="ml-6">
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
