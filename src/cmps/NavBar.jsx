import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class NavBar extends Component {
  state = { isOpen: false, isOnLine: null,  id: null }
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    // const id = this.props.match.params.id;
    // this.setId(id)
    var isOnLine;
    if (navigator.onLine) {
      isOnLine = true
    } else {
      isOnLine = false
    }
    this.setState({isOnLine})
    window.addEventListener('offline',(e) => { this.setState({isOnLine: false}) });
    window.addEventListener('online', (e) => { this.setState({isOnLine: true})});
    document.addEventListener("click", this.handleClick)
    document.addEventListener("keydown", this.handlePress)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
    document.removeEventListener("keydown", this.handlePress)
    window.removeEventListener('offline', (e) => { this.setState({isOnLine: false}) });
    window.removeEventListener('online', (e) => { this.setState({isOnLine: true}) });
  }
  setId = (id) => {
    this.setState({ id});
  }
  handleClick = (event) => {
    if (!this.state.isOpen) return
    this.toogleMemu()
  }
  handlePress = (event) => {
    if (event.keyCode === 27) {
      this.handleClick();
    }
  }
  
  toogleMemu = (event) => {
    setTimeout(()=> {
      this.setState({ isOpen: !this.state.isOpen })
      document.body.classList.toggle('menu-open');
    },1)
  }
  render() {
    const { isOpen, isOnLine } = this.state
    const openMenu = isOpen ? ' open-menu' : '';
    const offLine = isOnLine ? '' : ' off-line' 
    return (
      <div className={"nav-bar-container" + offLine}>
        <nav className="width-container nav-bar flex bet">
          <Link className="bitcoin-menu" title="Home" to="/"><img src={require('../assets/svg/bitcoin-menu.svg')} alt="" /><span>Miss-Bitcoin.</span></Link>
          <div className={"nav-link-container flex col" + openMenu}>
            <NavLink title="Home" activeClassName="active" exact to="/"><img className="btn-img" src={require('../assets/svg/homepage.svg')} alt="" /><span>Home</span> </NavLink>
            <NavLink title="Contacts" activeClassName="active" exact to="/contact"><img className="btn-img" src={require('../assets/svg/user.svg')} alt="" /> <span>Contacts</span></NavLink>
            <NavLink title="Statistics" activeClassName="active" exact to="/statistic"><img className="btn-img" src={require('../assets/svg/line-chart.svg')} alt="" /> <span>Statistics</span></NavLink>
            <NavLink title="Sign-Up" activeClassName="active" exact to="/signup"><img className="btn-img" src={require('../assets/svg/log-in.svg')} alt="" /> <span>Sign-Up</span></NavLink>
          </div>
          <img onClick={this.toogleMemu} className={"hamburger" + openMenu} src={require('../assets/svg/menu.svg')} alt="" />
        </nav>
      </div>
    );
  };

}
