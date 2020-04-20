import React from 'react';
import { NavLink } from 'react-router-dom';


export default (props) => {
  return (
    <nav className="NavBar">
      <NavLink activeClassName="active" exact to="/">Home</NavLink> | {' '}
      <NavLink activeClassName="active" exact to="/contact">Contacts</NavLink> | {' '} 
      <NavLink activeClassName="active" exact to="/statistic">Statistics</NavLink>
    </nav>
  );
};
