import styled from "styled-components";
import { media } from "../utils/breakpoints";

const NavContainer = styled.nav`
    position: sticky;
    top: 40px;
    z-index: 100;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    
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
    background: ${props => props.$active ? props.$activeColor : 'transparent'};
    color: ${props => props.$active ? '#fff' : '#333'};
    border: none;
    cursor: pointer;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        background: ${props => props.$active ? props.$activeColor : 'rgba(0,0,0,0.05)'};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${props => props.$active ? props.$activeColor : 'transparent'};
        transition: background 0.3s ease;
    }

    ${media.mobile(`
        padding: 12px 16px;
        font-size: 12px;
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
                        $activeColor={tab.backgroundColor}
                        onClick={() => onTabChange(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </TabList>
        </NavContainer>
    );
}
