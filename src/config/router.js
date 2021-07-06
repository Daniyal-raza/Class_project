import{
 Router,
}from 'react-router-dom'
import { Home } from "../component/Home"
import { About } from "../component/About"
import { Contact } from "../component/Contact"

import React from 'react'

export const routerApp = () => {
    return (
        <div>
            <Route path='/home' component={Home}></Route>
            <Route path='/About' component={About}></Route>
            <Route path='/Contact' component={Contact}></Route>
        </div>
    )
}
