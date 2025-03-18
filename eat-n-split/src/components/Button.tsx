import React, {ReactNode} from 'react';

const Button: React.FC<{
    children: ReactNode;
    onClick?: () => void;
}> = ({children, onClick}) => {
    return <button
        className="button"
        onClick={onClick}
    >{children}</button>;
};

export default Button;