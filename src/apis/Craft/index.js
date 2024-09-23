/**
 * 프롤로그 서버 통신
 * @author 최유경
 * @since 2024.09.08
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.08  	최유경       최초 생성
 * 2024.09.10   최유경       조회
 * </pre>
 */

import instance from '..';

export const prologueRegisterAPI = (prologueRegister, thumbnailFileList, videoFileList) => {
    const formData = new FormData();
    formData.append('registerRequest', new Blob([JSON.stringify(prologueRegister)], { type: 'application/json' }));
    // 썸네일 파일 리스트 추가
    thumbnailFileList.forEach((file, index) => {
        formData.append('thumbnailFile', file); // 배열 인덱스 추가 가능 시:
    });

    // 비디오 파일 리스트 추가
    videoFileList.forEach((file, index) => {
        formData.append('prologueVideoFile', file); // 배열 인덱스 추가 가능 =
    });

    return instance.post('/admin/craft/prologue/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const prologueRegisterAPIV2 = (prologueRegister) => {
    const formData = new FormData();
    formData.append('registerRequest', new Blob([JSON.stringify(prologueRegister)], { type: 'application/json' }));

    return instance.post('/admin/craft/prologue/register/v2', formData);
};

export const fetchPrologueThemeListAPI = () => {
    return instance.get('/admin/craft/prologue/theme/list');
};

export const fetchPrologueListAPI = (prologueThemeId) => {
    return instance.get(`/admin/craft/prologue/theme/${prologueThemeId}`);
};
