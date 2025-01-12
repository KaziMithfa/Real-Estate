import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const photo = form.get("photo");
    const name = form.get("name");
    const password = form.get("password");

    if (password.length < 6) {
      const message = "The password must be at least 6 character long";
      toast.error(message);
      return;
    } else if (!/[A-Z]/.test(password)) {
      const message = "The password must have an uppercase letter";
      toast.error(message);
      return;
    } else if (!/[a-z]/.test(password)) {
      const message = "The password must have a lowercase letter";
      toast.error(message);
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser(name, "https://example.com/jane-q-user/profile.jpg").then(
          () => {
            console.log(result);
            const message =
              "The user has created account successfully with the name and photo URL";

            toast.success(message);
            navigate("/login");
          }
        );
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="card-body mx-auto lg:w-1/2 md:w-3/4"
      >
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
            type="text"
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
            type="text"
            placeholder="photo URL"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />

            <span
              className="absolute top-5 right-4 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <p className="text-center mt-4  ">
        Already have an accout{" "}
        <Link className="text-blue-600 " to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
