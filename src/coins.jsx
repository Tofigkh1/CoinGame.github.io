import React, { useState } from "react";
import styless from './coin.module.css';
import coinSound from './assets/coin-dropping-long.mp3';

const img1 = "https://en.numista.com/catalogue/photos/turquie/1687-original.jpg";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJob5Y9aHqlqojE4YwtvNTtg0vR8y5Zy0QLf1-y5GQiG9_zI2hh0cLlh5Ysqcpe9OestY&usqp=CAU";

function Coins() {
    const [coin, setCoin] = useState(img1);
    const [isRunning, setIsRunning] = useState(false);
    const [point1, setPoint1] = useState(0);
    const [point2, setPoint2] = useState(0);

    const images = [img1, img2];
    let intervalID;

    const handleRandomImage = () => {
        setIsRunning(true);
        let currentIndex = 0;
        intervalID = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCoin(images[currentIndex]);
        }, 100);

        setTimeout(() => {
            clearInterval(intervalID);
            const randomIndex = Math.floor(Math.random() * images.length);
            setCoin(images[randomIndex]);
            setIsRunning(false);
            updatePoints(images[randomIndex]);
        }, 4000);

        const audio = new Audio(coinSound);
        audio.play();
    };

    const updatePoints = (lastImage) => {
        if (lastImage === img1) {
            setPoint1(prev => prev + 1);
        } else {
            setPoint2(prev => prev + 1);
        }
    };

    return (
        <>

        <div className={styless.homediv}>
        <h4 className={styless.h1tag}>COIN GAME</h4>
        <img style={{ width: "70px", height:"75px"}} src="https://cdn-icons-png.flaticon.com/512/8002/8002111.png" alt="" />
        </div>
            <ul className={styless.ulcontainer}>
                
                <img style={{ width: "70px", height:"75px"}} src="https://cdn-icons-png.flaticon.com/512/668/668090.png" alt=""/>{point1}
                <img style={{ width: "60px", height:"70px"}} src="https://i.pinimg.com/236x/0f/07/72/0f0772fa5f1bae2845b6bcd2370f560a.jpg" alt=""/>{point2}
            </ul>

            <img style={{ width: "250px" }} src={coin} alt="" />
            <button style={{ width: "100px", height: "55px" }} className={styless.button} disabled={isRunning} onClick={handleRandomImage}>Çevir</button>
        </>
    );
}

export default Coins;
