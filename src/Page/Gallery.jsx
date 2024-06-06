import React from 'react';
import './Gallery.css'; 
import hyna from '../pic/hyna.jpeg';
import isha from "../pic/isha.jpeg";
import sea from "../pic/sea.jpeg";
import chempanze from "../pic/chempanze.jpeg";
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="background">
            <div className="image-container">
                <div className='main-box'>
                    <div className="image-box" style={{ backgroundImage: `url(${hyna})` }}>
                        <div className="overlay">
                            <h1>FENNEC<br />FOX</h1>
                            <p>India</p>
                            <Link to="#" className="know-more">Know more ➜</Link>
                        </div>
                    </div>
                </div>

                <div className='main-box'>
                    <div className="image-box" style={{ backgroundImage: `url(${sea})` }}>
                        <div className="overlay">
                            <h1>HUMPBACK<br />WHALE</h1>
                            <p>South Africa</p>
                            <Link to="#" className="know-more">Know more ➜</Link>
                        </div>
                    </div>
                </div>

                <div className='main-box'>
                    <div className="image-box" style={{ backgroundImage: `url(${chempanze})` }}>
                        <div className="overlay">
                            <h1>COMMON BROWN <br />BABOON</h1>
                            <p>South Africa</p>
                            <Link to="#" className="know-more">Know more ➜</Link>
                        </div>
                    </div>
                </div>
                
                <div className='main-box'>
                    <div className="image-box" style={{ backgroundImage: `url(${isha})` }}>
                        <div className="overlay">
                            <h1>SPOTTED<br />DEER</h1>
                            <p>Amazon</p>
                            <Link to="#" className="know-more">Know more ➜</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
