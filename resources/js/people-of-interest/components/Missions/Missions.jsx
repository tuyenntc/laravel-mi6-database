import { useEffect, useState } from "react";
import axios from "axios";
import { MissionEditForm } from "./MissionEditForm";

export const Missions = () => {

    const [missions, setMissions] = useState([])
    const [missionId, setMissionId] = useState(null)

    const loadMissions = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/missions')
            setMissions(response.data)
        } catch (err) {
            console.log(err)            
        }
        // Request with fetch:
        // const response = await fetch('/api/missions')
        // const data = await response.json()
        // setMissions(data)
    }

    useEffect(() => {
        loadMissions()
    }, [])

    return <>
        <h1>Missions database</h1>
       { 
            missionId ? 
                <MissionEditForm missionId={missionId} setMissionId={setMissionId}/>
            :
            missions.map((mission, key) => {
                return (
                    <p key={key}>
                        Name: {mission.name} <br/>
                        Year: {mission.year}<br/>
                        Outcome: {mission.outcome === null ? 'Unknown' : (mission.outcome == 1 ? 'Successful' : 'Failed')}<br/>
                        <button onClick={() => {setMissionId(mission.id)}}>Edit</button>
                    </p>
                )
            })}
    </>
}