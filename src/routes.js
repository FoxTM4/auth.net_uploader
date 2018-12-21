import React from 'react'
import {Switch, Route} from "react-router-dom"
import Upload from './components/Upload'
import Login from './components/Login'

export default(
    <Switch>
      
        <Route component={Upload} path='/Upload'/>
        <Route component={Login} exact path='/'/>
        
        
    </Switch>
)