import { keyframes, css } from "styled-components";

function generateRandomClips(steps = 20, maxTop = 100, maxBottom = 170) {
    let frames = "";
    for (let i = 0; i <= steps; i++) {
        const percent = ((i / steps) * 100).toFixed(2);
        const top = Math.floor(Math.random() * maxTop);
        const bottom = Math.floor(Math.random() * maxBottom);
        frames += `${percent}% { clip: rect(${top}px, 9999px, ${bottom}px, 0); }\n`;
    }
    return frames;
}

const glitch1 = keyframes`${generateRandomClips()}`;
const glitch2 = keyframes`${generateRandomClips()}`;

/**
 * Reusable glitch effect for styled-components.
 * Requires `data-text` attribute on the element matching its text content.
 *
 * Usage:
 *   const GlitchText = styled.p`
 *       ${glitchEffect}
 *   `;
 *   <GlitchText data-text="HELLO">HELLO</GlitchText>
 */
export const glitchEffect = css`
    position: relative;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        overflow: hidden;
        padding: inherit;
    }

    &::before {
        left: -2px;
        text-shadow: -1px 0 red;
        animation: ${glitch1} 2s linear infinite alternate-reverse;
    }

    &::after {
        left: 2px;
        text-shadow: 1px 0 blue;
        animation: ${glitch2} 3s linear infinite alternate-reverse;
    }
`;
