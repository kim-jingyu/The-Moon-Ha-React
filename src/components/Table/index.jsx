import React from 'react';

import '../../styles/font.css';
import { StyleTable } from './styled';
import { useNavigate } from 'react-router';

const CustomTable = ({ columns, data, hasPage, shouldNavigate, onRowClick, pagination }) => {
    // 클릭 시 이동할 경로를 설정하는 함수
    const handleClick = (record) => {
        if (shouldNavigate && shouldNavigate(record)) {
            onRowClick(record); // 페이지 이동 처리
        } else {
            console.log('페이지 이동 조건을 충족하지 않음');
        }
    };

    return (
        <>
            <StyleTable
                columns={columns}
                dataSource={data}
                pagination={hasPage ? { pageSize: pagination } : false}
                onRow={(record) => {
                    return {
                        onClick: () => handleClick(record), // 행 클릭 시 호출
                    };
                }}
            />
        </>
    );
};
export default CustomTable;
