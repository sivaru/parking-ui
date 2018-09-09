import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import { getNews } from '../../redux/actionCreators/news'
import Loading from '../../components/loading'
import SimpleSlider from '../../components/slider'


export class NewsContainer extends Component {
  

  render() {
    return (
      this.props.isLoading ? <Loading /> :
        <Container className='margin-t-b shadow border white-background p-4'>
          <div className='d-flex justify-content-center'>
            <h2>News</h2>
          </div>
          <SimpleSlider carouselItems={this.props.news}/>
        </Container>
    )
  }

  componentDidMount() {
    this.props.getNews();
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.news.isLoading,
  news: state.news.elements
})

const mapDispatchToProps = {
  getNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
