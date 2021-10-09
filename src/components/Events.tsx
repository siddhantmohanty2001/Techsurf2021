import React,{useState,useEffect} from 'react'

import Time from './Time';

interface Props {
    events: { day: string,time: string; entry: string; assigned: string; }[],
    day: string
  }

const times=['12 AM','1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM']


const Events:React.FC<Props> = ({events,day}) => {
    const [filteredEvents,setFilteredEvents]=useState(events);
    useEffect(() => {
        let x=events.filter(item=>item.day===day);
        setFilteredEvents(x);
        
    }, [day,events])
    
    return (
        <div className="events">
            <h2>{day}</h2>
            {
                times.map((time,index)=>
                   <Time key={index} events={filteredEvents} time={time}/>
                )
            }
          
        </div>
    )
}

export default Events
