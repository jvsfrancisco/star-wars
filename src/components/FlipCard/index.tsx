import React, { useState } from 'react';
import { CardContainer, CardInner, CardFront, CardBack } from './styled';
interface CardProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  type: string;
}
const FlipCard: React.FC<CardProps> = ({icon, children, type}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <CardContainer flipped={flipped} onClick={toggleFlip}>
      <CardInner flipped={flipped}>
        <CardFront>
          {icon}
          <h2>Click to Generate a Random {type}</h2>
        </CardFront>
        <CardBack>
          {children}
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default FlipCard;
