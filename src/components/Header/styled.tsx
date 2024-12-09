import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 9vh;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors["bg-color"]};
  z-index: 1000;
  a{
    text-decoration: none;
    a:hover{
      text-decoration: none;
    }
  }

  .Logo {
    h1 {
      color: ${({ theme }) => theme.colors["primary-color"]};
      font-size: 1.5rem;
      &:hover {
        color: ${({ theme }) => theme.colors["secondary-color"]};
      }
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 1rem 2rem 0 2rem;
    .Logo h1 {
      font-size: 2rem;
    }
  }
`;

export const MenuIcon = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  span {
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors["primary-color"]};
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.div<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 9vh;
  left: 0;
  width: 60%;
  height: calc(100vh - 9vh);
  background-color: ${({ theme }) => theme.colors["bg-color"]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateX(0)" : "translateX(-80%)")};
  transition: transform 0.3s ease-in-out;

  a {
    margin: 1rem 0 1rem 1rem;
    text-decoration: none;  
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 1rem;
    &:hover{
      svg {
        fill: ${({ theme }) => theme.colors["secondary-color"]};
      }
      h2 {
        color: ${({ theme }) => theme.colors["secondary-color"]};
      }
    }
    svg{
      width: 1.1rem;
      height: 1.1rem;
    }
    h2 {
      color: ${({ theme }) => theme.colors["primary-color"]};
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 2rem;
    align-items: center;
    height: 100%;
    a {
      margin: 0 1rem;
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
