import React from 'react';

const Tab:React.FC<{
    num: number;
    activeTab: number;
    onClick:  React.Dispatch<React.SetStateAction<number>>
}> = ({num, activeTab, onClick}) => {
    return (
        <button
            className={activeTab === num ? "tab active" : "tab"}
            onClick={() => onClick(num)}
        >
            Tab {num + 1}
        </button>
    );
};

export default Tab;