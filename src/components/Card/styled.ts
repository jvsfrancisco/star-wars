import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  background-color: transparent;
  border: 2px solid yellow;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors["secondary-color"]};
  padding: 2rem;
  width: 240px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;
