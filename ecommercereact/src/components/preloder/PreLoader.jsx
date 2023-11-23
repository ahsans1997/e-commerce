import React from 'react';

const PreLoader = () => {
    return (
        <div className="alert alert-info" style={{ height: "100vh", position: "absolute", width: "100%", zIndex: "9999" }}>
            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>Loading...</h2>
        </div>
    );
};

export default PreLoader;