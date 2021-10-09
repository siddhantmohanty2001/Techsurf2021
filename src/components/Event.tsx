import React from 'react'

interface Props{
    time:string,
    entry:string,
    assigned:string,
}
const Event:React.FC<Props> = ({time,entry,assigned}) => {
    return (
        <div className="eventCard">
            <h2>{time}</h2>
            <h3>{entry}</h3>
            <h3>{assigned}</h3>
        </div>
    )
}

export default Event
