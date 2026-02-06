import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import { BodyText, PullQuote } from "../shared";

const Section = styled.section`
    background: #0d1117;
    color: #fff;
`;

const Content = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    padding: 100px 40px;
    text-align: left;

    ${media.mobile(`
        padding: 80px 20px;
    `)}
`;

const Title = styled(motion.h2)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 48px;
    font-weight: 400;
    color: #E8D44D;
    line-height: 1.2;
    margin: 0 0 40px 0;

    ${media.tablet(`
        font-size: 40px;
    `)}

    ${media.mobile(`
        font-size: 32px;
        margin-bottom: 32px;
    `)}
`;

const ACCENT_COLOR = "#E8D44D";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ConclusionSection() {
    return (
        <Section>
            <Content
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Title variants={itemVariants}>
                    The lesson is clear
                </Title>
                <motion.div variants={itemVariants}>
                    <BodyText>
                        The lesson is clear: cyber threats do not respect borders, digital or physical. From corrupted payment infrastructure in Madrid to a disrupted transport network throughout the UK and blackouts in Oslo, these hypothetical scenarios show how quickly disruption could ripple across Europe's daily life – crossing industries and countries in hours, sometimes minutes.
                    </BodyText>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <BodyText>
                        The sophistication of these attacks demands an equally sophisticated response, but this cyber resilience cannot be built in silos. These cases highlight why a multifaceted, cross-border and cross-sector approach to cyber security is required in today's hyper-connected society.
                    </BodyText>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <BodyText>
                        The future will belong not to the best-defended sector, but to the best-coordinated network.
                    </BodyText>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <PullQuote
                        quote="It's no longer a case of if an attack will happen, but when. To stay ahead of threats evolving in both complexity and scale, Europe must act not just with urgency, but with unity"
                        name="Fabien Lecoq"
                        role="Cybersecurity Director, Sopra Steria"
                        accentColor={ACCENT_COLOR}
                    />
                </motion.div>
            </Content>
        </Section>
    );
}
