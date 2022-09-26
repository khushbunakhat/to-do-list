import React  from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
            navigate("/")
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="inputBox" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className="appButton" type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login