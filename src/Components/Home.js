import React, { useState, useEffect } from 'react';
import './home.css';
import Change1 from '../assets/icons1.svg';
import Change2 from '../assets/icon2.svg';
import Change3 from '../assets/icon3.svg';
import IMG1 from '../assets/icon5.webp';
import IMG2 from '../assets/image1.webp';


import { GiArrowCursor } from "react-icons/gi";

const Home = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [Change2, Change3, Change1];

    const [lineColors, setLineColors] = useState(['yellow', 'pink', 'white']);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const [currentTime, setCurrentTime] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function calculateRemainingTime() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Setting day to 0 gets the last day of the current month

        const timeDifference = endOfMonth - now;

        // Calculate remaining days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }


    useEffect(() => {

        const changeImageAfterDelay = () => {

            const nextIndex = (imageIndex + 1) % images.length;
            setImageIndex(nextIndex);
        };

        const imageChangeTimeout = setTimeout(changeImageAfterDelay, 1000);


        return () => clearTimeout(imageChangeTimeout);
    }, [imageIndex, images]);


    useEffect(() => {

        const changeColorAfterDelay = () => {

            const nextColorIndex = (currentColorIndex + 1) % lineColors.length;


            setCurrentColorIndex(nextColorIndex);
        };


        const colorChangeTimeout = setTimeout(changeColorAfterDelay, 1000);


        return () => clearTimeout(colorChangeTimeout);
    }, [currentColorIndex, lineColors]);
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setIsMoved(true);
        }, 2000);


        return () => clearTimeout(timeoutId);
    }, []);

    const [isArrowAnimated, setIsArrowAnimated] = useState(false);
    const [isArrowY, setIsArrowY] = useState(false);


    useEffect(() => {
        // Trigger the arrow animation after a delay
        const animationTimeout = setTimeout(() => {
            setIsArrowAnimated(true);
        }, 1000);
        setTimeout(() => {
            setIsArrowY(true);
        }, 4000);
        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(animationTimeout);
    }, []);
    useEffect(() => {
        // Trigger the arrow animation after a delay

        const animationTimeout = setTimeout(() => {
            setIsArrowY(true);
        }, 4000);
        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(animationTimeout);
    }, []);
    return (
        <>
            <div className={`arrow-container ${isArrowAnimated ? 'animated ' : ''}`}>
                <div className={`arrow ${isArrowY ? 'animatedY' : ''}`}><GiArrowCursor /></div>

            </div>
            <div className="header">
                <div className="inner_header">
                    <div className="content">
                        <div className="main_img">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className='heading'>
                            <div>
                                <p style={{ fontSize: "5rem", fontWeight: "bold" }}>for</p>
                            </div>

                            <div className='movingIMG'>
                                <img src={images[imageIndex]} alt="" />
                            </div>

                            <div>

                                <p style={{ color: lineColors[currentColorIndex], fontSize: "5rem", fontWeight: "bold" }}>& Cloud</p>
                                <p style={{ color: lineColors[currentColorIndex], fontSize: "5rem", fontWeight: "bold", marginLeft: "-400px" }}> gaming </p>
                            </div>
                        </div>
                    </div>
                    <div className='middle_content'>
                        <span>Join us on the launch of gartcod by</span>
                        <img src={IMG2} alt="" />
                    </div>

                    <div className={`button-container ${isMoved ? 'moved' : ''} heading`} >
                        <button className='btn' style={{ backgroundColor: lineColors[currentColorIndex] }}>Claim Ticket</button>

                    </div>
                    <div className='time_zone'>
                        <div className='sub_time'>
                            <span>
                                {currentTime.days}
                            </span>
                            <strong style={{ color: lineColors[currentColorIndex] }} >Days</strong>
                        </div>
                        <div className='sub_time'>
                            <span>
                                {currentTime.hours}
                            </span>
                            <strong style={{ color: lineColors[currentColorIndex] }}>Hours</strong>
                        </div>
                        <div className='sub_time'>
                            <span>
                                {currentTime.minutes}
                            </span>
                            <strong style={{ color: lineColors[currentColorIndex] }}>Minutes</strong>
                        </div>
                        <div className='sub_time'>
                            <span>
                                {currentTime.seconds}
                            </span>
                            <strong style={{ color: lineColors[currentColorIndex] }}>Seconds</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;