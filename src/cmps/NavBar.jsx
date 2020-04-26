import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class NavBar extends Component {
  state = { isOn: false }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClick)
    document.addEventListener("keydown", this.handlePress)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
    document.removeEventListener("keydown", this.handlePress)
  }
  handleClick = (event) => {
    if (!this.state.isOn) return
    this.toogleMemu()
  }
  handlePress = (event) => {
    if (event.keyCode === 27) {
      this.handleClick();
    }
  }
  toogleMemu = (event) => {
    setTimeout(()=> {
      this.setState({ isOn: !this.state.isOn })
      document.body.classList.toggle('menu-open');
    },1)
  }
  render() {
    const { isOn } = this.state
    const isOpen = isOn ? ' isOpen' : '';
    return (
      <div className="nav-bar-container">
        <nav className="width-container nav-bar flex bet">
          <Link className="bitcoin-menu" title="Home" to="/"><img src={require('../assets/svg/bitcoin-menu.svg')} alt="" /><span>Miss-Bitcoin.</span></Link>
          <div className={"nav-link-container flex col" + isOpen}>
            <NavLink title="Home" activeClassName="active" exact to="/"><img className="btn-img" src={require('../assets/svg/homepage.svg')} alt="" /><span>Home</span> </NavLink>
            <NavLink title="Contacts" activeClassName="active" exact to="/contact"><img className="btn-img" src={require('../assets/svg/user.svg')} alt="" /> <span>Contacts</span></NavLink>
            <NavLink title="Statistics" activeClassName="active" exact to="/statistic"><img className="btn-img" src={require('../assets/svg/line-chart.svg')} alt="" /> <span>Statistics</span></NavLink>
            <NavLink title="Sign-Up" activeClassName="active" exact to="/signup"><img className="btn-img" src={require('../assets/svg/log-in.svg')} alt="" /> <span>Sign-Up</span></NavLink>
          </div>
          <img onClick={this.toogleMemu} className={"hamburger" + isOpen} src={require('../assets/svg/menu.svg')} alt="" />
        </nav>
      </div>
    );
  };

}
