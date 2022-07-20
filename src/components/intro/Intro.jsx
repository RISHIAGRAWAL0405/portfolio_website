import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef()

    useEffect(() => {
        console.log(textRef)
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer.', 'Content Creator.', 'Designer.']
        });
    }, []);
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="img/namaste1.png" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There,I'am</h2>
                    <h1>Rishi Agrawal</h1>
                    <h3>I am a web <span ref={textRef}></span></h3>
                </div>
                <a href='portfolio'>
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
