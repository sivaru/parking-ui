import React from 'react'

import NewsListContainer from '../../containers/newslistcontainer'
import NavigationBar from '../../components/navigationbar/'


const NewsPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <NewsListContainer />
    </React.Fragment>
  )
}

export default NewsPage
