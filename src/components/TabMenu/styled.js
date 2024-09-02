import React, { useState } from 'react';
import styled from 'styled-components';
import '../../styles/font.css';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    // background-color: ${colors.drak_gray};
`;

export const TabList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const TabItem = styled.li`
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: ${(props) => (props.active ? '700' : '400')};
    color: ${(props) => (props.active ? colors.main_green : colors.drak_gray)};
    font-size: 10pt;
    padding-top: 22px;
    padding-right: 30px;
    cursor: pointer;
    &:hover {
        color: ${(props) => (props.active ? colors.main_green : colors.drak_gray)};
    }
`;
