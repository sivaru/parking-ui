import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditUserForm from '../../components/usereditform'
import Loading from '../../components/loading'

import { getUserByID, updateUser } from '../../redux/actionCreators/users'

export class UserEditContainer extends Component {
  render() {
    return (
      this.props.isLoading ?
        <Loading /> :
        <div className='d-flex justify-content-center full-height'>
          <EditUserForm mySubmit={this.editAction} />
        </div>
    )
  }
  componentDidMount(){
    this.props.getUserByID(this.props.userId);
  }

  editAction = (values) => {
    this.props.updateUser(this.props.userId, values);
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading
})

const mapDispatchToProps = {
  getUserByID,
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer)
