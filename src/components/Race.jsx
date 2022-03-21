import React from "react";

const race = () => {

  return (
    <>
      <div>
        <p>Whats hot?</p>
      </div>
      <div>
        <h3><b>Which race are you?</b></h3>
        <input>--</input>
        <h3>-Hosted by</h3>
        <output>Ezechiel Iti</output>
      </div>
      <div>
        <img>faa</img>
        <output>{total_vote}</output>
      </div>
      <div>
        <li>Finished Pollings</li>
        <li>Ongoing Pollings</li>
      </div>
      <li>{current_polls}</li>
    </>
  )
}