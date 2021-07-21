import './style.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='card Login_card'>
                        <h2>Login</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Login</button>

                        </div>
                        <div>
                            <Link to='/signup'>Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;