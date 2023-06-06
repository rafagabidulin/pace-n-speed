import React from 'react';
import Form from 'react-bootstrap/Form';

const FormComponent = ({ type, value, title, onChange }) => (
  <div>
    <Form.Group className='m-3' controlId='form'>
      <h3 className='d-flex justify-content-center'>{title}</h3>
      <Form.Control type={type} value={value} onChange={onChange} />
    </Form.Group>
  </div>
);

export default FormComponent;
