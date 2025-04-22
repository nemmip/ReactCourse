import React, {ReactNode} from 'react';
import WatchedBox from "./watched-movies-list/WatchedBox.tsx";

const Main: React.FC<{
    children: ReactNode;
}> = ({children}) => {


    return (
        <main className="main">
            {children}
            <WatchedBox/>
        </main>

    );
};

export default Main;