import styled from '@emotion/styled';
export const ListItem = styled.li`
  display: flex;
  align-items: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :not(:last-child) {
    margin-bottom: 10px;
  }
  :focus,
  :hover {
    color: #fff;
    background-color: #df7c10;
  }
  ::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const ItemText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-right: 15px;
`;
export const ItemButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  min-width: 80px;
  font-family: inherit;
  font-size: 14px;
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
