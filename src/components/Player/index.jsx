/**
 * 비디어 player 컴포넌트
 * @author 최유경
 * @since 2024.09.09
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.09  	최유경       최초 생성
 * </pre>
 */

import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { PlayerWrapper, ThumbnailWrapper } from './syteld';

const Player = ({ url, thumbnail, width, height = '100%', ratio = '16/9' }) => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);
    const [hovering, setHovering] = useState(false); // Hover 상태
    const [ready, setReady] = useState(false);
    const [curr, setCurr] = useState(url);

    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {
        setHovering(true);
        hoverTimeout.current = setTimeout(() => {
            setPlaying(true); // 0.5초 후 비디오 재생
        }, 500); // 0.5초 지연
    };

    const handleMouseLeave = () => {
        setHovering(false);
        clearTimeout(hoverTimeout.current); // Hover가 해제되면 타이머 초기화
        setPlaying(false); // 비디오 정지
    };

    const handlePlay = () => {
        setPlaying(true);
    };

    const onEnded = () => {
        playerRef.current.seekTo(0); // 동영상 끝나면 처음으로 돌아감
        setPlaying(true); // 계속 재생
    };

    return (
        <>
            <PlayerWrapper
                onMouseEnter={handleMouseEnter} // Hover 시작
                onMouseLeave={handleMouseLeave} // Hover 종료
                width={width}
                height={height}
                ratio={ratio}
            >
                {thumbnail && !playing && <ThumbnailWrapper src={thumbnail} alt="썸네일" />}
                <ReactPlayer
                    ref={playerRef}
                    url={curr}
                    className="player"
                    playing={playing}
                    controls={true}
                    onEnded={onEnded}
                    onReady={() => setReady(true)}
                    width="100%" /* 고정 너비 */
                    height="auto" /* 고정 높이 -> height에 맞추려면 100%로 변경하면 됨.*/
                />
            </PlayerWrapper>
        </>
    );
};

export default Player;
