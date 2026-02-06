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
    background: #0d1117;
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

const ACCENT_COLOR = "#E8D44D";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function EnergyChapter() {
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
                    chapter="CHAPTER_ONE"
                    tab="ENERGY"
                    subtitle="When vital infrastructure is held hostage by hacktivists"
                    day="Tuesday"
                    location="Oslo, Norway"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    The sun sets early in December, and by mid-afternoon the city is slipping into darkness. As workers wrap up for the day, the grid that keeps Norway – and several neighbouring countries – running begins to falter.
                </BodyText>
                <TimelineBlock>
                    <TimelineEvent
                        time="4:45pm"
                        description="A lead engineer at one of Norway's top energy companies logs in for the evening shift and is immediately locked out of the grid's control system. Something is seriously wrong."
                    />
                    <TimelineEvent
                        time="5:00pm"
                        description="Remotely, a hacktivist group is in the process of systematically taking out the smart grids of the country's leading energy providers via a distributed denial-of-service attack. By targeting smart meters, they are overwhelming the central servers that power the grids."
                    />
                    <TimelineEvent
                        time="5:10pm"
                        description="Across town, the CTO of a prominent investment firm is ready to leave for the day. She presses the elevator button on the 14th floor of the company's building, but nothing happens. Moments later, the entire floor is plunged into darkness."
                    />
                    <TimelineEvent
                        time="5:15pm"
                        description="Outside, the city's skyline no longer shines brightly. Mobile and internet services are down. People across Oslo start to panic."
                    />
                </TimelineBlock>
            </HeroSection>

            <Divider />

            {/* An evolving threat landscape */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>An evolving threat landscape</SectionHeading>
                <BodyText>
                    Energy powers everything. But as energy networks become "smarter", with automated load balancing, remote sensors and increasing reliance on digital infrastructure, cyber criminals can find novel ways of exploiting cracks in the system.
                </BodyText>
                <DataPoint
                    stat="48"
                    description="attacks on Europe's energy infrastructure in 2022. Cyber attacks doubled between 2020 and 2022 in Europe's power sector."
                    source="Eurelectric, a federation for the European electricity industry"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    Sopra Steria, a technology and consulting company that provides cybersecurity services, identified in its State of Cybersecurity 2025 report that Advanced Persistent Threat (APT) groups are increasingly collaborating with cyber criminals, particularly on destructive attacks.
                </BodyText>
                <PullQuote
                    quote="Historically, cyber attacks have been high-consequence and low-frequency. When you get hacktivists and criminals who are able to target operational technology and who understand how to do it, you eventually get high-consequence, high-frequency events"
                    name="Robert M Lee"
                    role="Leading expert in operational technology security, CEO of Dragos"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* The city is plunged into darkness */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>The city is plunged into darkness</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="5:20pm"
                        description="As the grid's automated load balancers struggle to cope with the intensity of a sustained attack, safety shutdowns are being triggered across energy grids, causing blackouts."
                    />
                    <TimelineEvent
                        time="5:30pm"
                        description="Workers use phone torches to find their way to the stairwell and towards the lobby. Confusion is widespread; every building is impacted."
                    />
                    <TimelineEvent
                        time="7:00pm"
                        description="C-suite executives across the various energy firms are struggling to get a sense of the impact as internal systems, including monitoring tools, have been compromised. Engineers no longer have real-time visibility."
                    />
                </TimelineBlock>
            </Section>

            <Divider />

            {/* Operating while under attack */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>Operating while under attack</SectionHeading>
                <BodyText>
                    Most of the investment in cybersecurity in the energy sector has gone into prevention rather than visibility and monitoring. This presents challenges for root-cause analysis and improving prevention strategies, explains Lee.
                </BodyText>
                <PullQuote
                    quote="Energy systems being as complex as they are, it is much more difficult to know what actually happened"
                    name="Robert M Lee"
                    role="Leading expert in operational technology security, CEO of Dragos"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    Europe's policymakers are starting to recognise the risks. In 2025, the European Commission signed a €36mn agreement with the EU's Agency for Cybersecurity (ENISA) to administer a reserve that can be used by critical sectors – including energy – to support the response and recovery from cyber incidents.
                </BodyText>
                <PullQuote
                    quote="Critical operators are moving toward defensible architectures where there's an assumption that breaches will occur"
                    name="Jørgen Rørvik"
                    role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                    accentColor={ACCENT_COLOR}
                />
                <BodyText>
                    Defensible architectures can include breaking the grid into "islands", which can distribute power locally, to prevent cascading failures, or building a parallel network for monitoring and management to prevent loss of visibility, Rørvik says.
                </BodyText>
                <PullQuote
                    quote="Within this architecture, essential assets can continue functioning, even while under sustained attack"
                    name="Jørgen Rørvik"
                    role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                    accentColor={ACCENT_COLOR}
                />
            </Section>

            <Divider />

            {/* Work continues through the night */}
            <Section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <SectionHeading>Work continues through the night</SectionHeading>
                <TimelineBlock>
                    <TimelineEvent
                        time="8:00pm"
                        description="Policymakers, emergency services and cybersecurity experts gather to implement emergency procedures."
                    />
                    <TimelineEvent
                        time="02:00am"
                        description="Cyber experts work with internet service providers to divert malicious traffic and implement recovery protocols."
                    />
                    <TimelineEvent
                        time="08:00am"
                        description="Power has returned, but public services reel from the human and financial cost of this major incident."
                    />
                </TimelineBlock>
                <SolutionsList
                    accentColor={ACCENT_COLOR}
                    items={[
                        "State-led cyber defence policies",
                        "Regular penetration testing and threat simulations",
                        "24/7 Security Operation Centres with real-time monitoring",
                        "Cross-sector coordination across energy, telecoms and media",
                        "A threat-driven approach beyond compliance"
                    ]}
                />
            </Section>
        </Chapter>
    );
}
