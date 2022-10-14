import styled from 'styled-components';

export const Page = styled.div`
  height: 100%;
  width: 100%;
`;

export const CenteredPage = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.div`
  background-color: #161616;
  padding: 24px;
  border-radius: 8px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: inherit;
  padding: 0;
  color: #fff;
  font-family: 'Inter';
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const InputContainerHeader = styled.div``;

export const InputLabel = styled.label`
  font-size: 0.9rem;
  color: #c4c4c4;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 0;
  border: none;
  outline: none;
  font-size: 14px;
  color: #fff;
  font-family: 'Inter';
  background-color: #0058f0;
  border-radius: 8px;
  cursor: pointer;
  transition: 300ms background-color ease;
  &:hover {
    background-color: #1168fe;
  }
`;
