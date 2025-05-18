import React, {useState} from 'react';
import type {Content} from "../../App.tsx";
import Tab from "./Tab.tsx";
import TabContent from "./TabContent.tsx";
import DifferentContent from "../DifferentContent.tsx";

const Tabbed: React.FC<{
    content: Content[]
}> = ({content}) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div>
            <div className="tabs">
                <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
            </div>

            {activeTab <= 2 ? (
                <TabContent item={content.at(activeTab)!} key = {content.at(activeTab)!.summary} />
            ) : (
                <DifferentContent />
            )}
        </div>
    )
};

export default Tabbed;