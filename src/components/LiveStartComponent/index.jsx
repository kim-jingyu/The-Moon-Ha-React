import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, FormWrapper, FormItem, StyledButton, SelectLesson } from './styled';
import { useNavigate } from 'react-router-dom';

const LiveStartComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [lessonId, setLessonId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var fetchLessons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/lesson/by-tutor');
        setLessons(response.data);
      } catch (error) {
        console.error('강의 목록 로딩에 실패했습니다: ', error);
      }
    };

    fetchLessons();
  }, []);

  const makeLiveLesson = async (e) => {
    e.preventDefault();
    if (!title || !description || !thumbnail || !lessonId) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    setIsLoading(true);

    const data = new FormData();
    const liveLessonRequest = {
      title: title,
      description: description,
      lessonId: lessonId,
    };

    data.append(
      'liveLessonRequest',
      new Blob([JSON.stringify(liveLessonRequest)], {
        type: 'application/json',
      }),
    );
    data.append('thumbnail', thumbnail);

    try {
      const response = await axios.post('http://localhost:8080/live', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response: ', response.data);
      if (response.status === 201) {
        navigate('/live/broadcast', { state: response.data });
      }
    } catch (error) {
      console.error('라이브 강좌 생성 중 에러 발생: ', error.response || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={makeLiveLesson}>
        <FormItem>
          <label>제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </FormItem>
        <FormItem>
          <label>설명</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </FormItem>
        <FormItem>
          <label>썸네일</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
            required
          />
        </FormItem>
        <FormItem>
          <label>강좌 선택</label>
          <SelectLesson value={lessonId} onChange={(e) => setLessonId(e.target.value)} required>
            <option value="">없음</option>
            {lessons.map((lesson) => (
              <option key={lesson.lessonId} value={lesson.lessonId}>
                {lesson.lessonTitle}
              </option>
            ))}
          </SelectLesson>
        </FormItem>
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? '생성중 기다리셈' : '라이브 강좌 생성'}
        </StyledButton>
      </FormWrapper>
    </Container>
  );
};

export default LiveStartComponent;
