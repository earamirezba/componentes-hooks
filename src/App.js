import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './components/context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';

function App() {

  const {auth} = useContext(AuthContext);

  return (
    <div className="App">
      {auth ? <AuthRouter/> : <UnauthRouter/>}    
    </div>
  );
}

export default App;
