import React from 'react';
import logo from './../../img/logo.png';
const Topbar = () => {
  return(
    <div>
      <div className="topbar-container">
          <div className="topbar-logo">
              <img alt="logo gojek" src={logo} className="img-fluid v-center"/>
          </div>
          <div className="topbar-points">
             <div className="icon-circle">
                <i className="fas fa-trophy"></i>
             </div>
             221 pts
          </div>
      </div>
    </div>
  );
};
export default Topbar;
