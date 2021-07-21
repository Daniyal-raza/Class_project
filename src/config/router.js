import{
BrowserRouter as Router,
Route,

}from 'react-router-dom'

import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Home from '../containers/Home';

function AppRouter(){
    return(
        <Router>
            <switch>
                <Route exact path='/' component={Login}/>
                <Route exaSignupSignupct path='/signup' component={Signup}/>
                <Route exact path='/home' component={Home}/>
            </switch>
        </Router>
    )

}
export default AppRouter;