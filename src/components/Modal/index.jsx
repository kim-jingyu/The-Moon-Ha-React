/**
 * 모달 컴포넌트
 * @author 최유경
 * @since 2024.09.07
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.07  	최유경       최초 생성
 * </pre>
 */

import React, { useState } from 'react';
import { StyledModal } from './styled';
import Button from '../Button';

const CustomModal = ({ variant, children, buttonContent, closeIcon }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [key, setKey] = useState(Date.now());

    const showModal = () => {
        setKey(Date.now());
        setOpen(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>
            <Button variant={variant} onClick={showModal}>
                {buttonContent}
            </Button>

            <StyledModal key={key} open={open} onCancel={handleCancel} footer={null} closeIcon={closeIcon}>
                {React.cloneElement(children, { setOpen, setConfirmLoading, confirmLoading })}
            </StyledModal>
        </>
    );
};
export default CustomModal;
