import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import {
    ChapterIntro,
    BodyText,
    TimelineEvent,
    SectionHeading,
    PullQuote,
    DataPoint,
    SolutionsList
} from "../shared";

const Chapter = styled.div`
    background: #1e2a38;
    color: #fff;
`;

const Section = styled(motion.section)`
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 40px;

    ${media.mobile(`
        padding: 60px 20px;
    `)}
`;

const HeroSection = styled(Section)`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 120px;
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0;
`;

const TimelineBlock = styled.div`
    margin: 32px 0;
`;

const StatGrid = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-left: 4px solid ${props => props.$accentColor || "#4CAF50"};
    padding: 32px 40px;
    margin: 40px 0;

    ${media.mobile(`
        padding: 24px 20px;
    `)}
`;

const StatTitle = styled.div`
    font-family: "dm-sans", "DM Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
`;

const StatRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const StatLabel = styled.span`
    font-family: "dm-sans", "DM Sans", sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    flex: 1;
`;

const StatValue = styled.span`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    color: #fff;
`;

const StatSource = styled.p`
    font-family: "dm-sans", "DM Sans", sans-serif;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin: 16px 0 0 0;
    font-style: italic;
`;

const ACCENT_COLOR = "#4CAF50";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function TransportChapter() {
    return (
        <Chapter>
            {/* Hero / Chapter Intro */}
            <HeroSection
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <ChapterIntro
                    chapter="CHAPTER_THREE"
                    tab="TRANSPORT"
                    subtitle="How hidden vulnerabilities grind a country's transport network to a halt"
                    day="Monday"
                    location="Port of Dover, UK"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    At a major UK port, logistics drivers prepare for the day ahead while commuters gather at stations across the country. But just as the morning rush begins, unexpected glitches creep into navigation systems – this is the first sign of a broader attack targeting transport nationwide.
                </BodyText>
                <TimelineBlock>
                    <TimelineEvent
                        time="8:00am"
                        description="A driver taps the first delivery address for the day into his sat-nav, only for the screen to freeze. He keeps tapping, but nothing displays."
                    />
                    <TimelineEvent
                        time="8:15am"
                        description="Others in the depot face similar issues and management wonders why vans aren't moving. Thousands of pounds of revenue could be lost from a late departure."
                    />
                    <TimelineEvent
                        time="9:00am"
                        description="A foreign hacker group is using a technique called GPS jamming to block signals and interfere with the GPS network, disrupting travel in the UK."
                    />
                </TimelineBlock>
            </HeroSection>

            <Divider />

            {/* Hackers exploit emerging vulnerabilities */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>Hackers exploit emerging vulnerabilities</SectionHeading>
                <BodyText>
                    While the Global Positioning System (GPS) has been a trusted navigation system since the mid-1990s, it's far from invulnerable.
                </BodyText>
                <PullQuote
                    quote="Jamming can block the signals, while spoofing tricks systems into misreading locations"
                    name="Fabien Lecoq"
                    role="Cybersecurity Director, Sopra Steria"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    Transport is the second most targeted sector in the EU, with the majority of attacks concentrated in air and logistics.
                </BodyText>
                <StatGrid $accentColor={ACCENT_COLOR}>
                    <StatTitle>EU Transport Sector Cyber Incidents (2025)</StatTitle>
                    <StatRow>
                        <StatLabel>Air transport</StatLabel>
                        <StatValue>58.4%</StatValue>
                    </StatRow>
                    <StatRow>
                        <StatLabel>Logistics</StatLabel>
                        <StatValue>20.8%</StatValue>
                    </StatRow>
                    <StatSource>Source: ENISA 2025 Report</StatSource>
                </StatGrid>
                <PullQuote
                    quote="Aircraft, ground systems and even airport gates are now deeply interconnected. This creates new vulnerabilities: imagine someone disrupting digital flight‑planning systems during peak travel or manipulating airport operational networks"
                    name="Stefan Garczynski"
                    role="Managing Security Architect, Sopra Steria"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* When disruption crosses borders */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>When disruption crosses borders</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="12:00pm"
                        description="The driver makes deliveries, albeit at a slower pace, using maps and institutional knowledge."
                    />
                    <TimelineEvent
                        time="3:00pm"
                        description="Over the radio, news breaks about a disruption to a UK military jet carrying an MP over Russian airspace. Early reports suggest it was a GPS disturbance."
                    />
                    <TimelineEvent
                        time="3:30pm"
                        description="UK airports implement additional security measures, delaying arrivals and departures."
                    />
                </TimelineBlock>
            </Section>

            <Divider />

            {/* Seeking security in digital sovereignty */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>Seeking security in digital sovereignty</SectionHeading>
                <BodyText>
                    Europe's reliance on GPS – a US-owned satellite service – poses a strategic risk in times of global tension. 13 EU member states have already called on the European Commission to accelerate the deployment of interference-resistant Global Navigation Satellite System (GNSS) technologies to accelerate Europe's digital sovereignty.
                </BodyText>
                <BodyText>
                    Julia Carver, an assistant professor focusing on Europe's cybersecurity policy and strategic affairs at Leiden University, explains that the EU's vision of digital sovereignty emphasises self-determination.
                </BodyText>
                <PullQuote
                    quote="Europe wants to choose its digital vendors and set the regulations and parameters for how its digital devices are used. It also wants to have greater control over personal and non-personal data"
                    name="Julia Carver"
                    role="Assistant Professor, Leiden University"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    But from a legal perspective, digital sovereignty is tricky.
                </BodyText>
                <PullQuote
                    quote="Digital sovereignty sounds compelling, but, in legal terms, it goes in many directions. It's rooted in internal market law, while the threats themselves are cross-border. That's the paradox of the digital era; the EU has limited powers, yet it faces limitless, transboundary risks"
                    name="Elaine Fahey"
                    role="Professor of EU Law, City St George's, University of London"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* Chaos continues into the evening */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>Chaos continues into the evening</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="6:00pm"
                        description="Drivers are told they will need to work overtime to recoup the company's revenue losses."
                    />
                    <TimelineEvent
                        time="7:00pm"
                        description="As the driver heads home, his usual train is delayed by two hours."
                    />
                    <TimelineEvent
                        time="7:30pm"
                        description="A news alert says trains have been cancelled and delayed due to a coordinated attack on the Wi-Fi networks at UK train stations. Cyber analysts believe a foreign entity is behind the travel chaos throughout the country."
                    />
                </TimelineBlock>
                <SolutionsList
                    accentColor={ACCENT_COLOR}
                    items={[
                        "Expanding European investment in GNSS",
                        "Manufacturing critical GPS and satellite components",
                        "Promoting EU-developed navigation software and apps",
                        "Zero-trust architectures"
                    ]}
                />
            </Section>
        </Chapter>
    );
}
