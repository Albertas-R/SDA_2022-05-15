import React from "react";

const Title = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </>
  );
};

export default Title;
