// import './App.css';
// import axios from 'axios';
// import { useState } from 'react';
//
// function App() {
//   const [userInput, setUserInput] = useState('');
//   const [chatBotResponse, setChatBotResponse] = useState('');
//   const askChatbot = async () => {
//     try {
//       const res = await axios.post('http://localhost:3001/workout', {userInput});
//       setChatBotResponse(res.data.result);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className="App">
//       <div className="workout-planner">
//         <h1> Workout Planner</h1>
//         <div className="textarea"></div>
//         <div>
//           <textarea value={userInput} onChange={(event => setUserInput(event.target.value))} />
//         </div>
//         <div className="btn">
//           <button onClick={askChatbot}>Generate</button>
//         </div>
//         <div className="btn">
//           {chatBotResponse}
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default App;

// App.js
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [chatBotResponse, setChatBotResponse] = useState('');

  const askChatbot = async () => {
    try {
      const res = await axios.post('http://localhost:3001/workout', { userInput });
      setChatBotResponse(res.data.result); // Access result directly
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="workout-planner">
        <h1>Workout Planner</h1>
      </div>

      <div className='workout-planner2'>
        <div className='workout-thread'>
            <h4>Thread</h4>
            <aside>
                <button>Run</button>
                <button>Clear</button>
            </aside>           
        </div>

        <div className='thread-bottom'>
            <textarea placeholder='Enter your message.....' value={userInput} onChange={(event) => setUserInput(event.target.value)} />
            <div>
                <button onClick={askChatbot}>Run</button>
            </div>
            <div className="btn">{chatBotResponse}</div>
        </div>


      </div>
    </div>
  );
}

export default App;
