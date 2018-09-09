import React from 'react'

import AddEditNewContainer from '../../containers/addeditnewcontainer'
import NavigationBar from '../../components/navigationbar/'
const AddEdditNewPage = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <AddEditNewContainer newId={props.match.params.id} />
    </React.Fragment>
  )
}

export default AddEdditNewPage
