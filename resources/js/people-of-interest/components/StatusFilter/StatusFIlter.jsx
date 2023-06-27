import { useEffect, useState } from "react"
import axios from "axios"

export const StatusFilter = ({selectedStatus, setSelectedStatus}) => {
    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/statuses');
            console.log(response)
            setStatuses(response.data)
        } catch (err) {
            console.log(err)
        }
        
        // Request with fetch:
        // const response = await fetch('/api/statuses')
        // const data = await response.json()
        // setStatuses(data)
    }

    useEffect(() => {
        loadStatuses()
    }, [])

    return (
        <div className="status-filter">
            {
                statuses ? 
                    statuses.map(status => {
                        return <button key={status.id} className={ 'status-filter__status' + (status.id == selectedStatus ? ' status-filter__status_selected' : '') } onClick={()=> {
                                setSelectedStatus(status.id)
                            }}>
                                { status.name }
                            </button>
                    })
                : ''
            }
        </div>
    )
}