import React from 'react'
import './App.css';

import { Col, Container, Row } from 'reactstrap';


export default function Contant() {
  return (
    <div>
        <Container>
      

        <Row style={{
      marginTop: '-450px',
        width: '100%' ,
        height: '100px',
        paddingLeft:'100px',
        backgroundColor: 'white',
        justifyContent: 'center',
         alignItems: 'center',
         display: 'flex'
               
               }}>
    <Col className="bg-light border" style={{
       padding:'20px'
    }}>
      
     Free shipping
     <p style={{color:'gray',fontSize:'15px',padding:'5px'}}>When you spend $80 or more</p>
    </Col>
    <Col className="bg-light border" style={{
       padding:'20px'
    }}>
    We are available 24/7
    <p style={{color:'gray',fontSize:'15px',padding:'5px'}}>Need help? contact us anytime

</p>
    </Col>
    <Col className="bg-light border" style={{
       padding:'20px'
    }}>
    Satisfied or return
    <p style={{color:'gray',fontSize:'15px',padding:'5px'}}>Easy 30-day return policy</p>
    </Col>
    <Col className="bg-light border" style={{
       padding:'20px'
    }}>
    100% secure payments
    <p style={{color:'gray',fontSize:'15px',padding:'5px'}}>Visa, Mastercard, Stripe, PayPal

</p>
    </Col>
  </Row>

        </Container>
    </div>
  )
}
