import styled from "styled-components";
import { media } from "../utils/breakpoints";

const TAB_COLORS = {
    energy: "#E8D44D",
    finance: "#4A9FD4",
    transport: "#4CAF50",
};

const NavContainer = styled.nav`
    position: sticky;
    top: 40px;
    z-index: 100;
    background: rgba(13, 17, 23, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: 767px) {
        top: 65px;
    }
`;

const TabList = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
`;

const TabButton = styled.button`
    flex: 1;
    max-width: 400px;
    padding: 16px 24px;
    background: transparent;
    color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
    border: none;
    cursor: pointer;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        color: #fff;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${props => props.$active ? '100%' : '0'};
        height: 3px;
        background: ${props => props.$activeColor || '#E8D44D'};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    ${media.mobile(`
        padding: 12px 8px;
        font-size: 11px;
        letter-spacing: 1px;
    `)}
`;

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
    return (
        <NavContainer>
            <TabList>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={tab.id}
                        $active={activeTab === index}
                        $activeColor={TAB_COLORS[tab.id]}
                        onClick={() => onTabChange(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </TabList>
        </NavContainer>
    );
}
