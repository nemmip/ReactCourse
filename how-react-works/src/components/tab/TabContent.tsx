import React, {useState} from 'react';
import type {Content} from "../../App.tsx";

const TabContent:React.FC<{
    item: Content
}> = ({item}) => {
    const [showDetails, setShowDetails] = useState<boolean>(true);
    const [likes, setLikes] = useState<number>(0);

    function handleInc(increment:number = 1) {
        setLikes(likes => likes + increment);
    }

    function handleUndo() {
        setShowDetails(true);
        setLikes(0);
    }

    function handleUndoLater(){
        setTimeout(handleUndo, 2000);
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
                    <button onClick={()=>handleInc()}>+</button>
                    <button onClick={()=> handleInc(3)}>+++</button>
                </div>
            </div>

            <div className="tab-undo">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleUndoLater}>Undo in 2s</button>
            </div>
        </div>
    );
};

export default TabContent;