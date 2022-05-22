import React from 'react';

const FunctionClick = () => {
  const onClickButoon = () => {
    console.log('Click');
  };
  return (
    <>
      <button onClick={() => onClickButoon()}>Click</button>
    </>
  );
};

export default FunctionClick;
