import React from 'react';

const NumResults: React.FC<{
    moviesLength: number
}> = ({moviesLength}) => {
    return (
        <p className="num-results">
            Found <strong>{moviesLength}</strong> results
        </p>
    );
};

export default NumResults;