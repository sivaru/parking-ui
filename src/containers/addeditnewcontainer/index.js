import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import { createNew, getNewById, resetNew, updateNew, resetNotifications } from '../../redux/actionCreators/news'

import AddEditNewForm from '../../components/addeditnewform'
import Loading from '../../components/loading'


export class AddEditNewContainer extends Component {

  notify = (success) => toast(
    success ?
      `The new was succesfully ${this.props.newId !== 'create' ? 'updated' : 'created'}`
      : this.props.errorMessage != '' ? this.props.errorMessage : 'There was an error', { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });

  render() {
    if (!this.props.isLoading) {
      this.props.successNotification ? this.notify(true) : '';
      this.props.errorNotification ? this.notify(false) : '';
    }

    return (

      this.props.isLoading ?
        <Loading /> :
        <div className="d-flex justify-content-center">
          <AddEditNewForm
            mySubmit={this.props.newId === 'create' ? this.props.createNew : this.props.updateNew}
            user={this.props.user}
            newId={this.props.newId}
            isEdit={this.props.newId !== 'create'} />
          <ToastContainer />
        </div>
    )
  }

  componentWillMount() {
    this.props.resetNotifications();

    if (this.props.newId !== 'create')
      this.props.getNewById(this.props.newId);
    else{
      this.props.resetNew();
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  isLoading: state.news.isLoading,
  successNotification: state.news.successNotification,
  errorNotification: state.news.errorNotification,
})

const mapDispatchToProps = {
  createNew,
  getNewById,
  resetNew,
  updateNew,
  resetNotifications
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditNewContainer)
