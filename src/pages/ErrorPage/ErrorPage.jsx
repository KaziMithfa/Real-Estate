import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
