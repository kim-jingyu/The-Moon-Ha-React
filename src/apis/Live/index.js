/**
 * 실시간 강좌 API
 * @author 김진규
 * @since 2024.09.05
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.05  	김진규       최초 생성
 * </pre>
 */

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

export const LiveLessonEndAPI = (liveId) => {
  return instance.post(`/live/${liveId}/end`);
};
