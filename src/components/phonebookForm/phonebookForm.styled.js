import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
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
export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  min-width: 200px;
  font-family: inherit;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: #df7c10;
  }
`;
