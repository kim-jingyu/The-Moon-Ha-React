import React from 'react';
import { Spinner, StyledButton } from './styled';

const Button = ({ key, variant, onClick, loading, children, disabled, type = 'button', active }) => {
    return (
        <StyledButton
            key={key}
            type={type}
            variant={variant}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            className={active ? 'active' : ''}
        >
            {loading ? <Spinner /> : children} {/* 로딩 중일 때 스피너 표시 */}
        </StyledButton>
    );
};

export default Button;
