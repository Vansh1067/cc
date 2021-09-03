import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'

import storyImage from '../images/storyImage.svg'

const SS = styled.div`
background : linear-gradient(to right, #E9FFE1, #98F3DD);
min-height: 500px;
`

const StorySection = () => {
  return (
    <SS>
      <div className="container">
        <div className="row p-5">
          <div className="col-12 col-md-8 pe-5">
            <h2>A Modern Cloud Kitchen By Belan Chakla.</h2>
            <h2 className="mb-4 p-1 d-inline-block text-white" style={{ backgroundColor: "#D9AC57" }}>Explore Our Story.</h2>
            <p style={{ lineHeight: "30px", textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt officiis illo voluptatem corrupti quibusdam ducimus voluptates delectus, quaerat est, rem sequi accusamus id dolore! Porro nihil neque quidem impedit quo nisi voluptatibus iste quam ut! Eius aliquam laudantium beatae explicabo nam tenetur. Commodi porro delectus perspiciatis recusandae saepe temporibus ex?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dolorum tempore suscipit! Ut error fuga quia nihil? Suscipit soluta dicta minima numquam earum natus eum esse quisquam aliquam voluptates! Minima, asperiores similique. Nam repudiandae eaque itaque obcaecati tempora sit soluta et odio. Officiis, velit dolorum. Voluptatum asperiores facere minima iste?
            </p>
          </div>
          <div className="col-12 col-md-4 ">
            <StaticImage

              height="100%"
              src="../images/logo.png"
            />
          </div>
        </div>
      </div>
    </SS>
  )
}

export default StorySection
