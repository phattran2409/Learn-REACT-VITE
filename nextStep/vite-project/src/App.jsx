
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
const message = [
  "Learn React 😊",
  "Apply for job 😤",
  "invest your new income 🥂"
]

function App() {

  const [step,setStep]  = useState(1); 
  const [testOBJ , setTestOBJ] = useState({name : "Jonas"}) 
  const [isOpen , setIsopen] = useState(true);
  function handlePrevious() {
      if (step > 1) setStep(step -1)
  }

  function  handleNext(steps) {
    if(step < 3) setStep(step + 1 )
  
  }
  return (
   
      <div className="container">
        {isOpen ? (
          <button
            type="button"
            className="close"
            onClick={() => setIsopen(false)}
          >
            {" "}
            &times;
          </button>
        ) : (
          <button
            type="button"
            className="Open"
            onClick={() => setIsopen(true)}
          >
            Open{" "}
          </button>
        )}
        {isOpen && (
          <div className="steps">
            <ul className="numbers">
              <li className={step >= 1 ? "active" : ""}> 1 </li>
              <li className={step >= 2 ? "active" : ""}> 2 </li>
              <li className={step >= 3 ? "active" : ""}> 3 </li>
            </ul>

            <div className="message ">
              {" "}
              Step {step}: {message[step - 1]}
            </div>

            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                type="button"
                className="preBtn btn "
                onClick={() => handlePrevious()}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                type="button"
                className="nextBtn btn"
                onClick={() => handleNext()}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
  
  );
}


export default App