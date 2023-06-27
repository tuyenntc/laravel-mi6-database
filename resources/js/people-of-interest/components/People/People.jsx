import { useEffect, useState } from 'react'
import { PersonDetail } from '../PersonDetail/PersonDetail'
import { StatusFilter } from '../StatusFilter/StatusFIlter'

export const People = () => {
    const [people, setPeople] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState('')

    const getData = async () => {
        const response = await fetch('/api/people' + (selectedStatus && selectedStatus !== '' ? '?status=' + encodeURIComponent(selectedStatus) : ''))
        const data = await response.json()
        setPeople(data)
    }

    useEffect(() => {
        getData()
    },[selectedStatus])

    return (
        <div>
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            {personId
            ?
            <PersonDetail personId={personId} setPersonId={setPersonId} />
            :
            people && people.map((person, key) => {
                return (
                    <p key={key}>
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