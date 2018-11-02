import React from 'react';
const Navbar = (props) => {
  return(
    <div>
      <nav className="navbar-container">
        <ul>
          <li className={props.match.params.active == null ? 'active' : ''}>
            <a href="/"><i className="fas fa-home"></i>Home</a>
          </li>
          <li className={props.match.params.active === 'orders' ? 'active' : ''}>
            <a href="/orders"><i className="fas fa-list-alt"></i>Orders</a>
          </li>
          <li className={props.match.params.active === 'help' ? 'active' : ''}>
            <a href="/help"><i className="fas fa-question-circle"></i>Help</a>
          </li>
          <li className={props.match.params.active === 'inbox' ? 'active' : ''}>
            <a href="/inbox"><i className="fas fa-envelope"></i>Inbox</a>
          </li>
          <li className={props.match.params.active === 'account' ? 'active' : ''}>
            <a href="/account"><i className="fas fa-user"></i>Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
