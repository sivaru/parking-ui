import React from 'react'
import UsersContainer from '../../containers/userscontainer'
import NavigationBar from '../../components/navigationbar/'
const UsersPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <UsersContainer />
    </React.Fragment>
  )
};

export default UsersPage