import React from "react";

function ChildComponent(props) {
  return (
    <>
      <button onClick={() => props.greetHandler("child111")}>
        Greet Parent
      </button>
    </>
  );
}

export default ChildComponent;
