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
 * 2024.09.18 	최유경       최초 생성
 * </pre>
 */

import instance from '..';

export const uploadFileToS3 = (file, url) => {
    return fetch(url, {
        method: 'PUT',
        body: file,
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to upload ${file.name}`);
        }
    });
};

export const getPresignedUrl = (request) => {
    return instance.get('/api/s3/preSignedUrl', request);
};

export const getPresignedUrlList = (request) => {
    const fileNamesString = request.join(',');

    // GET 요청 보내기
    return instance.get('/api/s3/preSignedUrl/list', {
        params: { fileNames: fileNamesString },
    });
};

export const createMultipart = async (file) => {
    const response = instance.post('/api/s3/createUpload', file);

    const { url } = await response.json();
    return { url, file };
};

// const uploadFilesToS3 = async (files) => {
//     try {
//         // Step 1: 각 파일에 대해 uploadId 요청
//         const uploadIds = await Promise.all(files.map((file) => createMultipart(file)));

//         const chuckSize = 10 * 1024 * 1024;
//         for (const { uploadId, file } of uploadIds) {
//             // Step 2: 파일을 chunk로 나누고 presigned URLs 요청
//             const chuckCount = Math.floor() + 1;
//             console.log('chuckCount : ${chuckCount}');

//             let multiUploadArray = [];
//             for (let uploadCount = 1; uploadCount < chuckCount + 1; uploadCount++) {
//                 let start = (uploadCount - 1) * chuckSize;
//                 let end = uploadCount * chuckSize;
//                 let flieBlob = uploadCount < chuckCount ? file.slice(start, end) : file.slice(start);

//                 const presignedUrl = await instance.post('/s3/uploadSignedUrl', {
//                     uploadId: uploadId,
//                     partNumber: uploadCount,
//                     fullPath: file,
//                 });
//             }

//             // Step 3: chunk를 presigned URL로 S3에 업로드
//             await uploadChunksToS3(presignedUrls);

//             // Step 4: 모든 chunk 업로드 완료 후, 업로드 완료 요청
//             await completeMultipartUpload(uploadId, presignedUrls);
//         }

//         console.log('All files uploaded successfully!');
//     } catch (error) {
//         console.error('Error during upload:', error);
//     }
// };

export const uploadMultipart = (request) => {
    // POST 요청 보내기
    return instance.post('/api/s3/uploadSignedUrl', request);
};
