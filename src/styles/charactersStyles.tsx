import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonSwitch = styled.button`
  margin: 20px;
  color: white;
  outline: none;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: -7px -7px 20px 0px #85141499, -4px -4px 5px 0px #cb1c1ced,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
