import react from "react";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="workout-planner">
        <h1> Workout Planner</h1>
        <div className="textarea"></div>
        <div>
       <textarea>Enter your instructions to create your workout plan and achieve your fitness goals.</textarea>
       </div>
        <div className="btn">
       <button>Generate</button>
       </div>
       </div>
    </div>
  );
}

export default App;
