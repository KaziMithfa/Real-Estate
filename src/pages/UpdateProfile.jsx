import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <form className="card-body lg:w-1/2 md:w-3/4 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Image Link</span>
        </label>
        <input
          type="text"
          name="image link"
          placeholder="image link"
          value={"https:kafkak@49.com"}
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control mt-6">
        <button className="btn btn-primary">Update</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
