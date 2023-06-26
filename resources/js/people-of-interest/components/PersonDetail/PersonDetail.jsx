import { useEffect, useState } from 'react'

export const PersonDetail = ({personId,setPersonId}) => {
    const [person, setPerson] = useState(null)

    const getData = async () => {
        const response = await fetch(`/api/people/${personId}`)
        const data = await response.json()
        setPerson(data)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div>
            {!person ? <p>Loading</p> :
                <div>
                    <h2>{person.name} Details</h2>
                    {person.image && person.image.path ? <>
                        <img src={'/images/'+person.image.path} alt="" /><br/>
                    </> : <></>}
                    <button onClick={() => {setPersonId(null)}}>Close</button>
                </div>
            }
        </div>
    )
}