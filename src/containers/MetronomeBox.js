import {useState} from 'react'
import ControlBox from './ControlBox'
import DogImage from '../components/DogImage'

const MetronomeBox = () => {

    const [BPM, setBPM] = useState(120)
    const [dogUrl, setDogUrl] = useState('')

    const fetchDog = function () {
        const request = fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogUrl(data.message))
    }

    const changeBPM = (newBPM) => {
        setBPM(newBPM)
    }

    return(
        
        <section>
            <h1>Metrobone</h1>
            <h2>{BPM}</h2>
            <ControlBox BPM={BPM} changeBPM={changeBPM} fetchDog={fetchDog}/>
            <DogImage dogUrl={dogUrl}/>
        </section>
    )
}

export default MetronomeBox