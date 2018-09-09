import React from 'react'

import { CardFooter, Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const New = ({ _new }) => {
  return (

    <Card>
      <CardBody>
        <CardTitle>
          {_new.title}
        </CardTitle>
        <CardText>
          {_new.text}
        </CardText>
        <CardText>
         <small> Published by {_new.author.firstName} on: {new Date(_new.created).toLocaleDateString()}</small>
        </CardText>
      </CardBody>

    </Card>

  )
}

export default New
