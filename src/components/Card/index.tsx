import React from "react";
import * as S from "./styled";


interface CardProps {
  children: React.ReactNode;
  to: string;
}

const Card: React.FC<CardProps> = ({ children, to}) => {
  return <S.Card to={to}>{children}</S.Card>;
};

export default Card;
