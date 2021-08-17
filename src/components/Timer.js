import React from 'react';
import styled from 'styled-components';
import { DATE_OPT } from '../utils/config';

export default function Timer({ localeType }) {
  const DataInfo = new Date().toLocaleDateString(localeType, DATE_OPT);
  return <Wrap>{DataInfo}</Wrap>;
}
const Wrap = styled.div`
  padding: 20px;
  border: 0.5px solid #ced4da;
  margin: 5px auto;
  border-radius: 10px;
  background-color: #f8f9fa; ;
`;
