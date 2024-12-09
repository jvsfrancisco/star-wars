import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

interface SizeProps {
  size?: string;
  color: string;
}

export const Link = styled(RouterLink)<SizeProps>`
  font-size: ${(props) => props.size};
  background: ${({ theme, color }) => theme.colors[`${color}-color`]};
  box-shadow: 0 0 10px ${({ theme, color }) => theme.colors[`${color}-color`]};
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  p {
    color: #000;
    letter-spacing: 2px;
  }
`;

export const Button = styled.button<SizeProps>`
  font-size: ${(props) => props.size};
  border: 2px solid ${({ theme, color }) => theme.colors[`${color}-color`]};
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors["primary-color"]};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px ${({ theme, color }) => theme.colors[`${color}-color`]};
    background-color: ${({ theme, color }) =>
      color === "primary"
        ? theme.colors["secondary-color"]
        : theme.colors["primary-color"]};
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
