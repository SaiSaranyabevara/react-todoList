// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// //import './App.css'
// import React,{useState} from "react"
// function App()
// {
//   let[counter,updateCounter]=useState(0)
//   return (
//     <>
//     <p>this is p tag </p>
//     <h1>this h tag</h1>
//     <h1>counter value: {counter}</h1>
//     <button on onClick={()=>
//       {
//         updateCounter(++counter)
//       }}>change</button>

//     <button on onClick={()=>
//       {
//         updateCounter(--counter)
//       }}>change</button>
//     </>
    
//     )
// }
// export default App;

//color changer

// import './App.css'
// function App()
// {
//   return (
//     <div className="Wrapper">
//       <h1>background color changer using react</h1>
//       <input type="color" onChange={
//         (e)=>
//         {
//           document.body.style.background=e.target.value
//         }
//       }/>
//     </div>
// )
// }

// export default App;

import './App.css';
import {useState} from 'react';
function App()
{
  let [counter,setCounter]=useState(0)
  let stock=10
  return(
    <>
    <h1>
      counter app in react
    </h1>
    <div className="Wrapper">
    <button className='plus' disabled={counter===stock} onClick={ ()=>{
        if(counter<stock)
        {
          setCounter(counter+1);
          // console.log(counter);
        }
      }
    }>+</button>
    <p>{counter}</p>
    <button className='minus' disabled={counter===0} onClick={ ()=>{
        if(counter>0)
        {
          setCounter(counter-1);
        }
      }
    }>-</button>
    </div>
    </>
  )
}
export default App;