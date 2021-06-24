import {useState} from 'react'
import ControlBox from './ControlBox'


const MetronomeBox = () => {

    const [BPM, setBPM] = useState(120)

    const changeBPM = (newBPM) => {
        setBPM(newBPM)
    }

    return(
        
        <section>
            <h1>Metronome</h1>
            <h2>{BPM}</h2>
            <ControlBox BPM={BPM} changeBPM={changeBPM}/>
        </section>
    )
}

export default MetronomeBox