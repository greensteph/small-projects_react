import React, { useState } from "react";

const Tour = ({ id, image, price, info, name }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
