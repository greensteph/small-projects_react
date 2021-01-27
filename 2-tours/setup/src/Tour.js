import React, { useState } from "react";

const Tour = ({ id, image, price, info, name }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "see less" : "read more"}
          </button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
