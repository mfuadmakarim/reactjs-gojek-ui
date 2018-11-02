import React from 'react';
import image from './../../img/gorakyat.png';
const Inbox = () => {
  return(
    <div className="full">
        <div className="action-bar">
            <div className="title float-left">Inbox</div>
            
        </div>
        <div className="orders-body">
            <img src={image} alt="gojek" className="img-fluid mb-5" />
            <h5>You have no messages yet</h5>
            <p>When messages appear, you will see them here</p>
        </div>
    </div>
  );
};
export default Inbox;
