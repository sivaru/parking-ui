import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'

import UserRow from '../../components/userrow'
import Loading from '../../components/loading'

import './userscontainer.scss'

import { getAllUsers, deleteUser } from '../../redux/actionCreators/users'

export class index extends Component {
  render() {
    return (
      this.props.isLoading ?
        <Loading /> :
        <Container className='users-container'>
          <Container className='users-container__users-list border shadow'>
          <div className="d-flex justify-content-center users-container__heading margin-t-b black-bottom-border">
            <h2>Users list:</h2>
          </div>
            {this.props.elements.map(this.generateUserRow)}
          </Container>
        </Container>
    )
  }
  componentDidMount() {
    this.props.getAllUsers();
  }

  generateUserRow = (user) => <UserRow key={user._id} user={user} deleteUser={this.props.deleteUser} />
}

const mapStateToProps = (state) => ({
  elements: state.users.elements,
  isLoading: state.users.isLoading
})

const mapDispatchToProps = {
  getAllUsers,
  deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
