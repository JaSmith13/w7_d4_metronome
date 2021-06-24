import {useState, useEffect} from 'react'
import tick from '../audio/tick'
import bark from '../audio/bark'

const ControlBox = ({BPM, changeBPM, fetchDog}) => {
    
    const [start, setStart] = useState(false)
    const [tickID, setTickID] = useState(null)
    const [audio, setAudio] = useState(new Audio(tick))

    const handleChange = (event) => {
        changeBPM(event.target.value)
    }

    const handleClick = () => {
        setStart(!start)     
    }

    useEffect(() => start ? startTick(): stopTick(), [start])

    const tickSound = () => { 
        audio.pause()
        audio.currentTime = 0;
        audio.play()
    }
    
    const startTick = () => {
        const interval = setInterval(() => {tickSound(); fetchDog()},(60000/BPM))
        setTickID(interval)
    }

    const stopTick = () => {
        clearInterval(tickID)
    }

    return(
        <div>
            <div id='buttons'>
                <input type="range" id='BPM' name='BPM' min='40' max='220' value={BPM}onChange={handleChange} />
                <button onClick={handleClick} >Start/Stop</button>
            </div>
        </div>
    )
}

export default ControlBox

