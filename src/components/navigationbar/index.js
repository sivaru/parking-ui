import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu

} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './navigationbar.scss'
import logout from '../../redux/actionCreators/logout'


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (this.props.isLoading ? '' :
      <Navbar className='navigation-bar' light expand='md'>
        <NavbarBrand className='navigation__brand'>
          <div className='navigation__logo' />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {this.props.user.admin ?
              <React.Fragment>
                <NavItem onClick={this.toggle}>
                  <Link className='nav-link navigation-bar__nav-link' to='/users'>Users</Link>
                </NavItem>
                <NavItem onClick={this.toggle}>
                  <Link className='nav-link navigation-bar__nav-link' to='/news'>News</Link>
                </NavItem>
              </React.Fragment> : ''}
            <NavItem onClick={this.toggle}>
              <Link className='nav-link navigation-bar__link' to='/parking'>Parking Spaces</Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.user.firstName}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to={`/users/${this.props.user.id}`}>  Edit my profile </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.logout}>
                  Log out
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

}
const mapStatetoProps = (state) => ({
  user: state.login.user,
  isLoading: state.login.isLoggingIn
})

const mapDispatchToProps = {
  logout
}
export default connect(mapStatetoProps, mapDispatchToProps)(NavigationBar);