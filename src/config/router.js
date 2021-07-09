import {
    BrowserRouter as Router,
    Route,

} from 'react-router-dom'

import { Home } from "../component/Home";
import { About } from "../component/About";
import { Contact } from "../component/Contact";


export const AppRouter = () => {
    return (
        <Router>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Router >
    )
}
