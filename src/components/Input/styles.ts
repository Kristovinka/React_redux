import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 16px;
  color: #0b0a0aa4;
`

export const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid #f5f0f0;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  color: black; /* Добавьте эту строку для установки цвета текста */
  
  &::placeholder {
    color: #090808a1; /* Цвет текста плейсхолдера */
  }
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`
