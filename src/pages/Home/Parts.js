import React from 'react';

const Parts = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://i.ibb.co/F0SsCQw/images-1.jpg" alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Monitor</h2>
          <p></p>
          <div className="card-actions">
            <button className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>
      
    );
};

export default Parts;