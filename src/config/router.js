import {
    BrowserRouter as Router,

} from 'react-router-dom'

import { Home } from "../component/Home";
import { About } from "../component/About";
import { Contact } from "../component/Contact";


export const AppRouter = () => {
    return (
        <Router>
            <Route path='/home' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
        </Router >
    )
}
