import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import LandingPage from './views/landing-page'
import Aboutus from './views/aboutus'
import Contact from './views/contact'
import Likedmonke from './views/likedmonke'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Likedmonke} path="/likedmonke" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
