import React from 'react';

const ErrorMessage: React.FC<{
    message: string;
}> = ({message}) => {
    return (
       <p className='error'>
           <span>⛔</span> {message}
       </p>
    );
};

export default ErrorMessage;