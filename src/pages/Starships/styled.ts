import styled from "styled-components";

export const Main = styled.main`
  margin-top: 9rem;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  h3{
    color: ${({ theme }) => theme.colors["secondary-color"]};
  }
  `;