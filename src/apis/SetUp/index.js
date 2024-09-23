/**
 * setup 연결
 *
 * @author 최유경
 * @since 2024.09.04
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.04 	최유경       최초 생성
 * </pre>
 */

import instance from '..';

export const fetchSetUpData = async () => {
    const response = await instance.get('/admin/data');
    return response.data; // 응답 데이터를 반환
};
