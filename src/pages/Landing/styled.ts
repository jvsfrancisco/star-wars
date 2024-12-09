import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 3rem;
  img{
    width: 60%;
    @media (min-width: 1024px) {
      width: 35%;
    }
  }
`;