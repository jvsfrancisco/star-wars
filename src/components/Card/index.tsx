import React from "react";
import * as S from "./styled";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};

export default Card;
