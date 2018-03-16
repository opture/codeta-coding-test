import React from "react";

export default ({
  style = {},
  imageUrl = null,
  name = "",
  className = null
}) => {
  return (
    <div className={className}>
      <div className="card" style={style}>
        <img className="card-img-top" src={imageUrl} alt={imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};
