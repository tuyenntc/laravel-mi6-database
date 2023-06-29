import { useEffect, useState } from "react";
import axios from "axios";

export const MissionEditForm = ({setMissionId, missionId}) => {

    const [mission, setMission] = useState(null);
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(null);

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

    const loadPeople = async () => {
        try {
            const response = await axios.get('/api/people')
            setPeople(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadMission()
        loadPeople()
    }, [])

    const submitMissionEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/missions/store', mission);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleInputChange = (event) => {
        setMission(previous_values => {
            return ({...previous_values, 
                [event.target.name]: event.target.value
            });
        });
    }

    const handleAssignmentOfPeople = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/missions/assign-person', {
                'personId': personId,
                'missionId': mission.id
            });
            console.log(response.data)

            loadMission()
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnassignmentOfPerson = async (event) => {
        event.preventDefault();
      
        try {
            const response = await axios.post('/api/missions/unassign-person', {
                'personId': event.target.dataset.personId,
                'missionId': mission.id
            });
            console.log(response.data)

            loadMission()
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div>
            <h2>Edit mission #{missionId}</h2>
                {
                    mission ?
                        <form onSubmit={(e)=> {submitMissionEdit(e)}}>
                            <label>
                                Name:
                                <input type="text" name="name" value={mission.name} onChange={handleInputChange}/><br/>
                            </label>

                            <label>
                                Year: 
                                <input type="number" name="year" value={mission.year} onChange={handleInputChange}/><br/>
                            </label>

                            <button type="submit">Save</button>
                        </form>
                    : 'loading'
                }

            <button onClick={() => {setMissionId(null)}}>Go back</button>
        </div>

        <div>
            <h2>Manage people:</h2>

            <div>
                <h3>People assigned:</h3>
                <ul>
                    {
                        mission && mission.people.length > 0 ? 
                            mission.people.map(person => {
                                return <li key={person.id}>
                                        {person.name}
                                        <button onClick={handleUnassignmentOfPerson} data-person-id={person.id}>&times;</button>
                                    </li>
                            })
                        : '----'
                    }
                </ul>
            </div>

            <div>
                <h3>Assign new:</h3>
                {
                    people ?
                    <form onSubmit={handleAssignmentOfPeople}>
                        <select name="people" id="people" onChange={(e) => {setPersonId(e.target.value)}}>
                            <option value={null}>Select a person</option>
                            {
                                people.map(person => {
                                    return <option key={person.id} value={person.id}>{person.name}</option>
                                })
                            }
                        </select>

                        <button type="submit">Assign</button>
                    </form> : 'loading'
                }
            </div>
        </div>
    </>
}