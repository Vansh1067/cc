import React, { useEffect } from 'react'
import styled from 'styled-components'

const Counter = styled.div`
.container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  /* padding: 1em; */
  text-transform: capitalize;
  background-color:#D9AC57;

  position: relative;
}

li:before{
  position: absolute;
  top: -3px;
  left : -3px;
  z-index: -1;
  content : "";
  height: 100%;
  width: 100%;
  background-color: #234c9a;

}

li span {
  display: block;
  font-size: 4.5rem;
}

@media all and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  li {
    font-size: 1.125rem;
    padding: 0.75rem;
  }

  li span {
    font-size: 3.375rem;
  }
}

`

const fn = function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Sep 30, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day));
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
};

const WillBeOnlineIn = () => {


  useEffect(() => {
    fn();
  }, [])

  return (
    <div className="my-5 py-2 py-md-5">
      <div className="d-flex justify-content-center flex-column align-items-center mt-5">
        <p>Our website is under construction.</p>
        <h2 className="text-center py-1 px-2 d-inline-block  fw-bold text-white mb-4 mb-md-5" style={{ backgroundColor: "#D9AC57" }}>We Will be Online in</h2>
      </div>
      <Counter className="container mt-3 mt-md-5">
        <div id="countdown">
          <ul className="d-flex justify-content-center p-0">
            <li className="h4 p-2 p-md-3 mx-1 mx-md-3 text-center"><span id="days"></span>days</li>
            <li className="h4 p-2 p-md-3 mx-1 mx-md-3 text-center"><span id="hours"></span>Hours</li>
            <li className="h4 p-2 p-md-3 mx-1 mx-md-3 text-center"><span id="minutes"></span>Minutes</li>
            <li className="h4 p-2 p-md-3 mx-1 mx-md-3 text-center"><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
      </Counter>
    </div>
  )
}

export default WillBeOnlineIn
