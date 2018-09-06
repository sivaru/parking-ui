import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { checkLoggedIn } from '../../redux/actionCreators/login'
import Loading from '../loading'

function authenticationWrapper(BaseComponent, adminOnly=false) {
  class Authenticate extends Component {
    state ={
      admin: false,
    }
    render() {
      /*if (!this.props.isLoggingIn) console.log('user:'); console.log(this.props.user)
      return (
        this.props.isLoggingIn ?
          <Loading /> :


          this.props.isAuthenticated ?
            adminOnly && this.props.user.admin ?
              <BaseComponent {...this.props} />
              : !adminOnly ?
                <BaseComponent {...this.props} /> :
                <Redirect to='/parking' /> : <Redirect to='/' />
      )*/
      if(this.props.isLoggingIn)
      return(<Loading />)
      if (!this.props.isAuthenticated) {
        return (<Redirect to='/login' />)
      } else {
        if (adminOnly && !this.state.admin)
          return (<Redirect to='/parking' />)
        if (adminOnly && this.state.admin || !adminOnly)
          return (<BaseComponent {...this.props} />)
    
      }



    }

    componentWillMount() {
        this.props.checkLoggedIn();

        let user = localStorage.getItem('user');
        let admin = user? JSON.parse(user).cleanUser.admin: false;
        
        this.setState({
          admin: admin
        })
        
    }
  }



  const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isLoggedIn,
    isLoggingIn: state.login.isLoggingIn,
    user: state.login.user
  })

  const mapDispatchToProps = {
    checkLoggedIn
  }


  return connect(mapStateToProps, mapDispatchToProps)(Authenticate)
}

export default authenticationWrapper;
