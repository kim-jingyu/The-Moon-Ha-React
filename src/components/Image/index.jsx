/**
 * 이미지 viewer
 * @author 최유경
 * @since 2024.09.05
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.05  	최유경       최초 생성
 * </pre>
 */

import { ImageWrapper } from './styled';

const CustomImage = ({ src, width }) => {
    return (
        <>
            <ImageWrapper src={src} width={width}></ImageWrapper>
        </>
    );
};

export default CustomImage;
