import logo from './logo.svg';
import './App.css';
import { Container, Card, Label, Col, Row, Input, Button } from 'reactstrap';
import data from './Config'
import { useState } from 'react'
import Summary from './Summary'

function App() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const onChangehandler = (name, e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  }

  const handleFormData = (e) => {
    e.preventDefault();
    const cannotSubmit = data.some((item, key) => {
      return item.inputs.some((input) => {
        if (!input.validation) return false;
        let value = formData[input.name];
        const result = isInputNotValid(value, input.validation);
        if (result == true) setErrors({ ...errors, [input.name]: true })
        else setErrors({ ...errors, [input.name]: false })
        return result;
      })
    })
    if (cannotSubmit == true) return;
    console.log(formData);
    setSuccess(!success);
  }

  const isInputNotValid = (value, validation) => {
    return Object.keys(validation).some((key) => {
      switch (key) {
        case 'required':
          if (value === "") return true
        case 'maxLength':
          if (!value || value.length > validation.maxLength) return true
        case 'minLength':
          if (!value || value.length < validation.minLength) return true
      }
    });
  }

  const handleValidation = (validation, name, e) => {
    if (!validation) return
    let value = formData[name];

    let isNotValid = isInputNotValid(value, validation);
    if (isNotValid == true) {
      setErrors({
        ...errors,
        [name]: true
      })
    }
    else {
      setErrors({
        ...errors,
        [name]: false
      })
    }
  }


  return (
    <div className="App">
      <Container>
        {
          success ? (<Summary props={formData} />) : (
            <form onSubmit={handleFormData}>
              {
                data.map((item, key) => (
                  <Card key={key} className="mb-4 p-4">
                    <Label className="mb-2">{item.texts.header}</Label>
                    {item.inputs.map((input, key) => (
                      <Row key={key}
                        className="mb-1" >
                        <Col md="4">
                          <Label>
                            {input.label}
                          </Label>
                        </Col>

                        <Col md="8">
                          <Input
                            type={input.type}
                            name={input.name}
                            required={input.required}
                            max={input.maxLength}
                            min={input.minLength}
                            onChange={(e) => onChangehandler(input.name, e)}
                            value={formData[input.name]}
                            onBlur={(e) => handleValidation(input.validation, input.name, e)}
                          />{
                            errors[input.name] && <div className="error">{input.error}</div>
                          }
                        </Col>
                      </Row>
                    ))}
                  </Card>
                ))}
              <Button
                type="submit" >Submit</Button>
            </form>)
        }

      </Container>
    </div >
  );
}

export default App;
