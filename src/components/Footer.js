import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
  min-height: 180px;
  background-color: #262626;

`
const DivContainer=styled.div`

display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:space-around;
flex-wrap:wrap;
min-width:250px;
@media screen and (max-width:768px){
  align-items:center;
}
`
const Container=styled.div`

display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;

@media screen and (max-width:768px){
  flex-direction:column;
}
`
const Text=styled.p`
font-weight:500;
font-size:16x;

`
const Footer = () => {
  return (
    <>
      <Div>
        <div className="container">
          <Container>
            <div >
              <div className="d-flex justify-content-center" style={{margin:'0 15px'}}>
                <StaticImage src="../images/logo.png" style={{ objectFit: "contain", height: "150px", width: "150px" }} />
              </div>
              <h5 className="text-white text-center">CHULLAH CHIMTA</h5>
            </div>
            <DivContainer>
                <Text className="text-white">Home</Text>
                <Text className="text-white">About us</Text>
                <Text className="text-white">Contact us</Text>

            </DivContainer>
            <DivContainer>
                <Text className="text-white">+91-123456123</Text>
                <Text className="text-white">info@chullahchimta.com</Text>
                <Text className="text-white">Follow us on <FontAwesomeIcon icon={faInstagram}/></Text>

            </DivContainer>
          </Container>
        </div>
      </Div>
      <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#262626", height: "40px",padding:'15px 0' }}>
        <p className="text-white text-center p-0 m-0" >Copyright 2021 - Chullah Chimta</p>
      </div>
    </>)
}

export default Footer
