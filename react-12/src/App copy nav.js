import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Challenges from './Challenges'


const NotFound = () => (
    <div>
        <h1>The page you are looking for not found</h1>
    </div>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
