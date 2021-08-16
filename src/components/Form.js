import React from 'react';
import styled from 'styled-components';

export default function Form({ handleSubmit }) {
  return (
    <Wrap>
      <FlexForm onSubmit={handleSubmit}>
        <NumInput type="text"></NumInput>
        <StartBtn type="submit">시작</StartBtn>
      </FlexForm>
    </Wrap>
  );
}

const Wrap = styled.li`
  padding: 20px;
  border: 0.5px solid #ced4da;
  margin: 10px auto;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NumInput = styled.input`
  margin: 0px auto 20px;
  line-height: 40px;
  text-align: center;
  width: 100%;
`;

const StartBtn = styled.button`
  text-align: center;
  line-height: 20px;
  width: 80px;
`;
