import React from 'react';
import { StyledButton } from './styled';

const Button = ({ variant, onClick, children, disabled, type = 'button', active }) => {
    return (
        <StyledButton
            type={type}
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            className={active ? 'active' : ''}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
