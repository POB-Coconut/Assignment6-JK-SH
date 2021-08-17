import React from 'react';
import styled from 'styled-components';

export default function Form({ handleChange, handleSubmit, value }) {
  return (
    <Wrap>
      <FlexForm onSubmit={handleSubmit}>
        <NumInput
          id="numbers"
          name="numbers"
          type="text"
          onChange={handleChange}
          value={value || ''}
          placeholder="연속된 숫자 형태로 작성해주세요 (ex. 1,2,3,4..)"></NumInput>

        <StartBtn type="submit">시작</StartBtn>
      </FlexForm>
    </Wrap>
  );
}

const Wrap = styled.div`
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
  margin: 0px auto 10px;
  line-height: 40px;
  text-align: center;
  width: 100%;
`;

const StartBtn = styled.button`
  text-align: center;
  line-height: 20px;
  width: 80px;
  margin: 10px auto 0px;
`;
