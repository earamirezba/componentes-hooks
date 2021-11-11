import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import { RecibirProps } from './components/RecibirProps';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState("");

  const handleResult = (newResult)=>{
    setResult(newResult);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerComponente handleResult={handleResult}/>
        <RecibirProps result={result}/>
      </header>
    </div>
  );
}

export default App;
