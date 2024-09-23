/**
 * 파일 업로드 컴포넌트
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04  	최유경       최초 생성
 * </pre>
 */

import React, { useState, useRef } from 'react';
import { FileUploadContainer, PreviewFile, ProfileImgInput, ProfileImgLabel } from './styled';
import Player from '../Player';

const FileUpload = ({ onChange, id, width, ratio = '16/9', placeholder = '파일 업로드' }) => {
    const acceptType = id === 'image' ? 'image/*' : id === 'video' ? 'video/*' : '';

    const [previewUrl, setPreviewUrl] = useState(null);
    const [isVideo, setIsVideo] = useState(false);
    const imgRef = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('업로드 업로드 : {}', file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
            const fileType = file.type;

            // 파일이 이미지인지 영상인지 확인
            if (fileType.includes('image')) {
                setIsVideo(false);
            } else if (fileType.includes('video')) {
                setIsVideo(true);
            }

            console.log('previewUrl : ', previewUrl);
            if (onChange) onChange(file); // 부모 컴포넌트로 파일 전달
        }
    };

    return (
        <FileUploadContainer width={width} ratio={ratio}>
            {previewUrl ? (
                isVideo ? (
                    // 영상 미리보기일 경우 Player 컴포넌트 사용
                    <Player url={previewUrl} width={width} />
                ) : (
                    <PreviewFile src={previewUrl} alt="미리보기" style={{ width }} />
                )
            ) : (
                <ProfileImgLabel htmlFor={id}>{placeholder}</ProfileImgLabel>
            )}
            <ProfileImgInput type="file" accept={acceptType} id={id} onChange={handleFileChange} ref={imgRef} />
        </FileUploadContainer>
    );
};

export default FileUpload;
