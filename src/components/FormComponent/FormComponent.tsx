import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const FormComponent = ({ value, title }: { value: any }) => {
  const [valueForm, setValueForm] = useState('');

  useEffect(() => {
    value(valueForm);
  }, [valueForm]);

  return (
    <div>
      <Form.Group className='m-3' controlId='form'>
        <h3 className='d-flex justify-content-center'>{title}</h3>
        <Form.Control type='text' onChange={(e) => setValueForm(e.target.value)} />
      </Form.Group>
    </div>
  );
};

export default FormComponent;
