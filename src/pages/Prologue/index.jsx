/**
 * 프롤로그 페이지
 * @author 최유경
 * @since 2024.09.06
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.06  	최유경       최초 생성
 * </pre>
 */

import React from 'react';
import { BodyWrapper, Container, TitleWrapper } from './styled';
import { StyledButton } from '../../components/Button/styled';
import { useNavigate } from 'react-router';
import PrologueList from '../../components/PrologueList';

const Prologue = () => {
    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/prologue/register');
    };

    return (
        <Container>
            <TitleWrapper>
                프롤로그 관리
                <StyledButton variant="addBtn" onClick={handleOnclick}>
                    추가
                </StyledButton>
            </TitleWrapper>
            <BodyWrapper>
                <PrologueList />
            </BodyWrapper>
        </Container>
    );
};

export default Prologue;
