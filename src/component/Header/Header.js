import React from 'react';
import "./Header.css"

// this is header section 
const Header = () => {
    return (
        <div className="header">
            <h1>Selection for best employee award 2021 of ABC Company</h1>
            <h3><q><i>To win in the marketplace you must first win in the workplace.</i></q></h3>
            <h1 className="budget">Total Budget for award : 1 Million</h1>
        </div>
    );
};

export default Header;