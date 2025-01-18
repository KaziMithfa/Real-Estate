import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LoginUser, signinwithGoogle, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    LoginUser(email, password)
      .then((result) => {
        if (location?.state) {
          navigate(location?.state);
        } else {
          navigate("/");
          toast.success("logged in successfully");
        }

        // navigate(location?.state ? location.state : "/");
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
        if (location?.state) {
          navigate(location?.state);
        } else {
          navigate("/");
          toast.success("logged in successfully");
        }
      })
      .catch((error) => {
        const errormessage = error.message;
        toast.error(errormessage);
      });
  };

  const handleGoogleSignIn = () => {
    signinwithGoogle()
      .then((result) => {
        if (location?.state) {
          navigate(location?.state);
        } else {
          navigate("/");
          toast.success("logged in successfully");
        }
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message);
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
