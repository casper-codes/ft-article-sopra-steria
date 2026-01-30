import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import LottieScrolljack from "./LottieScrolljack";
import OverlayImage from "./shared/OverlayImage";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    HalfWidthLeftSVGContainer,
    SVGWrapper,
    IntroLoopSVG,
    Paragraph,
    HalfWidthLeftParagraph,
    FullWidthSVGWrapper,
    BottomLeftCircle,
    ContentWrapper,
    LeftToBottomQuoteWrapper,
    QuoteSVG,
    QuoteContent,
    BottomCenterCircle,
    HalfWidthRightSVGContainer,
    HalfWidthRightParagraph,
    TopRightCircle,
    TopLeftCircle,
    TabletBreak,
    DesktopBreak,
} from "./shared/SectionLayout";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function NexusInActionSection({ backgroundColor = "#fde432" }) {
    return (
        <BackgroundContainer
            backgroundColor={backgroundColor}
            id="nexus-in-action"
        >
            <Container>
                <ContentWrapper>
                    <SectionTitleGroup
                        chapter="Chapter two"
                        title={"The nexus in action —\nhow risks collide"}
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_02_HALVED"
                        enableScrollSync={true}
                    />

                    <HalfWidthLeftSVGContainer>
                        <IntroLoopSVG />
                    </HalfWidthLeftSVGContainer>
                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph>
                            <AboveTopLeftCircle />
                            The interconnectedness of risk is on full display
                            when it comes to climate change, and its effects on
                            other aspects of social, political and economic
                            life.
                            <br />
                            <br />
                            For example, climate change is leading people to
                            question whether authorities can provide adequate
                            answers: according to this year’s AXA Future Risks
                            Report, only 12 per cent of experts who chose
                            climate change among their top risks believe that
                            authorities are well prepared to handle it, down two
                            percentage points from last year. That is the lowest
                            figure since the question first appeared in the
                            annual survey.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s3/1.jpg"
                            decorative
                            desktop={{ top: "60%", left: "120%" }}
                            tablet={{ top: "80%", left: "120%" }}
                            mobile={{ display: "none" }}
                        />
                        <OverlayImage
                            src="/images/s3/2.jpg"
                            decorative
                            desktop={{ top: "150%", left: "20%" }}
                            tablet={{ top: "145%", left: "20%" }}
                            mobile={{ top: "114%", left: "30%" }}
                        />
                    </HalfWidthLeftParagraph>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 846 360"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        tabletHeight="300px"
                        mobileHeight="140px"
                    >
                        <path
                            d="M355.538 0.5H745.5C800.728 0.5 845.5 45.2715 845.5 100.5V171.011C845.5 226.24 800.728 271.011 745.5 271.011H0.5V359.5"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </FullWidthSVGWrapper>
                    <BottomLeftCircle />
                </ContentWrapper>
                <LottieScrolljack
                    animations="AXA_Scrolly_DP03.json"
                    backgroundColor={backgroundColor}
                    loop={false}
                    initialFrame={0.2}
                    initialFrameMobile={0.1}
                />
                <ContentWrapper>
                    <LeftToBottomQuoteWrapper
                        height="500px"
                        tabletHeight="400px"
                        mobileHeight="350px"
                    >
                        <QuoteSVG />
                        <QuoteContent>
                            <Quote
                                text={
                                    <>
                                        <TabletBreak />
                                        <DesktopBreak />
                                        "It's striking how this
                                        interconnectedness amplifies the impact
                                        of each crisis, making the overall risk
                                        environment much more unpredictable
                                        and&nbsp;intense"
                                    </>
                                }
                                attribution="Libby Benet, Global Chief Underwriting Officer, AXA XL"
                                variants={itemVariants}
                            />
                        </QuoteContent>
                        <BottomCenterCircle left="calc(50% - 10px)" />
                    </LeftToBottomQuoteWrapper>
                    <br />
                    <br />

                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <Paragraph variants={itemVariants}>
                            "The report suggests that we're not just dealing
                            with isolated issues any more. Instead, we're facing
                            a web of crises that feed into each other, which
                            complicates how we manage and respond to risks,"
                            says Benet.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s3/3.jpg"
                            decorative
                            desktop={{ top: "165%", left: "50%" }}
                            tablet={{ top: "155%", left: "70%" }}
                            mobile={{ top: "115%", left: "90%" }}
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
                        <Paragraph variants={itemVariants}>
                            Ben Cattaneo of The Decision-Making Studio points
                            out that an additional complexity of today's risk
                            environment is its increasing asymmetry.
                            <br />
                            <br />
                            "It means little things can have a big impact, and
                            that might be cyber-related or a localised incident
                            that affects a global supply chain," he says. "But
                            it means that you no longer just throw money at
                            something to solve it."
                        </Paragraph>
                        <TopRightCircle />
                    </HalfWidthLeftParagraph>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1038 467"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        tabletHeight="300px"
                        mobileHeight="150px"
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
                    </HalfWidthRightParagraph>
                </ContentWrapper>
                <LottieScrolljack
                    animations="AXA_Scrolly_DP04.json"
                    trackHeight="3500px"
                    backgroundColor={backgroundColor}
                    loop={true}
                />
            </Container>
        </BackgroundContainer>
    );
}
