import React from "react";

const CatItem = ({ cat }) => {
  const { breed, country, origin, pattern } = cat;
  return (
    <>
      <h4>{breed}</h4>
      <div>{country}</div>
      <div>{origin}</div>
      <div>{pattern}</div>
    </>
  );
};

export default CatItem;
