import React, { useState } from 'react';
import './magicMenu.css';

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActiveLink = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="navigation">
                <ul>
                    <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleActiveLink(0)}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleActiveLink(1)}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleActiveLink(2)}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleActiveLink(3)}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="camera-outline"></ion-icon>
                            </span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleActiveLink(4)}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
