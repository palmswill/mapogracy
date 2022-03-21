import React from "react";

const TotalVote = () => {
  //  fake data 3 lines
  const current_polls = "POLITIC";

  return (
    <section className="result-view">
     
      <div>
        <li>Finished Pollings</li>
        <li>Ongoing Pollings</li>
      </div>
      <li>Current polls</li>
      <li>{current_polls}</li>
    </section>
  )
}
export default TotalVote;
