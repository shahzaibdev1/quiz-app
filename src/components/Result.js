import React from "react";

function Result(props) {
  let passOrFail;
  let result;
  if (props.points >= 2) {
    result = "You have successfully passed the test";
    passOrFail = true;
  } else {
    result = "You have failed the test";
    passOrFail = false;
  }
  return (
    <div>
      <h3 className={`result ${passOrFail ? "fail" : "pass"}`}>{result}</h3>
    </div>
  );
}

export default Result;
