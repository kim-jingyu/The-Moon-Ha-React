import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/font.css';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
`;

export const MainButton = styled(NavLink)`
    display: flex;
    align-items: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 700; /* Bold */
    color: ${colors.drak_gray};
    font-size: 14px;
    text-decoration: none;
    padding: 12px;
    border-radius: 10px;
    &:hover {
        background-color: ${colors.light_gray};
    }
    &.active {
        color: ${colors.main_green};
        background-color: ${colors.light_gray};
    }
`;

export const Icon = styled.img`
    margin-right: 15px;
`;

export const SubMenu = styled.div`
    padding-left: 20px;
`;

export const SubMenuLink = styled(NavLink)`
    display: flex;
    align-items: center;
    font-family: 'Happiness-Sans', sans-serif;
    font-weight: 600; /* Bold */
    color: ${colors.drak_gray};
    font-size: 12px;
    text-decoration: none;
    padding: 12px;
    border-radius: 10px;
    &:hover {
        background-color: ${colors.light_gray};
    }
    &.active {
        color: ${colors.main_green};
        background-color: ${colors.light_gray};
    }
`;
