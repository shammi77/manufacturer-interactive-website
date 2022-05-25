import React from "react";

const Part = ({ part }) => {
    const {name,img,description,minimumOrderQuantity,availableQuantity,price}=part;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
          <img className="" src={img} alt=''/>
        <h2 className=" text-2xl text-bold">Name: {name}</h2>
        <p>Description: {description}</p>
        <h4>Price: {price}</h4>
        <h4>Minimum Order Quantity: {minimumOrderQuantity}</h4>
        <h4>Available Quantity: {availableQuantity}</h4>
        <div className="card-actions">
          <button className="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
