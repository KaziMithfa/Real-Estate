import React, { useEffect } from "react";
import Banner from "../components/Bannner/Banner";
import Estate from "../components/Estate/Estate";
import { use } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Real Estate";
  }, []);

  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Estate></Estate>
    </div>
  );
};

export default Home;
