import React from 'react'
import Styled from 'styled-components'
import pattern from '../images/pattern.svg'

const Div = Styled.div`
  background: url(${pattern}), linear-gradient(270deg, rgba(255, 251, 166, 0.8) 3.72%, rgba(255, 216, 141, 0.8) 93.82%);
  min-height: 200px;
`

const Subscribe = () => {
  return (
    <Div>
      <div className="container d-flex justify-content-center align-items-start flex-column py-5">
        <h5 className="fw-bold" style={{ color: "#a46b00" }}>Subscribe to get notified when we launch the website.</h5>
        <form action="" class="row">
          <div class="col-10">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">Enter Email</label>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Email" />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-outline-danger fw-bold rouned-0">Submit</button>
          </div>
        </form>
      </div>
    </Div>
  )
}

export default Subscribe
