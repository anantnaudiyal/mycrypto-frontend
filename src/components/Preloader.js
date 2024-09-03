import React, { useEffect } from 'react';
import "./preloader.css";
import { preLoaderAnim } from '../animations/anim';

const Preloader = () => {

    useEffect(() =>{
        preLoaderAnim();
    },[]);
  return (
    <div className='preloader'>
        <div className='subloader'> 
            <div className='main'>MY-CRYPTO</div>
            <div className='texts-container'>
                <span>BUY,</span>
                <span>SELL,</span>
                <span>INVEST</span>
            </div>
        </div> 
       
    </div>
  )
}

export default Preloader
