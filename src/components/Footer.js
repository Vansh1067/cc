import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Div = styled.div`
  min-height: 180px;
  background-color: #D9AC57;

`

const Footer = () => {
  return (
    <>
      <Div>
        <div className="container">
          <div className="row" >
            <div className="col-12" >
              <div className="d-flex justify-content-center mt-3">
                <StaticImage src="../images/logo.png" style={{ objectFit: "contain", height: "150px", width: "150px" }} />
              </div>
              <h5 className="text-white text-center">CHULLAH CHIMTA</h5>
            </div>
          </div>
        </div>
      </Div>
      <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#a46b00", height: "40px" }}>
        <p className="text-white text-center p-0 m-0" >Copyright 2021 - Chullah Chimta</p>
      </div>
    </>)
}

export default Footer
