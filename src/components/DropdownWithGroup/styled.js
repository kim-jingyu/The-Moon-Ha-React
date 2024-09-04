import React, { useState } from 'react';
import styled from 'styled-components';

import '../../styles/font.css';
import { colors } from '../../styles/colors';

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownGroupContainer = styled.div`
    padding: 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
    }
`;

export const DropdownButton = styled.button`
    font-family: 'Happiness-Sans', sans-serif;
    background-color: ${colors.white};
    color: ${colors.drak_gray};
    font-weight: 400; /* Bold */
    width: 240px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid ${colors.gray};
    padding: 10px 15px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: ${colors.light_gray};
    }
`;

export const DropdownMenu = styled.div`
    margin-top: 5px;
    font-family: 'Happiness-Sans', sans-serif;
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    background-color: ${colors.white};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    max-height: 300px;
    overflow-y: auto; /*스크롤 가능*/
    min-width: 160px;
    font-size: 12px;
    width: 220px;
    z-index: 1;
    flex-direction: column;
`;

export const DropdownItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.light_gray};
        border-radius: 5px;
    }
`;

export const GroupTitle = styled.div`
    font-weight: bold;
    padding-bottom: 8px;
`;

export const IconWrapper = styled.div`
    margin-left: 10px;
`;
