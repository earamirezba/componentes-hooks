import { useNavigate } from "react-router"

const Login = () => {

    const navigate = useNavigate();
    const handleLogin = () => navigate('/dashboard');

    return(
        <>
            <h2>Login</h2>
            <button onClick={handleLogin}>Entrar</button>
        </>
    )
}

export default Login