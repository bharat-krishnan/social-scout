import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

const Title = () => {
    const [stop, setStop] = useState(false)

    const display = () =>{
        if(stop){
            return <h1 className="blue-text">Social Scout</h1>
        }
        else{
            return (
        < div >
        <h1 className="blue-text">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.changeDelay(80).changeDeleteSpeed(40)
                        .typeString('Social Media')
                        .pauseFor(1000)
                        .deleteChars(5)
                        .pauseFor(1000)
                        .typeString("Awareness")
                        .pauseFor(1000)
                        .deleteChars(9)
                        .pauseFor(1000)
                        .typeString("Scout")
                        .pauseFor(2530)
                        .callFunction(() => {
                            setStop(true)
                        })
                        .start()
                    // .stop();
                }}
            />


        </h1>
    </div >
            )
        }
    }
    return (
        <div>
            {display()}
        </div>
        
    )
}

export default Title