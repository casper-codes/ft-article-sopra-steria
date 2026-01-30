import LottieScrolljack from "./LottieScrolljack";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import {
    BackgroundContainer,
    Container,
    ContentWrapper,
    Paragraph,
    AboveTopLeftCircle,
    BottomLeftCircle,
    HalfWidthRightSVGContainer,
    SVGWrapper,
    IntroLoopSVG,
    HalfWidthLeftSVGContainer,
    TopLeftCircle,
    TopRightCircle,
    QuoteContent,
    QuoteSVG,
    LeftToBottomQuoteWrapper,
    HalfWidthRightParagraph,
    HalfWidthLeftParagraph,
    itemVariants,
    TabletBreak,
    DesktopBreak,
} from "./shared/SectionLayout";
import OverlayImage from "./shared/OverlayImage";

export default function PreparingForComplexitySection({
    backgroundColor = "#d7d7d7",
}) {
    return (
        <BackgroundContainer
            backgroundColor={backgroundColor}
            id="preparing-for-complexity"
        >
            <Container>
                <ContentWrapper>
                    <SectionTitleGroup
                        chapter="Chapter four"
                        title="Preparing for complexity – rethinking resilience"
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_04_HALVED"
                        enableScrollSync={true}
                    />

                    <HalfWidthLeftSVGContainer>
                        <IntroLoopSVG />
                    </HalfWidthLeftSVGContainer>

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <AboveTopLeftCircle />
                        <Paragraph>
                            Against the polycrisis backdrop, bright spots are
                            emerging. One is that a large majority of
                            respondents – 86 per cent of experts and 84 per cent
                            of the public – agree that the risks that worry them
                            most could be at least partially avoided by{" "}
                            <b>strong preventive action</b>. Another is that 89
                            per cent of experts and 72 per cent of the general
                            population agree that insurers have an important
                            role in protecting against future risks. But how?
                        </Paragraph>
                        <OverlayImage
                            src="/images/s5/1.jpg"
                            decorative
                            desktop={{ top: "130%", left: "20%" }}
                            tablet={{ top: "135%", left: "20%" }}
                            mobile={{ top: "118%", left: "30%" }}
                        />
                    </HalfWidthLeftParagraph>
                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 839 499"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        tabletHeight="300px"
                        mobileHeight="200px"
                    >
                        <path
                            d="M528.13 0.5H738.5C793.728 0.5 838.5 45.2715 838.5 100.5V156.125C838.5 211.354 793.728 256.125 738.5 256.125H100.5C45.2715 256.125 0.5 300.897 0.5 356.125V398.5C0.5 453.728 45.2715 498.5 100.5 498.5H419.5"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <TopLeftCircle />
                        <Paragraph>
                            This year’s AXA Future Risks Report found that the
                            advent of AI is one of the biggest perceived risks
                            today. Yet Gunter argues that it cuts both ways.
                            “There’s an acceleration in the use of AI in the
                            cyber-threat world, but AI and big data is also a
                            powerful tool for helping us to manage clients’
                            risk,” he says.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s5/2.jpg"
                            decorative
                            desktop={{ top: "150%", left: "50%" }}
                            tablet={{ top: "150%", left: "70%" }}
                            mobile={{ display: "none" }}
                        />
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                            tabletHeight="150px"
                            mobileHeight="100px"
                        >
                            <path
                                d="M392.5 0.5C442.068 0.5 483 40.6824 483 90.25C483 139.818 442.818 180 393.25 180H0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                    </HalfWidthRightSVGContainer>
                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph variants={itemVariants}>
                            Andrew Farr, AXA XL’s Global Chief Underwriting
                            Officer for Financial Lines, says that insurers are
                            integrating emerging technologies such as AI-driven
                            risk assessments, predictive analytics and
                            automation to stay a step ahead of evolving threats.
                            They are also designing insurance coverage to
                            industry-specific risks or to address other
                            fast-changing cyber risks.
                        </Paragraph>
                        <TopRightCircle />
                    </HalfWidthLeftParagraph>
                    <DesktopBreak />
                    <DesktopBreak />
                    <LeftToBottomQuoteWrapper
                        height="500px"
                        mobileHeight="400px"
                        tabletHeight="400px"
                    >
                        <QuoteSVG />
                        <QuoteContent>
                            <Quote
                                text={
                                    <>
                                        <TabletBreak />
                                        <TabletBreak />
                                        <DesktopBreak />
                                        "We're working closely with cyber
                                        security firms and offering proactive
                                        risk management services to help clients
                                        strengthen their defences before an
                                        attack&nbsp;happens"
                                    </>
                                }
                                attribution="Andrew Farr, AXA XL's Global Chief Underwriting Officer"
                                variants={itemVariants}
                            />
                        </QuoteContent>
                    </LeftToBottomQuoteWrapper>
                    <HalfWidthRightParagraph>
                        <AboveTopLeftCircle
                            left="20%"
                            mobileLeft="50.6%"
                            tabletLeft="33.4%"
                        />
                        <br />
                        <br />
                        <Paragraph variants={itemVariants}>
                            Insurers are also promoting cyber resilience through
                            consulting, employee training, and incident response
                            planning. “Fostering better industry-wide
                            information sharing and best practices will improve
                            our collective defences and make everyone more
                            resilient against cyber threats,” says Farr.
                        </Paragraph>
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                            tabletHeight="150px"
                            mobileHeight="100px"
                        >
                            <path
                                d="M392.5 0.5C442.068 0.5 483 40.6824 483 90.25C483 139.818 442.818 180 393.25 180H0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                        <BottomLeftCircle />
                    </HalfWidthRightSVGContainer>
                </ContentWrapper>
                <LottieScrolljack
                    animations="AXA_Scrolly_DP07.json"
                    backgroundColor={backgroundColor}
                />
            </Container>
        </BackgroundContainer>
    );
}
