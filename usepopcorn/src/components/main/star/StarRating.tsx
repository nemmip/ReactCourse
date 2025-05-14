import React, {useState} from 'react';
import Star from "./Star.tsx";

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
}

const starContainerStyle = {
    display: 'flex'
}


const StarRating: React.FC<{
    maxRating?: number,
    color?: string,
    size?: number,
    className?: string,
    messages?: string[],
    defaultRating?: number,
    onSetRating?: React.Dispatch<React.SetStateAction<number>>
}> = ({onSetRating, maxRating = 5, color = '#fcc419', size = 48, className="", messages = [], defaultRating = 0}) => {
    const [rating, setRating] = useState<number>(defaultRating);
    const [tempRating, setTempRating] = useState<number>(0)
    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color,
        fontSize: `${size/1.5}px`,
    }

    const handleRating = (rating:number) => {
        setRating(rating)
        if (onSetRating)
            onSetRating(rating)
    }
    const handleTempRating = (rating:number) => {
        setTempRating(rating)
    }

    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({length: maxRating}, (_, i) =>
                    <Star
                        key={i}
                        isFull={tempRating ? tempRating >= i+1 : rating >= i +1}
                        onRate={() => handleRating(i+1)}
                        onHoverIn={() => handleTempRating(i+1)}
                        onHoverOut={() => handleTempRating(0)}
                        color={color}
                        size={size}
                    />)}
            </div>
            <p style={textStyle}>{messages.length === maxRating ? messages[
                tempRating ? tempRating - 1 : rating-1]
                : tempRating || rating || ""}</p>
        </div>
    );
};

export default StarRating;