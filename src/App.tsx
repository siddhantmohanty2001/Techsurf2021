import React,{ useState} from 'react';
import Events from './components/Events';
import Summary from './components/Summary';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';



const events=[
  {
      day:'October 9th 2021',
      time:'1 PM',
      entry:'Artificial Intelligence',
      assigned:'Advin Netto'

  },
{
  day:'October 10th 2021',
  time:'5 PM',
  entry:'Artificial Intelligence',
  assigned:'Advin Netto'

},
{
  day:'October 9th 2021',
  time:'7 PM',
  entry:'Artificial Intelligence',
  assigned:'Advin Netto'

},
{
  day:'October 9th 2021',
  time:'7 PM',
  entry:'Artificial Intelligence',
  assigned:'Advin Netto'

},
{
  day:'October 28th 2021',
  time:'7 PM',
  entry:'Artificial Intelligence',
  assigned:'Advin Netto'

}
]
const App:React.FC=()=> {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="App">
      <Calendar
       className="calendar"
        onChange={onChange}
        value={value}
        tileClassName={({date}) => {
          return events.find(x=>x.day===moment(date).format('MMMM Do YYYY').toString())?'highlight':'';
        }}
      />
      <Events  events={events} day={moment(value).format('MMMM Do YYYY')} />
      <Summary events={events} day={moment(value).format('MMMM Do YYYY')}/>
    </div>
  );
}

export default App;