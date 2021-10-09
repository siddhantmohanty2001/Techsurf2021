import React,{useState,useEffect} from 'react'
import Event from './Event'

interface Props{
    events: { day: string,time: string; entry: string; assigned: string; }[],
    time: string
}
const Time:React.FC<Props> = ({events,time}) => {
    const [filteredEvents,setFilteredEvents]=useState(events);
    useEffect(()=>{
        setFilteredEvents(events.filter(item=>item.time === time))
        
    },[events]);

    return (
        <div className="time">
                <div>{time}<hr/></div>
             
            {
                
                    filteredEvents.map((event,index) =><Event key={index} time={event.time} entry={event.entry} assigned={event.assigned} />)
                
            }
            
        </div>
    )
}

export default Time
