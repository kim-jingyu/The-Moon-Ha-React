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
