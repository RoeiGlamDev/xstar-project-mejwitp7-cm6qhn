import React from 'react';

const ThreeTypes: React.FC = () => {
    return (
        <div className="three-types-container" style={{ backgroundColor: '#fff', color: '#ff7f50' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Our Luxurious Collections</h2>
            <div className="types-grid" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div className="type-item" style={{ flex: '1', margin: '10px', textAlign: 'center' }}>
                    <div className="type-image" style={{ width: '100%', height: '200px', background: 'url(/path/to/image1.jpg) no-repeat center/cover', borderRadius: '15px' }} />
                    <h3>Makeup</h3>
                </div>
                <div className="type-item" style={{ flex: '1', margin: '10px', textAlign: 'center' }}>
                    <div className="type-image" style={{ width: '100%', height: '200px', background: 'url(/path/to/image2.jpg) no-repeat center/cover', borderRadius: '15px' }} />
                    <h3>Skincare</h3>
                </div>
                <div className="type-item" style={{ flex: '1', margin: '10px', textAlign: 'center' }}>
                    <div className="type-image" style={{ width: '100%', height: '200px', background: 'url(/path/to/image3.jpg) no-repeat center/cover', borderRadius: '15px' }} />
                    <h3>Fragrances</h3>
                </div>
            </div>
        </div>
    );
};

export default ThreeTypes;