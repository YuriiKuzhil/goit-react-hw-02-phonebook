import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-within {
    color: #df7c10;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-color: #df7c10;
  }
`;
