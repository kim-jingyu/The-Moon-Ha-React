import instance from '..';

export const LiveLessonRegisterAPI = (liveLessonRequest, thumbnail) => {
  const data = new FormData();
  data.append('liveLessonRequest', new Blob([JSON.stringify(liveLessonRequest)], { type: 'application/json' }));
  data.append('thumbnail', thumbnail);

  return instance.post('/live', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
