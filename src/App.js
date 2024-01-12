import './App.css';
// this is functional base component 
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

// now we use class based component in this 
//and search es7 react snippet    search on google 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() { // screen pr render krna kaam h render function ka
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}


// difference between function and class base 
// methods management is easy qwe use this.variable

