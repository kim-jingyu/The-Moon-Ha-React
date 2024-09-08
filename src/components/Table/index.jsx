import React from 'react';

import '../../styles/font.css';
import { StyleTable } from './styled';
import { ConfigProvider } from 'antd';
import { colors } from '../../styles/colors';

const CustomTable = ({ columns, data, hasPage }) => {
    return (
        <>
            <StyleTable columns={columns} dataSource={data} pagination={hasPage} />
        </>
    );
};
export default CustomTable;
