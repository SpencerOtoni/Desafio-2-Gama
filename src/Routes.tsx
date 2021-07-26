import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Repositirories from './pages/Repositories/Repositories'
import Home from './pages/Home/Home' 
import Client from './pages/Client/Client' 


export default function Routes () {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/client' component={Client}/>
        <Route path='/authenticate' component={Repositirories}/>
      </Switch>
   </BrowserRouter>
  ) 
}