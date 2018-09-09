import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


import NewsRow from '../../components/newsrow'
import { getNews, deleteNew } from '../../redux/actionCreators/news'
import Loading from '../../components/loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './newslistcontainer.scss'


export class NewsListContainer extends Component {
  notify = (success) => toast(
    success ?
      `The new was succesfully deleted`
      : this.props.errorMessage, { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });

  render() {

    if (!this.props.isLoading) {
      this.props.successNotification ? this.notify(true) : '';
      this.props.errorNotification ? this.notify(false) : '';
    }
    return (
      this.props.isLoading ?
        <Loading /> :
        <Container className='news-list-container'>
          <Container className='news-list-container__news-list border shadow'>
            <div className="d-flex justify-content-center news-list-container__heading margin-t-b black-bottom-border">
              <h2>News list:</h2>
            </div>
            {this.props.news.map(this.generateNewsRow)}
            <div className="d-flex justify-content-center news-list-container__heading p-4 mb-4 black-bottom-border">
              <Link to='/news/create'>
              <Button>
                <FontAwesomeIcon icon='plus' />
              </Button>
              </Link>
            </div>
          </Container>
        <ToastContainer />
        </Container>
    )
  }
  componentDidMount() {
    if (this.props.news.length === 0)
      this.props.getNews();
  }
  generateNewsRow = (item) => <NewsRow key={item._id} _new={item} deleteNew={this.props.deleteNew}/>


}
const mapStateToProps = (state) => ({
  isLoading: state.news.isLoading,
  news: state.news.elements,
  successNotification: state.news.successNotification
})

const mapDispatchToProps = {
  getNews,
  deleteNew
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer)
