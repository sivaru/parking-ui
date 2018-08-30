import React from 'react'

import UserEditContainer from '../../containers/usereditcontainer'

const UserEditPage = (props) => {
  return (
    <div>
      <UserEditContainer userId={props.match.params.id} />
    </div>
  )
}

export default UserEditPage
