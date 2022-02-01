import React from 'react';
import qrimage from '../QR/images/image-qr-code.png';
import './qr.css';
const QrBody = () => {
    return (
        <div className='main'>
            <div className='container'>
                <img src={qrimage}></img>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>       
            </div>    
        </div>
    );
}
export default QrBody;


