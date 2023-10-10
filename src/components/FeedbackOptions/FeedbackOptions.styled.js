import styled from '@emotion/styled';


export const Btn = styled.button`
  width: 120px;
  padding: 20px;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #553c9a;
  box-shadow: 0 3px 0 #003cc5;

  :not(:last-child) {
    margin-right: 15px;
  }

  :hover {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;