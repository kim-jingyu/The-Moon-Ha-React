import styled from 'styled-components';

export const PlayerWrapper = styled.div`
    position: relative;
    border-radius: 10px;
    width: 328px;
    height: 180px;
    margin: 80px 0 25px;
    z-index: 1;
    aspect-ratio: 16 / 9;

    .player {
        position: relative; /* absolute 대신 relative 사용 */
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
    }
`;

export const ThumbnailWrapper = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    z-index: 2; /* 썸네일이 ReactPlayer보다 위에 위치 */
`;
