import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Table } from 'antd';

export const StyleTable = styled(Table)`
 width: 100% !important;

    .ant-table {
        table-layout: fixed;
        // width: 100% !important; /* 부모의 너비에 맞게 조정 */
    }
    .ant-table-container {
        overflow: auto; /* 내용이 많을 경우 스크롤 가능하게 설정 */
    }
    /* 테이블 헤더 스타일 */
    .ant-table-thead > tr > th {
        color: ${colors.black} /* 텍스트 색상 */
        font-weight: 600; /* 폰트 굵기 */
        background: ${colors.white}; /* 배경색 */
        border-bottom: 1px solid ${colors.gray}; /* 하단 테두리 */
        transition: background 0.2s ease; /* 배경색 전환 */
        padding: 10px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    /* hover 시 배경색 제거 */
    .ant-table-thead > tr > th:hover {
        background: transparent !important; /* 배경색 제거 */
    }
        
    .ant-table-tbody > tr > td {
        border-bottom: none; /* 바디 셀 하단 테두리 제거 */
        padding: 10px !important; /* 바디 셀에 패딩 추가 */
        white-space: normal; /* 텍스트가 줄바꿈되지 않게 */
        overflow: hidden; /* 넘치는 내용 숨김 */
        text-overflow: ellipsis; /* 넘치는 텍스트는 ...으로 표시 */
    }

    /* hover 시 색상 변경 방지 */
    .ant-table-tbody > tr.ant-table-row:hover > td,
    .ant-table-tbody > tr.ant-table-row:hover {
        background: transparent !important; /* 배경색 제거 */
        color: inherit !important; /* 텍스트 색상 유지 */
    }
    /* 선택된 행의 배경색 제거 */
    .ant-table-tbody > tr.ant-table-row.ant-table-row-selected {
        background: transparent !important; /* 배경색 제거 */
    }

    .ant-table-wrapper .ant-table-cell,
    .ant-table-wrapper .ant-table-thead > tr > th,
    .ant-table-wrapper .ant-table-tbody > tr > th,
    .ant-table-wrapper .ant-table-tbody > tr > td,
    .ant-table-wrapper tfoot > tr > th,
    .ant-table-wrapper tfoot > tr > td {
        padding: 10px !important;
    }

     /* 커서: pointer 스타일 적용 */
    .navigable-row {
        cursor: pointer;
    }
`;
