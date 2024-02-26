import React from 'react'
import './App.css';
import { Button } from 'reactstrap';


export default function Title() {
  return (
    <div>
        <div className='content'>
            <img alt='' src='./image/electronic-store-brand-logo-00.png' style={{
                margin: '20px'
            }}></img>
            <h1 style={{
                padding: '40px',
                fontSize: '40px'
            }}> The best home entertainment system is here</h1>
            <p style={{
                color: 'gray',
                padding:'20px',
                marginTop: '-40px'
            }}>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
            <Button style={{
                color: 'blue',
                backgroundColor:'white',
                borderRadius: 'none'
                
            }}>
               shop now
  </Button>
        </div>
    </div>
  )
}
