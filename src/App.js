import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Result from './components/Result';
import Timer from './components/Timer';
import useForm from './hooks/useForm';
import { customSort } from './utils/customSort';
import { mergeSort } from './utils/mergeSort';

export default function App() {
  const [sortAscending, setSortAscending] = useState('');
  const [sortDescending, setSortDescending] = useState('');

  const handleSort = (correctedValue) => {
    const newSortAscending = customSort(correctedValue, 'asc').toString();
    const newSortDescending = customSort(correctedValue, 'desc').toString();
    new Promise((resolve, _reject) => {
      setSortAscending(newSortAscending);
      setTimeout(() => {
        resolve();
      }, 3000);
    }).then(() => {
      setSortDescending(newSortDescending);
    });
    return true;
  };

  const { value, handleChange, handleSubmit } = useForm(handleSort);

  return (
    <Wrap>
      <Timer localeType="ko-KR" />
      <Form
        value={value}
        handleSubmit={handleSubmit}
        handleChange={handleChange}></Form>
      <Result>{sortAscending}</Result>
      <Result>{sortDescending}</Result>
      <Timer localeType="en-US" />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 30px auto;
  padding: 5px 10px;
  width: 500px;
  background-color: lightgray;
`;
