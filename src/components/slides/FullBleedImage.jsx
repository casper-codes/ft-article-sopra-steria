import styled from "styled-components";
import { getAssetPath } from "../../utils/assetPath";

const ImageSlide = styled.section`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export default function FullBleedImage({ src, videoSrc, poster, alt = "" }) {
    if (videoSrc) {
        return (
            <ImageSlide>
                <Video
                    src={getAssetPath(videoSrc)}
                    poster={poster ? getAssetPath(poster) : undefined}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </ImageSlide>
        );
    }

    return (
        <ImageSlide>
            <Image src={src} alt={alt} />
        </ImageSlide>
    );
}
