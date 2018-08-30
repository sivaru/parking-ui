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
          <Row>
            <Col md='3'>Id</Col>
            <Col md='3'>Name</Col>
            <Col md='3'>User Type</Col>
            <Col md='3'>Actions</Col>
          </Row>
          {this.props.elements.map(this.generateUserRow)}
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
