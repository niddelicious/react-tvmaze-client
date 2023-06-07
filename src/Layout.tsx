import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='dark:bg-gray-500 m-0 p-0 h-screen'>
            <main className=''>
                {children}
            </main>
        </div>
    );
};

export default Layout;