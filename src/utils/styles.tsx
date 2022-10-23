import styled from 'styled-components';

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const PlanPageStyle = styled.div`
  width: 100%;
  background-color: #151718;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 48px;
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

export const NavigationSidebar = styled.nav`
  height: 100%;
  flex: 0 0 300px;
`;

export const NavigationHeader = styled.header`
  padding: 48px;
`;

export const NavigationItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 48px;
  transition: 200ms color ease-in;
  cursor: pointer;
  & span {
    font-size: 18px;
  }
  &:hover {
    color: #969696;
  }
`;

export const PlansActionBarContainer = styled.div`
  background-color: #0d0d0d;
  padding: 24px 32px;
  border-radius: 10px;
`;

export const CirclePlusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: 200ms color ease;
  &:hover {
    color: #969696;
  }
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #000000de;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  font-size: 18px;
  font-weight: 500;
`;

export const ModalContent = styled.div`
  padding: 0px 28px;
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
`;

export const ModalContainerStyle = styled.div`
  position: relative;
  width: 500px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #191919;
`;
