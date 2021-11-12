import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import { Route, Routes } from 'react-router';
import { Dashboard } from './components/Dashboard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
       <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path="/dashboard" element={<Dashboard autorizado={false}/>}></Route> 
       </Routes>
      </header>
    </div>
  );
}

export default App;
