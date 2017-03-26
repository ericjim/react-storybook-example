import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: ${props => props.primary ? 'rebeccapurple' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  margin: 10px;
`;

export default Button;
