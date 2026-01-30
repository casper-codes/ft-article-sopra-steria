import "./App.css";
import styled from "styled-components";
import TabNavigation from "./components/TabNavigation";
import TabSection from "./components/TabSection";
import IntroSection from "./components/IntroSection";
import { useState } from "react";

const AppContainer = styled.div``;

// Tab content configuration
const tabs = [
    {
        id: "tab1",
        label: "Tab One",
        backgroundColor: "#2B5F9E", // Placeholder blue
        slides: [
            { title: "Slide 1.1", content: "Content for slide 1.1" },
            { title: "Slide 1.2", content: "Content for slide 1.2" },
            { title: "Slide 1.3", content: "Content for slide 1.3" },
        ],
    },
    {
        id: "tab2",
        label: "Tab Two",
        backgroundColor: "#8B4789", // Placeholder purple
        slides: [
            { title: "Slide 2.1", content: "Content for slide 2.1" },
            { title: "Slide 2.2", content: "Content for slide 2.2" },
            { title: "Slide 2.3", content: "Content for slide 2.3" },
        ],
    },
    {
        id: "tab3",
        label: "Tab Three",
        backgroundColor: "#2E8B57", // Placeholder green
        slides: [
            { title: "Slide 3.1", content: "Content for slide 3.1" },
            { title: "Slide 3.2", content: "Content for slide 3.2" },
            { title: "Slide 3.3", content: "Content for slide 3.3" },
        ],
    },
];

function App() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <AppContainer>
            <IntroSection />
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <TabSection
                tab={tabs[activeTab]}
                key={tabs[activeTab].id}
            />
        </AppContainer>
    );
}

export default App;
