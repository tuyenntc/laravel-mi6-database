import { useEffect, useState } from "react";
import axios from "axios";

export const MissionEditForm = ({setMissionId, missionId}) => {

    const [mission, setMission] = useState(null);

    const loadMission = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/missions/' + missionId)
            console.log(response.data)
            setMission(response.data)
        } catch (err) {
            console.log(err)            
        }
        // Request with fetch:
        // const response = await fetch('/api/missions/' + missionId)
        // const data = await response.json()
        // setMission(data)
    }

    useEffect(() => {
        loadMission()
    }, [])

    const submitMissionEdit = async (e) => {
        e.preventDefault();

        console.log('submit clicked')
    }

    return <>
        <h2>Edit mission #{missionId}</h2>

        {
            mission ?
                <form onSubmit={(e)=> {submitMissionEdit(e)}}>
                    <label>
                        Name:
                        <input type="text" name="name" value={mission.name}/><br/>
                    </label>

                    <label>
                        Year: 
                        <input type="number" name="year" value={mission.year}/><br/>
                    </label>

                    <button type="submit">Save</button>
                </form>
            : 'loading'
        }

        <button onClick={() => {setMissionId(null)}}>Go back</button>
    </>
}