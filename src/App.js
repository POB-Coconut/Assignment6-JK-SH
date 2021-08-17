import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Result from './components/Result';
import Timer from './components/Timer';
import useForm from './hooks/useForm';

export default function App() {
  const [sortAscending, setSortAscending] = useState('');
  const [sortDescending, setSortDescending] = useState('');
  const dateOpt = { dateStyle: 'full' };
  const korDate = new Date().toLocaleDateString('ko-KR', dateOpt);
  const engDate = new Date().toLocaleDateString('en-US', dateOpt);

  const sorting = (correctedValue) => {
    const newSortAscending = correctedValue.sort((a, b) => a - b).toString();
    const newSortDescending = correctedValue.sort((a, b) => b - a).toString();
    setSortAscending(newSortAscending);
    setSortDescending(newSortDescending);
    return true;
  };

  const { value, handleChange, handleSubmit } = useForm(sorting);

  return (
    <Wrap>
      <Timer>{korDate}</Timer>
      <Form
        value={value}
        handleSubmit={handleSubmit}
        handleChange={handleChange}></Form>
      <Result>{sortAscending}</Result>
      <Result>{sortDescending}</Result>
      <Timer>{engDate}</Timer>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 30px auto;
  padding: 5px 10px;
  width: 500px;
  background-color: lightgray;
`;
