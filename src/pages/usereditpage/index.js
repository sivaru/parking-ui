import React from 'react'

import UserEditContainer from '../../containers/usereditcontainer'
import NavigationBar from '../../components/navigationbar/'
const UserEditPage = (props) => {
  return (
    <div>
      <NavigationBar />
      <UserEditContainer userId={props.match.params.id} />
    </div>
  )
}

export default UserEditPage
