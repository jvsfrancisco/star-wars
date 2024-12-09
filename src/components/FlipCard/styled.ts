import styled from 'styled-components';

interface CardProps {
  flipped: boolean;
}

export const CardContainer = styled.div<CardProps>`
  perspective: 1000px;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

export const CardInner = styled.div<CardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${({ theme }) => theme.colors["bg-color"]};
  border: 1px solid ${({ theme }) => theme.colors["secondary-color"]};
  backdrop-filter: blur(10px); 
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8); 
  color: white;
  svg{
    width: 4rem;
    height: 4rem;
  }
  h2{
    margin-top: 1rem;
    letter-spacing: 2px;
  }
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.7),
    rgba(255, 255, 255, 0.05)
  ); 
  border: 1px solid ${({ theme }) => theme.colors["secondary-color"]};  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8); 
  color: white;
  transform: rotateY(180deg);
`;
