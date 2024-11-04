import React from "react";

const Home = () => {
  return (
    <div>
      // Examples
      <div className="bg-background-primary text-text-primary">
        Light mode content
      </div>
      <div className="bg-background-secondary text-text-secondary">
        Dark mode content
      </div>
      <button className="bg-brand-primary hover:bg-brand-primaryLight text-text-secondary">
        Primary Button
      </button>
      <button className="bg-brand-secondary hover:bg-brand-secondaryLight text-text-secondary">
        Secondary Button
      </button>
    </div>
  );
};

export default Home;
