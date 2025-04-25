import React, {ReactNode} from 'react';

const Main: React.FC<{
    children: ReactNode;
}> = ({children}) => {


    return (
        <main className="main">
            {children}
        </main>

    );
};

export default Main;