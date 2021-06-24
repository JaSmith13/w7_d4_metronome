import {useState} from 'react'

const ControlBox = ({BPM, changeBPM}) => {
    
    const [start, setStart] = useState(false)

    const handleChange = (event) => {
        changeBPM(event.target.value)
    }

    const handleClick = () => {
        setStart(!start) 
    }

    return(
        <div>
            <input type="range" id='BPM' name='BPM' min='40' max='220' onChange={handleChange} />
            <button onClick={handleClick} >Play</button>
        </div>
    )
}

export default ControlBox

