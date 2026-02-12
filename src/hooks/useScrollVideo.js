import { useRef, useEffect } from "react";

/**
 * Scrubs a video forward/backward based on scroll position.
 * Maps scrollProgress (0→1) directly to video.currentTime (0→duration).
 *
 * @param {MotionValue<number>} scrollProgress - MotionValue from useScroll
 * @returns {React.RefObject} ref to attach to the <video> element
 */
export default function useScrollVideo(scrollProgress) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!scrollProgress) return;

        const unsubscribe = scrollProgress.on("change", (v) => {
            const video = videoRef.current;
            if (!video || !video.duration || isNaN(video.duration)) return;

            video.currentTime = v * video.duration;
        });

        return () => unsubscribe();
    }, [scrollProgress]);

    return videoRef;
}
