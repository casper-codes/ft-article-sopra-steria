import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 120px 40px 80px;
    background: #1a1a2e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${media.mobile(`
        padding: 100px 20px 60px;
    `)}
`;

const ContentWrapper = styled.div`
    max-width: 900px;
    text-align: center;
    z-index: 2;
`;

const Eyebrow = styled(motion.p)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
`;

const Title = styled(motion.h1)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 64px;
    font-weight: 400;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 32px;

    ${media.tablet(`
        font-size: 48px;
    `)}

    ${media.mobile(`
        font-size: 36px;
    `)}
`;

const Subtitle = styled(motion.p)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto 48px;

    ${media.mobile(`
        font-size: 16px;
    `)}
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function IntroSection() {
    return (
        <Container>
            <ContentWrapper>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <Eyebrow variants={itemVariants}>
                        FT Partner Content
                    </Eyebrow>
                    <Title variants={itemVariants}>
                        Sopra Steria
                    </Title>
                    <Subtitle variants={itemVariants}>
                        Placeholder subtitle - content to be added from Figma designs.
                    </Subtitle>
                </motion.div>
            </ContentWrapper>
            <ScrollIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <span>Scroll to explore</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </ScrollIndicator>
        </Container>
    );
}
