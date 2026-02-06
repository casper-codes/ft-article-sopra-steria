import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 120px 40px 80px;
    background: #0d1117;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    ${media.mobile(`
        padding: 100px 20px 60px;
    `)}
`;

// Placeholder for background image - will be replaced with actual asset
const BackgroundOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(13, 17, 23, 0.3) 0%,
        rgba(13, 17, 23, 0.6) 50%,
        rgba(13, 17, 23, 0.9) 100%
    );
    z-index: 1;
`;

const ContentWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    justify-content: space-between;

    ${media.mobile(`
        min-height: 70vh;
    `)}
`;

const TopContent = styled.div`
    text-align: left;
`;

const BottomContent = styled.div`
    text-align: right;
`;

const MainTitle = styled(motion.h1)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    color: #E8D44D;
    line-height: 1.05;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -1px;

    ${media.tablet(`
        font-size: 56px;
    `)}

    ${media.mobile(`
        font-size: 40px;
    `)}
`;

const BigQuestion = styled(motion.h2)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    color: #E8D44D;
    line-height: 1.1;
    margin: 0;
    text-transform: uppercase;

    ${media.tablet(`
        font-size: 56px;
    `)}

    ${media.mobile(`
        font-size: 36px;
    `)}
`;

const Standfirst = styled(motion.p)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    max-width: 500px;
    margin: 32px 0 0 0;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    ${media.mobile(`
        font-size: 14px;
        max-width: 100%;
    `)}
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 2;

    ${media.mobile(`
        left: 20px;
        bottom: 30px;
    `)}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
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
            <BackgroundOverlay />
            <ContentWrapper>
                <TopContent>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <MainTitle variants={itemVariants}>
                            Digital<br />
                            Disruption<br />
                            Diaries:
                        </MainTitle>
                        <Standfirst variants={itemVariants}>
                            Three hypothetical stories expose how cyber attacks could swiftly disrupt and destabilise daily life – and explore the solutions and measures required to protect our most critical systems
                        </Standfirst>
                    </motion.div>
                </TopContent>
                <BottomContent>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <BigQuestion variants={itemVariants}>
                            What<br />
                            if Europe's<br />
                            networks<br />
                            went dark?
                        </BigQuestion>
                    </motion.div>
                </BottomContent>
            </ContentWrapper>
            <ScrollIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <span>Scroll to explore</span>
            </ScrollIndicator>
        </Container>
    );
}
