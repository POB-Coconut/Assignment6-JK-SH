import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Result from './components/Result';
import Timer from './components/Timer';
import useForm from './hooks/useForm';
import { validate } from './utils/regex';

export default function App() {
  const [sortAscending, setSortAscending] = useState('');
  const [sortDescending, setSortDescending] = useState('');
  const dateOpt = { dateStyle: 'full' };
  const korDate = new Date().toLocaleDateString('ko-KR', dateOpt);
  const engDate = new Date().toLocaleDateString('en-US', dateOpt);

  const sorting = () => {
    // string -> array
    // sort 메서드 구현 -> 내림/오름 차순
    // setting State
    // concat
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    sorting,
    validate
  );

  return (
    <Wrap>
      <Timer>{korDate}</Timer>
      <Form
        values={values}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}></Form>
      <Result></Result>
      <Result></Result>
      <Timer>{engDate}</Timer>
    </Wrap>
  );
}

const Wrap = styled.ul`
  margin: 30px auto;
  padding: 5px 10px;
  width: 500px;
  background-color: lightgray;
`;
