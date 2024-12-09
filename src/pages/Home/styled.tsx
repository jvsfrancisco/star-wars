import styled from "styled-components";

export const Main = styled.main`
  margin-top: 5rem;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding: 20px;
  width: 65%;
  height: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h2 {
      margin-top: -5px;
    }
  }
`;
