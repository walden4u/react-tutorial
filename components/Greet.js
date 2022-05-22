import React, { component } from "react";

const Greet = ({ name, heroName, children }) => {
  console.log(name, heroName);
  return (
    <>
      <h1>
        Hello {name} & {heroName}
      </h1>
      {children}
    </>
  );
};

// const Greet = () => <h1>Hello Arrow!</h1>;

export default Greet;
