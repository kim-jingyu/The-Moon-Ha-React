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
