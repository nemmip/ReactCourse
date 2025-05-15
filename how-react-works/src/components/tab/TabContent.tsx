import React, {useState} from 'react';
import type {Content} from "../../App.tsx";

const TabContent:React.FC<{
    item: Content
}> = ({item}) => {
    const [showDetails, setShowDetails] = useState<boolean>(true);
    const [likes, setLikes] = useState<number>(0);

    function handleInc() {
        setLikes(likes + 1);
    }

    return (
        <div className="tab-content">
            <h4>{item.summary}</h4>
            {showDetails && <p>{item.details}</p>}

            <div className="tab-actions">
                <button onClick={() => setShowDetails((h) => !h)}>
                    {showDetails ? "Hide" : "Show"} details
                </button>

                <div className="hearts-counter">
                    <span>{likes} ❤️</span>
                    <button onClick={handleInc}>+</button>
                    <button>+++</button>
                </div>
            </div>

            <div className="tab-undo">
                <button>Undo</button>
                <button>Undo in 2s</button>
            </div>
        </div>
    );
};

export default TabContent;