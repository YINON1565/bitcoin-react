import React from 'react';
import { NavLink } from 'react-router-dom';


export default (props) => {
  return (
    <div className="nav-bar-container">
      <nav className="width-container nav-bar flex bet">
        <NavLink title="Home" activeClassName="active" exact to="/"><img className="btn-img" src={require('../assets/svg/homepage.svg')} alt="" /> </NavLink>
        <NavLink title="Contacts" activeClassName="active" exact to="/contact"><img className="btn-img" src={require('../assets/svg/user.svg')} alt="" /></NavLink>
        <NavLink title="Statistics" activeClassName="active" exact to="/statistic"><img className="btn-img" src={require('../assets/svg/line-chart.svg')} alt="" /></NavLink>
        <NavLink title="SignUp" activeClassName="active" exact to="/signup"><img className="btn-img" src={require('../assets/svg/log-in.svg')} alt="" /></NavLink>
      </nav>
    </div>
  );
};
