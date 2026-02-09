import { useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
`;

export default function StickySlide({ children, appearInPlace }) {
    const ref = useRef();

    useLayoutEffect(() => {
        const el = ref.current;
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        if (appearInPlace) {
            el.style.opacity = "0";
        }
    }, [appearInPlace]);

    useEffect(() => {
        if (!appearInPlace) return;
        const el = ref.current;

        const handleScroll = () => {
            el.style.opacity = el.getBoundingClientRect().top <= 0 ? "1" : "0";
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [appearInPlace]);

    return <StickyWrapper ref={ref}>{children}</StickyWrapper>;
}
