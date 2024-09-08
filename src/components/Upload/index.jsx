import React, { useState, useRef } from 'react';
import { message, Upload, Image, Modal, Button } from 'antd';
import styled from 'styled-components';
import { FileUploadContainer, PreviewFile, PreviewImg, ProfileImgInput, ProfileImgLabel } from './styled';

const FileUpload = ({ onChange, id, width = '380px', height = '180px' }) => {
    const acceptType = id === 'image' ? 'image/*' : id === 'video' ? 'video/*' : '';

    const [previewUrl, setPreviewUrl] = useState(null);
    const imgRef = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('업로드 업로드 : {}', file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
            console.log('previewUrl : ', previewUrl);
            if (onChange) onChange(file); // 부모 컴포넌트로 파일 전달
        }
    };

    return (
        <FileUploadContainer width={width} height={height}>
            {previewUrl ? (
                <PreviewFile src={previewUrl} alt="미리보기" style={{ width, height }} />
            ) : (
                <ProfileImgLabel htmlFor={id}>파일 업로드</ProfileImgLabel>
            )}
            <ProfileImgInput type="file" accept={acceptType} id={id} onChange={handleFileChange} ref={imgRef} />
        </FileUploadContainer>
    );
};

export default FileUpload;
