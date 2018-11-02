import React from 'react';
import logo from './../../img/logo.png';
const Splash = () => {
  return(
    <div className="splash-container">
      <div className="splash-logo">
        <img src={logo} className="img-fluid" alt="splash"/>
      </div>
    </div>
  );
};
export default Splash;
