import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="card-body mx-auto lg:w-1/2 md:w-3/4">
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
          name="name"
          type="email"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">photo URL</span>
        </label>
        <input
          name="photo"
          type="email"
          placeholder="photo URL"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>

      <Link className="mt-4" to="/login">
        Already have an accout please{" "}
        <button className="text-blue-900 lg:text-3xl ml-2"> Login</button>
      </Link>
    </form>
  );
};

export default Register;
