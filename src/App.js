import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [calculate, setCalculation] = useState("");

  var compute = function (n1, n2, calculateType) {
    axios
      .post(
        `https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/${calculateType}`,
        {
          n1: n1,
          n2: n2
        }
      )
      .then(function (response) {
        console.log(response);
        setCalculation("");
        setCurrentValue(0);
        setNewValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  var calculation = function () {
    if (calculate === "+") {
      compute(currentValue, newValue, "add");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/add
    } else if (calculate === "-") {
      compute(currentValue, newValue, "substract");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/subtract
    } else if (calculate === "*") {
      compute(currentValue, newValue, "multiply");
      // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/multiply
    } else if (calculate === "/") console.log("/");
    compute(currentValue, newValue, "divide");
    // https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/divide
  };

  return (
    <div className="App">
      <div id="root">
        <div className="App">
          {<h3 className="">{currentValue}</h3>}
          {<h3>{calculate}</h3>}
          {<h3 className="">{newValue}</h3>}
          <div>
            <button className="" onClick={() => setNewValue(newValue * 10 + 7)}>
              {" "}
              7{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 8)}>
              {" "}
              8{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 9)}>
              {" "}
              9{" "}
            </button>
          </div>
          <div>
            <button className="" onClick={() => setNewValue(newValue * 10 + 4)}>
              {" "}
              4{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 5)}>
              {" "}
              5{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 6)}>
              {" "}
              6{" "}
            </button>
          </div>
          <div>
            <button className="" onClick={() => setNewValue(newValue * 10 + 1)}>
              {" "}
              1{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 2)}>
              {" "}
              2{" "}
            </button>
            <button className="" onClick={() => setNewValue(newValue * 10 + 3)}>
              {" "}
              3{" "}
            </button>
          </div>
          <div>
            <button onClick={() => setNewValue(newValue * 10 + 0)}> 0 </button>
          </div>
          <div>
            <button
              onClick={() => {
                setCurrentValue(newValue);
                setNewValue(0);
                setCalculation("+");
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setCurrentValue(newValue);
                setNewValue(0);
                setCalculation("-");
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCurrentValue(newValue);
                setNewValue(0);
                setCalculation("*");
              }}
            >
              *
            </button>
            <button
              onClick={() => {
                setCurrentValue(newValue);
                setNewValue(0);
                setCalculation("/");
              }}
            >
              /
            </button>
          </div>
          <div>
            <button className="" onClick={() => calculation()}>
              {" "}
              ={" "}
            </button>
            <button
              className=""
              onClick={() => {
                setCalculation("");
                setCurrentValue(0);
                setNewValue(0);
              }}
            >
              {" "}
              C{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
