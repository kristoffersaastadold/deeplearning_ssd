import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
// import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import Home from "./compontents/Home";
import Projects from "./compontents/Projects"
import CV from "./compontents/CV";
import Contact from "./compontents/Contact"
import Navbar from './compontents/Nav';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/cv" component={CV}/>
        <Route exact path="/contact" component={Contact}/>
      </React.Fragment>  
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root