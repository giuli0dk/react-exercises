import { useState } from 'react';
import './Container.css';

const Container = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="container">
            <h2 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
                {title}
            </h2>
            {!isCollapsed && <div className="content">{children}</div>}
        </div>
    );
};

export default Container;