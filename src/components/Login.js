import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";


const Login = () => {
    const {handleAuth} = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleUser = (e) =>{
        setUser(e.target.value);
    }

    const handlePass = (e) =>{
        setPass(e.target.value);
    }

    const handleLogin = () =>{
        handleAuth(user, pass);

    }

  return (
    <div className="App-header">
      <Card>
        <Card.Header>Iniciar Sesion</Card.Header>
        <Card.Body>
            {/*Usuario*/}
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">'Usuario  '</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={user}
              onChange={handleUser}
            />
          </InputGroup>
            {/*Password*/}
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <FormControl
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="password"
              value={pass}
              onChange={handlePass}
            />
          </InputGroup>
          <Button variant="primary" onClick={handleLogin}>Iniciar Sesion</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
