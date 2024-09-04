import instance from '..';

export const LessonRegisterAPI = (lessonRegister, thumbnailFile, videoFile) => {
    const formData = new FormData();
    formData.append('registerRequest', new Blob([JSON.stringify(lessonRegister)], { type: 'application/json' }));
    formData.append('thumbnailFile', thumbnailFile);
    formData.append('previewVideoFile', videoFile);

    console.log('thumbnailFile : {}', thumbnailFile);
    console.log('previewVideoFile : {}', videoFile);
    return instance.post('/admin/lesson/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// export const LessonRegisterAPI = (lessonRegister) => {
//     const formData = new FormData();
//     formData.append('registerRequest', new Blob([JSON.stringify(lessonRegister)], { type: 'application/json' }));
//     return instance.post('/admin/lesson/register', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
// };
