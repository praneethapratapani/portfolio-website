import React, { useEffect , useRef} from 'react';
import {init} from 'ityped';
import "./home.scss";

const Home = () => {   
    const textRef=useRef(null);
    
    useEffect(()=>
    {
        if (textRef.current) {
        init(textRef.current, { 
            showCursor: true, 
            backSpeed: 60,
            backDelay: 1500, 
            strings: [" Student",' Full Stack Developer ', 'Web Developer '," Coding ", " Motivated "," Quick Learner "] })
    }},[]);
    return (
        <div className='pageClass page1'>
            <div id="home" className='about'>
                <div className='container'>
                <div className='heading'>Hi there! 
                <div>
                    I'm Praneetha Pratapani
                </div>
                </div>
                <div className="right">
                    <div className="top">
                        <img src="assets/lp.png" alt=""  className="img-fluid animated" />
                        <div className='heading2'><span ref={textRef}></span></div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
  );
};

export default Home;
