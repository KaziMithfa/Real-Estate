import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LoginUser, signinwithGoogle, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    LoginUser(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message);
      });
  };

  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errormessage = error.message;
        console.log(errormessage);
      });
  };

  const handleGoogleSignIn = () => {
    signinwithGoogle()
      .then((result) => {
        toast.success("you have logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">please login</h2>

        <form
          onSubmit={handleLogin}
          className="card-body lg:w-1/2 md:w-3/4 mx-auto"
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <div className="flex lg:flex-row flex-col items-center justify-center gap-y-1 lg:gap-x-4  ">
          <button onClick={handleGoogleSignIn} className="btn btn-primary ">
            Login With Google
          </button>
          <button onClick={handleGithubSignIn} className="btn btn-primary ">
            Login With Github
          </button>
        </div>

        <p className="text-center mt-4 ">
          Do not have an accout{" "}
          <Link className="text-blue-600 " to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
