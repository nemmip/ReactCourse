import React, {ReactNode} from 'react';

const Button: React.FC<{children: ReactNode}> = ({children}) => {
    return <button className="button">{children}</button>;
};

export default Button;