import React from 'react';
import Form from 'react-bootstrap/Form';

const Pace = ({ type, value, title, onChange }) => (
  <div>
    <Form.Group className='m-3' controlId='form'>
      <h3 className='d-flex justify-content-center'>{title}</h3>
      <div className='d-flex'>
        <Form.Control
          placeholder='m'
          min='1'
          max='12'
          type={type}
          value={value}
          step='1'
          onChange={onChange}
        />
        <p className='m-1'>:</p>
        <Form.Control
          placeholder='s'
          min='0'
          max='60'
          type={type}
          value={value}
          step='15'
          onChange={onChange}
        />
      </div>
    </Form.Group>
  </div>
);

export default Pace;
