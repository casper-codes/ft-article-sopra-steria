import Quote from "./shared/Quote";
import LottieScrolljack from "./LottieScrolljack";
import styled from "styled-components";
import OverlayImage from "./shared/OverlayImage";
import {
    BackgroundContainer,
    Container,
    ContentWrapper,
    SVGWrapper,
    FullWidthSVGWrapper,
    BottomLeftCircle,
    BottomCenterCircle,
    HalfWidthRightSVGContainer,
    Circle,
    AboveTopLeftCircle,
    Paragraph,
    LeftToBottomQuoteWrapper,
    QuoteSVG,
    QuoteContent,
    ParagraphSixWrapper,
    ParagraphSixCircle,
    ParagraphSix,
    FinalLeftToBottomQuoteWrapper,
    FinalQuoteSVG,
    FinalQuoteContent,
    HalfWidthLeftParagraph,
    HalfWidthLeftSVGContainer,
    HalfWidthRightParagraph,
    TopLeftCircle,
    TopRightCircle,
    TopCenterCircle,
    CIRCLE_SIZE,
    MobileBreak,
    Spacer,
    TabletBreak,
} from "./shared/SectionLayout";

const ParagraphWithCircle = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
`;

const ParagraphOne = styled.div`
    // Removed this styling to center the line
`;

export default function RisksSection({ backgroundColor = "#f2f0ea" }) {
    return (
        <BackgroundContainer backgroundColor={backgroundColor}>
            <Container>
                <ContentWrapper>
                    <TopCenterCircle />
                    <ParagraphOne>
                        <HalfWidthLeftSVGContainer>
                            <SVGWrapper
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 523 290"
                                fill="none"
                                preserveAspectRatio="none"
                                height="300px"
                                tabletHeight="200px"
                                mobileHeight="100px"
                            >
                                <path
                                    d="M522.5 0V164.5C524.167 208.333 502.1 290.7 400.5 269.5C298.9 248.3 207.167 188.333 174 161L110.5 117C104.833 112.333 85.7 103.2 54.5 104C23.3 104.8 5.5 104.333 0.5 104V392.5"
                                    stroke="black"
                                    strokeWidth="1"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </SVGWrapper>
                        </HalfWidthLeftSVGContainer>

                        <ParagraphWithCircle>
                            <Circle />
                            <Paragraph>Risk is all around us.</Paragraph>
                        </ParagraphWithCircle>

                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            // 1. Widen the viewBox width from 1 to 20 (or 100)
                            // This creates a stable coordinate system
                            viewBox="0 0 20 388"
                            fill="none"
                            preserveAspectRatio="none"
                            mobileHeight="100px"
                        >
                            <path
                                // 2. Center the line in the new width (x=10)
                                // This ensures the stroke is never clipped
                                d="M0 0 L0 388"
                                stroke="black"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                        <ParagraphWithCircle>
                            <AboveTopLeftCircle />
                        </ParagraphWithCircle>
                    </ParagraphOne>

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <br />
                        <Paragraph>
                            From climate change and geopolitical instability to
                            cyber threat and the rise of artificial
                            intelligence, the 21st century has brought new
                            themes and threats that diverse stakeholders need to
                            understand and plan for.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s1/1.jpg"
                            decorative
                            desktop={{ top: "0", left: "120%" }}
                            tablet={{ top: "55%", left: "120%" }}
                            mobile={{ top: "118%", left: "35%" }}
                        />
                        <OverlayImage
                            src="/images/s1/2.jpg"
                            decorative
                            desktop={{ top: "150%", left: "20%" }}
                            tablet={{ top: "135%", left: "20%" }}
                            mobile={{ display: "none" }}
                        />
                    </HalfWidthLeftParagraph>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1038 467"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        mobileHeight="150px"
                        tabletHeight="250px"
                    >
                        <path
                            d="M457.142 0.599609H936.6C991.828 0.599609 1036.6 45.3711 1036.6 100.6V139.286C1036.6 194.514 991.828 239.286 936.6 239.286H100.6C45.3711 239.286 0.599609 284.057 0.599609 339.286V365.6C0.599609 420.828 45.3711 465.6 100.6 465.6H392.442"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </FullWidthSVGWrapper>

                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <TopLeftCircle style={{ left: "-20px" }} />
                        <Paragraph>
                            But what about the interplay between these new
                            risks: how do they relate to and influence one
                            another, and what is the appropriate response in
                            terms of mitigating today's risk landscape while
                            building long-term resilience?
                        </Paragraph>
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                            tabletHeight="120px"
                            mobileHeight="80px"
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
                        <Paragraph>
                            Ben Cattaneo, founder of The Decision-Making Studio,
                            a consultancy that helps organisations make choices
                            in an increasingly uncertain world, argues that{" "}
                            <a href="https://www.weforum.org/publications/global-risks-report-2025/in-full/global-risks-2025-a-world-of-growing-divisions-c943fe3ba0/">
                                while the number of risks and their intensity
                                have grown in recent years
                            </a>
                            , organisations are struggling with their converging
                            nature.
                            <br />
                            <br />
                            "We've entered an era of overlapping risks where
                            everything is interconnected and hard to isolate,"
                            he says.
                        </Paragraph>
                        <TopRightCircle />
                        <br />
                        <br />
                    </HalfWidthLeftParagraph>
                    <LeftToBottomQuoteWrapper
                        mobileHeight="650px"
                        tabletHeight="600px"
                    >
                        <QuoteSVG tall />
                        <QuoteContent>
                            <Quote
                                text={
                                    <>
                                        <br />
                                        <MobileBreak />
                                        <TabletBreak />
                                        "It's difficult to talk about
                                        geopolitics without also talking about
                                        AI, climate change or societal
                                        polarisation — and no organisation has a
                                        single unit that covers all of
                                        these&nbsp;together.
                                        <Spacer height="16px" />
                                        That's why the emphasis needs to move
                                        away from analysing risks in isolation,
                                        and towards examining them in an
                                        integrated way at the moments when key
                                        decisions are&nbsp;made."
                                    </>
                                }
                                attribution="Ben Cattaneo, Founder, The Decision-Making Studio"
                            />
                        </QuoteContent>
                    </LeftToBottomQuoteWrapper>

                    <ParagraphSixWrapper>
                        <ParagraphSixCircle />
                        <ParagraphSix>
                            All of that has profound implications for the role
                            of insurance in today's rapidly changing world. From
                            helping organisations to transfer risk off their
                            balance sheets to providing prevention services and
                            sharing data-driven insights into anticipating and
                            mitigating risk, insurers can move{" "}
                            <b>from payer to partner</b> as they support clients
                            along a more challenging journey.
                        </ParagraphSix>
                    </ParagraphSixWrapper>
                    <br />
                    <br />
                </ContentWrapper>
                <ContentWrapper>
                    <FinalLeftToBottomQuoteWrapper>
                        <FinalQuoteSVG mobileHeight="800px" />
                        <FinalQuoteContent>
                            <Quote
                                text={
                                    <>
                                        <MobileBreak />
                                        <MobileBreak />
                                        "Insurers and reinsurers are in some
                                        ways the voice and the guide. Their
                                        expertise, especially when it comes to
                                        very large events such as hurricanes and
                                        floods, is what industry outside
                                        insurance relies&nbsp;on"
                                    </>
                                }
                                attribution="Daniel Ralph, Professor of Operations Research, Cambridge Judge Business School, Academic Director, Cambridge Centre for Risk Studies"
                            />
                        </FinalQuoteContent>
                    </FinalLeftToBottomQuoteWrapper>
                    <BottomLeftCircle hideOnMobile />
                    <BottomCenterCircle
                        showOnlyOnMobile
                        left="calc(47.5% - 11px)"
                    />
                </ContentWrapper>
                <LottieScrolljack
                    animations="AXA_Scrolly_DP01.json"
                    trackHeight={"2000px"}
                    loop={true}
                />
            </Container>
        </BackgroundContainer>
    );
}
