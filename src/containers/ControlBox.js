import {useState} from 'react'

const ControlBox = ({BPM, changeBPM}) => {

    const handleChange = (event) => {
        changeBPM(event.target.value)
    }


    return(
        <div>
            <input type="range" id='BPM' name='BPM' min='40' max='220' onChange={handleChange} />
        </div>
    )
}

export default ControlBox

