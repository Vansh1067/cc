import React from 'react'
import styled from 'styled-components'

import HeroImage from '../images/herosection.png'

const HS = styled.div`
  background-image: url(${HeroImage});
  min-height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const H5 = styled.h5`

  position : relative;
  display : flex;
  align-items : center;
  margin : 20px;

  ::before{
    content : "";
    height : 2px;
    width : 30px;
    background-color: brown;
    margin-right: 10px;
    
  }
  ::after{
    content : "";
    height : 2px;
    width : 30px;
    background-color: brown;
    margin-left: 10px;
    
  }
`

const HeroSection = () => {
  return (
    <HS className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 animate__animated animate__bounce animate__delay-1s">
            <h1 className="display-1 p-1 rounded m-0" style={{ backgroundColor: "white", color: "#D9AC57", transform: "rotate(2deg)", boxShadow: "12px 12px 2px 1px rgba(132, 92, 13, .2)" }}>Chullah</h1>
            <h1 className="display-1 py-2 px-5 rounded text-white m-0" style={{ backgroundColor: "#D9AC57", transform: "rotate(-5deg)", boxShadow: "12px 12px 2px 1px rgba(132, 92, 13, .2)" }}>Chimta
              <h6 className="fw-bold text-center" style={{ letterSpacing: "3px", wordSpacing: "5px", color: "#a46b00" }} >GHAR KA SWAD</h6></h1>

            <div>
              <H5 className="mt-5 fw-bold" style={{ color: "brown" }}>Coming Soon</H5>
            </div>
          </div>
        </div>
      </div>
    </HS>
  )
}

export default HeroSection
