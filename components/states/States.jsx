import React from "react";
import Header from "../Header";
import "./States.css";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
  }
  state = {
    states: window.cs142models.statesModel(),
  };

  render() {
    return (
      <div>
        <Header />
        <p className="prob2-title">
          Replace this with the code for CS142 Project #4, Problem #2
        </p>
        <div>
          {this.state.states.map((el) => {
            return <div className="states">{el}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default States;
