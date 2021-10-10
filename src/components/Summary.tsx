import React, { useState,useEffect} from 'react'
import Event from './Event'

interface Props {
  events: { day: string,time: string; entry: string; assigned: string; }[],
  day: string
}
const Summary:React.FC<Props> = ({events,day}) => {
    const [filteredEvents,setFilteredEvents]=useState(events);
    useEffect(() => {
        
        setFilteredEvents(events.filter(item=>item.day===day));
        
    }, [day,events])
   
    return (
        <div className="summary">
            <h2>All Day Event(s)</h2>
            <div className="summaryEventCards">
            {
                
                filteredEvents.map((event,index) =><Event key={index} time={event.time} entry={event.entry} assigned={event.assigned} />)
               
            }
            </div>  
        </div>
    )
}

export default Summary
