import { keyframes, css } from "styled-components";

function generateRandomClips(steps = 20, activePercent = 20, maxTop = 100, maxBottom = 170) {
    let frames = "";
    for (let i = 0; i <= steps; i++) {
        const percent = ((i / steps) * activePercent).toFixed(2);
        const top = Math.floor(Math.random() * maxTop);
        const bottom = Math.floor(Math.random() * maxBottom);
        frames += `${percent}% { clip: rect(${top}px, 9999px, ${bottom}px, 0); }\n`;
    }
    // After the active burst, hide the pseudo-element for the rest of the cycle
    frames += `${activePercent}% { clip: rect(0, 0, 0, 0); }\n`;
    frames += `100% { clip: rect(0, 0, 0, 0); }\n`;
    return frames;
}

const glitch1 = keyframes`${generateRandomClips(20, 60)}`;
const glitch2 = keyframes`${generateRandomClips(20, 60)}`;

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
        animation: ${glitch1} 6s linear infinite;
    }

    &::after {
        left: 2px;
        text-shadow: 1px 0 blue;
        animation: ${glitch2} 8s linear infinite;
    }
`;
