import React, { useState } from 'react';
import { 
  Form,
  Button,
  Container,
  Row,
  Col 
} from 'react-bootstrap';
import { useMutation } from 'react-query';
import { sumAsync } from '../services';

export const CalculatorForm = () => {
  const [ formData, setFormData ] = useState<ISum>({
    number1: 0,
    number2: 0
  });

  const { data, mutate }  = useMutation(sumAsync);
  const _onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).name]: +(event.target as HTMLInputElement).value
    })
    return;
  }
  const _submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    mutate(formData);
  }

  return(
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col md={3}>
          <Form onSubmit={_submitForm}>
            <h6 className="text-center">Enter the numbers</h6>
            <Form.Group>
              <Form.Control
                name="number1" 
                type="number" 
                placeholder="number 1" 
                onChange={_onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                name="number2"
                type="number" 
                placeholder="number 2"
                onChange={_onInputChange} 
              />
            </Form.Group>
            <Button variant="danger" block type="submit">
              Sum
            </Button>
          </Form>
        </Col>
      </Row>
      <hr className="bg-danger" />
      <Row className="justify-content-md-center my-5">
        <Col md={3}>
          <h6 className="text-center">Results</h6>
          <Button variant="outline-danger" block type="submit">
            { (data && data?.data?.sum ) ? data?.data.sum : 'N/A'  }
          </Button>
        </Col>
      </Row>
    </Container>
  )
}