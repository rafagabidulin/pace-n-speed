import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => (
  <header>
    <div
      className='mask'
      style={{
        backgroundColor: 'rgba(23, 65, 74, 1)'
      }}
    >
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='text-white'>
          <h1>Беговой калькулятор</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
