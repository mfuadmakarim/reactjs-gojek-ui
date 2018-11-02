import React from 'react';
import image from './../../img/gorakyat.png';
const Orders = () => {
  return(
    <div className="full">
        <div className="action-bar">
            <div className="title float-left">Ongoing orders</div>
            <div className="button float-right"><i className="far fa-plus-square"></i></div>
        </div>
        <div className="orders-body">
            <img src={image} alt="gojek" className="img-fluid mb-5" />
            <h5>Let's order GO-JEK!</h5>
            <p>Our drivers will be very happy to help you.</p>
        </div>
    </div>
  );
};
export default Orders;
