import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import FanDetails from './components/projects/FanDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-rangeslider/lib/index.css'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={FanDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>

      </BrowserRouter>

    )
  }
}

export default App
