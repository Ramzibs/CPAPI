import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'
function List() {
    const List =useSelector(state=>state.list)
  return (
    <div>
        <Row xs={1} md={4} className="g-4 m-auto">
  {List?.map((el, idx) => (
    <Col>
  
      <Card>
        
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
           <li>Username :  {el.username}</li>
           <li>Email    :{el.email}</li>
           <li>street   :{el.address.street}</li>
           <li>suite    :{el.address.suite}</li>
           <li>city     :{el.address.city}</li>
           <li>zipcode  :{el.address.zipcode}</li>
           <li>Lat :{el.address.geo.lat} |-Lng : {el.address.geo.lng}</li>





          </Card.Text>
        </Card.Body>
  
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default List