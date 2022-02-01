import React from 'react';
import './nft.css';
import nftimage from '../NFT/images/image-equilibrium.jpg';
import eth from '../NFT/images/icon-ethereum.svg';
import clock from '../NFT/images/icon-clock.svg';
import avatar from '../NFT/images/image-avatar.png';

export default function Nftcard() {
  return <div className='main2'>
      <div className='container2'>

        <img src={nftimage}></img>
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <ul>
            <li className='eth'><img src={eth}></img>0.041 ETH</li>
            <li><p><img src={clock}></img>3 days left</p></li>
        </ul>
        <div className='avatColumn'>
            <img className='avat' src={avatar}></img>
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
        
      </div>
      </div>;
}
