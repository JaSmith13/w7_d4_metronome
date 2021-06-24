import {useState, useEffect} from 'react'
import ControlBox from './ControlBox'
import DogImage from '../components/DogImage'

const MetronomeBox = () => {

    useEffect(() => {
        fetchDog()
    }, [])

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
        
        <section id='app-wrapper'>
            <h1>Metrobone</h1>
            <div id='controls'>
                <h2>{BPM} BPM</h2>
                <ControlBox BPM={BPM} changeBPM={changeBPM} fetchDog={fetchDog}/>
            </div>
            <DogImage dogUrl={dogUrl}/>
        </section>
    )
}

export default MetronomeBox