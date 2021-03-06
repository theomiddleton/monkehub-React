import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Likedmonke from './views/likedmonke'
import LandingPage from './views/landing-page'
import Monke from './views/monke'
import Contact from './views/contact'
import Hireme from './views/hireme'
import Source from './views/source'
import Aboutus from './views/aboutus'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Likedmonke} path="/likedmonke" />
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Monke} path="/monke" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Hireme} path="/hireme" />
        <Route exact component={Source} path="/source" />
        <Route exact component={Aboutus} path="/aboutus" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
