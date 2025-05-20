import React from "react";

function CoctailItem(props) {
  const { image, name } = props;
  return (
    <article className="coctail-item">
      <span>
        {" "}
        <img src={image} className="coctail-img" />{" "}
      </span>
      <h5> {name} </h5>
    </article>
  );
}

export default CoctailItem;
