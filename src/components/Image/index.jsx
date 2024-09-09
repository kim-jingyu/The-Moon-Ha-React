import { ImageWrapper } from './styled';

const CustomImage = ({ src, width }) => {
    return (
        <>
            <ImageWrapper src={src} width={width}></ImageWrapper>
        </>
    );
};

export default CustomImage;
