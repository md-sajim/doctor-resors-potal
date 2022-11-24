import React from 'react';

const BasicButton = ({children}) => {
    return (
        <button className="btn  mt-8 btn-primary bg-gradient-to-r from-secondary to-primary text-white">{children}</button>
    );
};

export default BasicButton;