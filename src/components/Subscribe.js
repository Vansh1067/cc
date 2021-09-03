import React from 'react'
import Styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import pattern from '../images/pattern.svg'
import subscribe from '../images/sub.png'

const Div = Styled.div`
  background: url(${pattern}), linear-gradient(90.05deg, #FF5D41 8.96%, #FF667A 84.28%);
  /* min-height: 200px; */
  width : 100%;
  border-radius : 20px;
`

const Subscribe = () => {
  return (

    <div className="container d-flex justify-content-center align-items-start flex-column py-5">
      <Div className="p-5">
        <h3 className=" text-white d-inline-block m-0 fw-bold" >Subscribe to get notified when we launch the website.</h3>
        <div id="emailHelp" className="form-text mb-5 text-light">Either email or phone or both are necessary to provide to be able to subscribe.</div>
        <form action="" className="row">
          <div className="col-md-4 col-12 my-2" >
            <label className="visually-hidden" for="inlineFormInputGroupUsername">Enter Email</label>
            <input type="text" className="form-control p-2" id="inlineFormInputGroupUsername" placeholder="Enter Email" />
          </div>
          <div className="col-md-2 col-12 my-2">
            <label className="visually-hidden" for="inlineFormInputGroupUsername">Phone</label>
            <input type="text" className="form-control p-2" id="inlineFormInputGroupUsername" placeholder="Phone" />
          </div>
          <div className="col-12 col-md-2 my-2">
            <button type="submit" className="btn btn-outline-light fw-bold rouned-0">Submit</button>
          </div>
          <div className="col-md-4 col-12">
            {/* <StaticImage src="../images/sub.png" height="100%" /> */}
          </div>
          <div id="emailHelp" className="form-text mb-3 text-light" style={{ color: "#A46B00" }}>We'll never share your details with anyone else.</div>
        </form>
      </Div>
    </div>

  )
}

export default Subscribe
