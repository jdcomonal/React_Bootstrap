import React, { useState } from 'react';
import './App.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [display, setDisplay] = useState('');

  const handleNumber1Change = (e) => {
    setNumber1(parseInt(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(parseInt(e.target.value));
  };

  const handleAdd = () => {
    // Perform addition logic here
   
    let x= number1+ " + "+ number2+ ' = ' + (number1+number2);
    setDisplay(x);
  };

  const handleSubtract = () => {
    // Perform subtraction logic here
    let x= number1+ " - "+ number2+ ' = ' + (number1-number2);
    setDisplay(x);
    console.log('Add numbers:', number1, number2, display);
  };

  const handleMultiply = () => {
    // Perform multiplication logic here
    let x= number1+ " x "+ number2+ ' = ' + (number1*number2);
    setDisplay(x);
  };

  const handleDivide = () => {
    // Perform division logic here
    let x= number1+ " ÷ "+ number2+ ' = ' + (number1/number2);
    setDisplay(x);
  };
  

  return (
    <main className='w30 pb-5 pt-1 '>
    <Container className="mt-4 ">
      <h2>Number Calculator</h2>
      <Form>
        <Form.Group controlId="number1">
          <Form.Label>Number 1</Form.Label>
          <Form.Control
            type="number"
            value={number1}
            onChange={handleNumber1Change}
          />
        </Form.Group>
        <Form.Group controlId="number2">
          <Form.Label>Number 2</Form.Label>
          <Form.Control
            type="number"
            value={number2}
            onChange={handleNumber2Change}
          />
        </Form.Group>
        <Row className='mt-4'>
          <Col>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={handleSubtract}>
              Subtract
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={handleMultiply}>
              Multiply
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={handleDivide}>
              Divide
            </Button>
          </Col>
        </Row>

        <div className="mt-3">
            <strong>Result:</strong> {display}
            
        </div>
        
      </Form>
    </Container>
    </main>
  );
}

export default App;
