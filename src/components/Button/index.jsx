/**
 * S3 presigned url
 *
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04 	최유경       최초 생성
 * </pre>
 */

import React from 'react';
import { Spinner, StyledButton } from './styled';

const Button = ({ key, variant, onClick, loading, children, disabled, type = 'button', active, icon }) => {
    return (
        <StyledButton
            key={key}
            type={type}
            variant={variant}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            className={active ? 'active' : ''}
            icon={icon}
        >
            {loading ? <Spinner /> : children} {/* 로딩 중일 때 스피너 표시 */}
        </StyledButton>
    );
};

export default Button;
