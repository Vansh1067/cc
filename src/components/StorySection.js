import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import storyImage from '../images/storyImage.svg'
import videoImage from '../video/video.gif'
import videoBorder from '../images/border.png'



const SS = styled.div`
min-height: 512px;
margin:0 2.6%;
background : linear-gradient(to right, #E9FFE1, #98F3DD);
padding-top:250px;
padding-bottom:40px;
position:relative;
top:-200px;
z-index:-10;
@media screen and (max-width:928px){
  margin:0;
}

`
const Row=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
`
const Content=styled.div`
flex:8;
min-width:300px;
margin:15px;
`
const VideoContent=styled.div`
flex:4;
min-width:300px;
margin:15px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
`

const StorySection = () => {
  return (
    <SS id="aboutus" >
      <div className="container">
        <Row >
          <Content>
            <h2>A Modern Cloud Kitchen By Belan Chakla.</h2>
            <h2 className="mb-4 p-1 d-inline-block text-white" style={{ backgroundColor: "#D9AC57" }}>Explore Our Story.</h2>
            <p style={{ lineHeight: "30px", textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis illo voluptatem corrupti quibusdam ducimus voluptates delectus, quaerat est, rem sequi accusamus id dolore! Porro nihil neque quidem impedit quo nisi voluptatibus iste quam ut! Eius aliquam laudantium beatae explicabo nam tenetur. Commodi porro delectus perspiciatis recusandae saepe temporibus ex?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dolorum tempore suscipit! Ut error fuga quia nihil? Suscipit soluta dicta minima numquam earum natus eum esse quisquam aliquam voluptates! Minima, asperiores similique. Nam repudiandae eaque itaque obcaecati tempora sit soluta et odio. Officiis, velit dolorum. Voluptatum asperiores facere minima iste?
            </p>
          </Content>
          <VideoContent>
             <img
              height="340px"
              width="220px"
              src={videoImage}
            /> 
            <img
              height="400px"
              width="300px"
              style={{position:'absolute'}}
              src={videoBorder}
            /> 
          </VideoContent>
        </Row>
      </div>
    </SS>
  )
}

export default StorySection
