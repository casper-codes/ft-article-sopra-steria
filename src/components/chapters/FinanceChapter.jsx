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
    background: #1a1a2e;
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

const ACCENT_COLOR = "#4A9FD4";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function FinanceChapter() {
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
                    chapter="CHAPTER_TWO"
                    tab="FINANCE"
                    subtitle="How a single email could crash a continent's payment systems"
                    day="Thursday"
                    location="Madrid, Spain"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    In Madrid, a single phishing email sets off a chain reaction that brings payment systems to a standstill. It begins quietly, with a distracted employee and a convincingly urgent email. Within hours, an issue at a local supermarket in Madrid escalates into a multi-million-euro crisis, with malware spreading from one store to thousands and damage reaching far beyond one retailer.
                </BodyText>
                <TimelineBlock>
                    <TimelineEvent
                        time="12:00pm"
                        description="A stressed store manager clicks a link to a lookalike inventory portal in an 'urgent' email from a supposed HQ executive."
                    />
                    <TimelineEvent
                        time="12:20pm"
                        description="Cyber attackers can now traverse the network and deploy malware to the retailer's POS system. Sensitive payment data is sent in batches to an external server."
                    />
                    <TimelineEvent
                        time="1:05pm"
                        description="Concerned about the email chain, the store manager contacts the IT help desk."
                    />
                    <TimelineEvent
                        time="1:35pm"
                        description="As the malware overloads resources, payment systems across stores fail."
                    />
                    <TimelineEvent
                        time="2:00pm"
                        description="The help desk is flooded with reports from stores experiencing outages."
                    />
                </TimelineBlock>
            </HeroSection>

            <Divider />

            {/* When human behaviour becomes the entry point */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>When human behaviour becomes the entry point</SectionHeading>
                <BodyText>
                    Today's phishing attacks are meticulous – they mimic corporate tone, structure and urgency. An employee's decision to trust an email while under pressure provides the attackers with everything they need to prowl the network and access a vulnerable system.
                </BodyText>
                <BodyText>
                    Artificial intelligence (AI) enables attackers to craft flawless, personalised phishing emails free of spelling errors or awkward phrasing. AI enables them to use real-time company data and social media to make each message convincingly authentic.
                </BodyText>
                <PullQuote
                    quote="Entire campaigns are being run by machines – targeting the right person, at the right time, with the right message. Defending against this demands adaptive defences powered by the same intelligence, capable of detecting patterns and responding in real time"
                    name="Arsenio Pérez Gavira"
                    role="Cybersecurity Manager, Sopra Steria Spain"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    Around 60 per cent of all cyber security incidents reported by customers to Sopra Steria's clients were phishing-related. To prevent these attacks, organisations must train staff with scenario-based and department-specific simulations to respond to attacks in real time.
                </BodyText>
                <DataPoint
                    stat="41%"
                    description="is the approximate amount of organisations that suffered a material incident in the past 12 months, and say it was caused by a third party."
                    source="World Economic Forum's 2024 Cybersecurity Outlook"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* From a company breach to major disruption */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>From a company breach to major disruption</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="3:00pm"
                        description="All of the retailer's stores close as payments and inventory systems fail."
                    />
                    <TimelineEvent
                        time="4:30pm"
                        description="Internal forensics reveals loyalty card and e-receipt data were compromised."
                    />
                    <TimelineEvent
                        time="6:30pm"
                        description="The first media reports break as customers report phishing attacks."
                    />
                </TimelineBlock>
            </Section>

            <Divider />

            {/* When systems connect, failure is exponential */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>When systems connect, failure is exponential</SectionHeading>
                <BodyText>
                    The attack exposes the fragility of interconnected systems. Attackers launch fresh intrusions from the breach, while banks compound the disruption with tightened security that leads consumer spending to grind to a halt.
                </BodyText>
                <BodyText>
                    The cost of these attacks is high: both financially and in terms of customer trust. In 2025, UK retailer Marks & Spencer estimated that there had been a £300mn hit to profits following a cyber incident that stole customer data and disrupted operations and product availability.
                </BodyText>
                <PullQuote
                    quote="With everything being connected, or wanting to be connected to every other system, firms must examine their architecture and make sure there aren't any security gaps. A zero-trust architecture eliminates the ability for attackers to traverse the network, by ensuring authentication is always required and nothing is trusted automatically"
                    name="Stefan Garczynski"
                    role="Managing Security Architect, Sopra Steria"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* The next day */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>The next day</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="7:00am"
                        description="It emerges that supplier credentials were exploited. Other European retailers are targeted."
                    />
                    <TimelineEvent
                        time="2:00pm"
                        description="Banks introduce tighter fraud checks."
                    />
                </TimelineBlock>
                <SolutionsList
                    accentColor={ACCENT_COLOR}
                    items={[
                        "Zero-trust architecture",
                        "Network segmentation",
                        "Targeted phishing training",
                        "Supplier security checks",
                        "AI-driven threat monitoring",
                        "Cross-sector drills"
                    ]}
                />
            </Section>
        </Chapter>
    );
}
