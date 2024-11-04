import React from "react";

const Home = () => {
  return (
    <div className="bg-background-primary dark:bg-background-secondary">
      <div className="h-[700px] bg-none">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          An svg of an image on the right, Logo on the left, some statement,
          some longer statement, join now, learn more
        </h1>
      </div>
      <div className="h-[100px] bg-background-secondary dark:bg-background-primary ">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          Some brand logos
        </h1>
      </div>
      <div className="h-[800px] bg-none">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          Nore than just a gym, a community
        </h1>
      </div>
      <div className="h-[700px] bg-background-secondary dark:bg-background-primary ">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          Our classes
        </h1>
      </div>
      <div className="h-[600px] bg-none">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          Prices
        </h1>
      </div>
      <div className="h-[600px] bg-background-secondary dark:bg-background-primary">
        <h1 className="text-4xl text-center font-bold text-brand-primary dark:text-brand-secondary">
          Join now to be healthy and conquer the world
        </h1>
      </div>
    </div>
  );
};

export default Home;
