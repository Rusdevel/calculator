import './App.css';
import {useState, useEffect} from 'react';
import { NumericFormat } from 'react-number-format';

function App() {
  //предварительное состояние
  const [preState, setPreState] = useState("");
  //текущее состояния
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  //позволяет вводить в инпут данные включая
  const inputNum = (e) => {
if (curState.includes(".") && e.target.innerText === ".") return;

if (total) {
  setPreState("")
}
//позволяет вводить данные, что бы цифры следовали друг за другом
curState 
? setCurState((pre) => pre + e.target.innerText) 
: setCurState(e.target.innerText)
setTotal(false);
  };
  
// позволяет видеть вводимые числа
  useEffect(() => {
setInput(curState)
  }, [curState]) 
// ставит 0 по умолчанию в инпут
useEffect(() => {
  setInput("0");
}, [])

  const operatorType = (e) => {
setTotal(false)
setOperator(e.target.innerText)
if(curState === "") return
if(preState !== "") {
  equals()
}else{
  setPreState(curState)
  setCurState("")
} 

  };
// функция равно
  const equals = (e) => {
if (e?.target.innerText === "="){
setTotal(true)
  };
  let cal 
  switch (operator) {
    case "/":
      cal = String(parseFloat(preState) / parseFloat(curState));
      break;
      case "+":
    cal = String(parseFloat(preState) + parseFloat(curState));
      break;
  case "X":
    cal = String(parseFloat(preState) * parseFloat(curState));
      break;
      case "-":
    cal = String(parseFloat(preState) - parseFloat(curState));
      break;
      default:
        return
  }
  setInput("")
  setPreState(cal)
  setCurState("")
}
// -/+
  const minusPlus = () => {
if (curState.charAt(0) === "-"){
  setCurState(curState.substring(1))
} else {
  setCurState("-"+ curState);
}
  };
// проценты
  const precent = () => {
preState ? setCurState(String(parseFloat(curState)/ 100 * preState)) : setCurState(String(parseFloat(curState) / 100))
  };
// сброс
  const reset = () => {
    setPreState("0")
setCurState("")
setInput("0")
  };

  return (
    <div className="container">
<div className="wrapper">
  <div className="screen">{input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}</div>
  <div className="btn light-gray" onClick ={reset}>AC</div>
  <div className="btn light-gray" onClick ={precent}>%</div>
  <div className="btn light-gray" onClick ={minusPlus}>+/-</div>
  <div className="btn orange" onClick ={operatorType}>/</div>
  <div className="btn" onClick ={inputNum}>7</div>
  <div className="btn" onClick ={inputNum}>8</div>
  <div className="btn" onClick ={inputNum}>9</div>
  <div className="btn orange" onClick ={operatorType}>X</div>
  <div className="btn" onClick ={inputNum}>4</div>
  <div className="btn" onClick ={inputNum}>5</div>
  <div className="btn" onClick ={inputNum}>6</div>
  <div className="btn orange" onClick ={operatorType}>+</div>
  <div className="btn" onClick ={inputNum}>1</div>
  <div className="btn" onClick ={inputNum}>2</div>
  <div className="btn" onClick ={inputNum}>3</div>
  <div className="btn orange" onClick ={operatorType}>-</div>
  <div className="btn zero" onClick ={inputNum}>0</div>
  <div className="btn" onClick ={inputNum}>.</div>
  <div className="btn" onClick ={equals}>=</div>

</div>
    </div>
  );
}

export default App;
