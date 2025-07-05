import React from 'react';

const MovieDetails: React.FC<{
    selectedId: string;
    onClose: () => void;
}> = ({selectedId, onClose}) => {
    return (
        <div className="details">
            <button className="btn-back" onClick={onClose}>&larr;</button>
            {selectedId}
        </div>
    );
};

export default MovieDetails;