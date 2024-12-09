import React from 'react';
import * as S from './styled';

interface ButtonProps {
  variant: 'link' | 'action';
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, to, onClick, children, size = 'medium', color = 'primary' }) => {
  const converSize = {
    small: '10px',
    medium: '14px',
    large: '2rem',
  };

  if (variant === 'link' && to) {
    return (
      <S.Link to={to} size={converSize[size]} color={color}>
        {children}
      </S.Link>
    );
  }

  if (variant === 'action' && onClick) {
    return (
      <S.Button onClick={onClick} size={converSize[size]} color={color}>
        {children}
      </S.Button>
    );
  }

  return null;
};

export default Button;