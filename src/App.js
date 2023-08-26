//import logo from './logo.svg';
import Nav from './Navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Vaibhav
    //     </a>
    //   </header>
    // </div>
    //  <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <div>
      <Router>

      <Nav />
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/contact" element={ <Contact/> }></Route>
      </Routes>
      </Router>
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
    </div>
  );
}

export default App;
