import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Col} from 'react-bootstrap'


const CardDetail = (props) => {
  return (
    <>
    <Col md={4}>
      <Card>
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                {props.text}
                </Card.Text>
                <Button variant="primary">{props.buttonText}</Button>
            </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default CardDetail

