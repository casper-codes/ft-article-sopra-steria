import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Container = styled(motion.div)`
    text-align: left;
    margin-bottom: 48px;

    ${media.mobile(`
        margin-bottom: 32px;
    `)}
`;

const ChapterLabel = styled.div`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.6)"};
    margin-bottom: 8px;

    ${media.mobile(`
        font-size: 12px;
        letter-spacing: 2px;
    `)}
`;

const TabLabel = styled.div`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.$accentColor || "#FFD700"};
    display: inline-block;
    padding: 4px 8px;
    border: 1px solid ${props => props.$accentColor || "#FFD700"};
    margin-bottom: 16px;

    ${media.mobile(`
        font-size: 12px;
    `)}
`;

const Subtitle = styled.h2`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
    line-height: 1.4;
    margin: 0 0 24px 0;
    max-width: 600px;

    ${media.mobile(`
        font-size: 17px;
    `)}
`;

const Meta = styled.div`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.7)"};
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    ${media.mobile(`
        font-size: 14px;
        gap: 12px;
    `)}
`;

const MetaItem = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

/**
 * ChapterIntro Component
 * Chapter header with label, tab name, subtitle, day and location
 *
 * @param {string} chapter - Chapter label (e.g., "CHAPTER_ONE")
 * @param {string} tab - Tab/category name (e.g., "ENERGY")
 * @param {string} subtitle - Chapter subtitle/title
 * @param {string} day - Day of the week
 * @param {string} location - Location name
 * @param {string} accentColor - Accent color for tab label
 */
export default function ChapterIntro({ chapter, tab, subtitle, day, location, accentColor }) {
    return (
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <ChapterLabel>{chapter}</ChapterLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
                <TabLabel $accentColor={accentColor}>{tab}</TabLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Subtitle>{subtitle}</Subtitle>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Meta>
                    {day && <MetaItem>{day}</MetaItem>}
                    {day && location && <MetaItem>•</MetaItem>}
                    {location && <MetaItem>{location}</MetaItem>}
                </Meta>
            </motion.div>
        </Container>
    );
}
