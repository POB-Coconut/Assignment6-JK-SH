import React from 'react';
import styled from 'styled-components';

export default function Result({ children }) {
  return <Wrap>{children}</Wrap>;
}
const Wrap = styled.div`
  padding: 20px;
  border: 0.5px solid #ced4da;
  margin: 10px auto;
  border-radius: 10px;
  background-color: #f8f9fa; ;
`;
