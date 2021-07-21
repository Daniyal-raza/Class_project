import './style.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { signupUser } from '../store/Action';
// import { useDispatch } from 'react-redux'; 



function Signup() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
// const 
const signup_user =() =>{
    let user ={
        username,
        email,
        password
    }
    console.log(user)

}



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='card Login_card'>
                        <h2>Signup</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="form-control" placeholder="User Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div className ="d-grid gap-2">
                            <button onClick={signup_user} className ="btn btn-primary" type="button">Signup</button>

                        </div>
                        <div>
                            <Link to='/'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;