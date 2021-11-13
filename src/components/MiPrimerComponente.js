import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { RecibirProps } from './RecibirProps';

export default function MiPrimerComponente() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const [result, setResult] = useState("");

    useEffect(() => {
        console.log("Actualizando el segundo input");
    }, [num2]);

    const handleNum1 = (e) => setNum1(e.target.value);
    const handleNum2 = (e) => setNum2(e.target.value);

    const handleSummit = (e) => {
        e.preventDefault();

        if (!(num1 === "") || !(num2 === "")){
            setResult(parseInt(num1) + parseInt(num2));
        }else{
            console.log("Faltan Campos");
        }
    };

  return (
    <>
      <h1>Mi Primer Componente</h1>
      <Form onSubmit={handleSummit}>
        <Form.Group className="mb-3" controlId="formNum1">
          <Form.Control value={num1} type="number" onChange={handleNum1} placeholder="Enter firts number" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formNum2">
          <Form.Control value={num2} type="number" onChange={handleNum2} placeholder="Enter second number" />
        </Form.Group>
                     
        <Button variant="primary" type="submit">
          Sumar
        </Button>
      </Form>
      {!(result === "")?(<RecibirProps result={result}/>):(<></>)}
    </>
  );
}
