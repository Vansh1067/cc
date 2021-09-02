import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  min-height: 300px;
  background: linear-gradient(90.05deg, #FF5D41 8.96%, #FF667A 84.28%);
`

const Zomato = () => {
  return (
    <Div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h6>Order Online</h6>
            <h2>Get Exclusive Discounts on Zomato and Swiggy</h2>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    </Div>
  )
}

export default Zomato
