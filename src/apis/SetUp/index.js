import instance from '..';

export const fetchSetUpData = async () => {
    const response = await instance.get('/admin/data');
    return response.data; // 응답 데이터를 반환
};
