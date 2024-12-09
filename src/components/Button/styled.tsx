import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

interface SizeProps {
  size?: string;
  color: string;
}

export const Link = styled(RouterLink) <SizeProps>`
  font-size: ${(props) => props.size};
  background: rgb(92,25,181);
  background: linear-gradient(90deg, rgba(92,25,181,1) 0%, rgba(166,25,181,1) 100%);
  font-weight: bold;
  border-radius: 5px;
  padding: 15px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
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
    background-color: ${({ theme, color }) => color === "primary" ? theme.colors["secondary-color"] : theme.colors["primary-color"]};
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;