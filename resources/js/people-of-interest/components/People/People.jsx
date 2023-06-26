import { useEffect, useState } from 'react'
import { PersonDetail } from '../PersonDetail/PersonDetail'

export const People = () => {
    const [people, setPeople] = useState(null)
    const [personId, setPersonId] = useState(null)

    const getData = async () => {
        const response = await fetch('/api/people')
        const data = await response.json()
        setPeople(data)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div>
            {personId
            ?
            <PersonDetail personId={personId} setPersonId={setPersonId} />
            :
            people && people.map((person) => {
                return (
                    <p>
                        Name: {person.name} <button onClick={() => {setPersonId(person.id)}}>Details</button><br/>
                        Nationality: {person.nationality}<br/>
                        Occupation: {person.occupation}<br/>
                        Status: {person.status_text}
                    </p>
                )
            })}
        </div>
    )
}