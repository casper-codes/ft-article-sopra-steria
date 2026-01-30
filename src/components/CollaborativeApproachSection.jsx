import SectionTitleGroup from "./shared/SectionTitleGroup";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import Quote from "./shared/Quote";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    ContentWrapper,
    SVGWrapper,
    IntroLoopSVG,
    HalfWidthLeftSVGContainer,
    BottomLeftCircle,
    HalfWidthLeftParagraph,
    TopLeftCircle,
    Paragraph,
    HalfWidthRightParagraph,
    HalfWidthRightSVGContainer,
    TopRightCircle,
    FinalQuoteSVG,
    FinalQuoteContent,
    FinalLeftToBottomQuoteWrapper,
    BottomRightCircle,
    MobileBreak,
    BottomCenterCircle,
} from "./shared/SectionLayout";
import OverlayImage from "./shared/OverlayImage";

export default function CollaborativeApproachSection({
    backgroundColor = "#f0eedf",
}) {
    return (
        <BackgroundContainer
            backgroundColor={backgroundColor}
            id="collaborative-approach"
        >
            <Container>
                <ContentWrapper>
                    <SectionTitleGroup
                        chapter="Chapter five"
                        title="A collaborative approach"
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_05_HALVED"
                        enableScrollSync={true}
                    />

                    <HalfWidthLeftSVGContainer>
                        <IntroLoopSVG />
                    </HalfWidthLeftSVGContainer>

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <AboveTopLeftCircle />
                        <br />
                        <Paragraph>
                            Insurers are also partnering with <b>academia</b> in
                            their use of AI and big data to better understand
                            and respond to other risks, such as climate change
                            and the threats it brings. Ralph of the Cambridge
                            Centre for Risk Studies says that collaboration
                            between his centre and AXA XL has produced a new
                            understanding of the risks posed by wildfires, for
                            example.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s6/1.jpg"
                            decorative
                            desktop={{ top: "135%", left: "80%" }}
                            tablet={{ top: "155%", left: "80%" }}
                            mobile={{ top: "118%", left: "30%" }}
                        />
                    </HalfWidthLeftParagraph>
                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 839 499"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        tabletHeight="400px"
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
                        <TopLeftCircle left="-20px" />
                        <Paragraph>
                            “Thanks to collaborative research, we now have a
                            greater understanding of how to build buildings more
                            safely and where to locate them more safely,” he
                            says. “That learning is propagated, measured and
                            shared by the insurance industry, and it’s useful
                            because it literally reduces risk.”
                        </Paragraph>
                        <OverlayImage
                            src="/images/s6/2.png"
                            decorative
                            desktop={{ top: "155%", left: "50%" }}
                            tablet={{ top: "180%", left: "70%" }}
                            mobile={{ top: "110%", left: "90%" }}
                        />
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                            mobileHeight="150px"
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
                        <TopRightCircle right="-20px" />
                        <BottomRightCircle hideOnMobile hideOnTablet />
                        <Paragraph>
                            Sharing of data and insight through closer
                            collaboration with clients, argues AXA XL’s Gunter,
                            is helping insurers to move from payer to partner,
                            redefining traditional relationships and allowing
                            governments, organisations and companies to assess
                            this evolving nexus of risk more accurately.
                        </Paragraph>
                        <MobileBreak />
                    </HalfWidthLeftParagraph>
                    <FinalLeftToBottomQuoteWrapper>
                        <FinalQuoteSVG mobileHeight="600px" />
                        <FinalQuoteContent>
                            <Quote
                                text={
                                    <>
                                        <MobileBreak />
                                        <MobileBreak />
                                        "It's about going beyond providing a
                                        safety net and giving clients the
                                        confidence and comfort they need to be
                                        able to invest in the next phase of
                                        their business&nbsp;growth"
                                    </>
                                }
                                attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                            />
                        </FinalQuoteContent>
                    </FinalLeftToBottomQuoteWrapper>
                    <BottomLeftCircle hideOnMobile />
                    <BottomCenterCircle
                        showOnlyOnMobile
                        left="calc(47.5% - 11px)"
                    />
                </ContentWrapper>
                <br />
                <br />
            </Container>
        </BackgroundContainer>
    );
}
