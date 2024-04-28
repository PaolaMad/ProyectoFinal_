import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar from "../components/Sidebar"
import dayjs from 'dayjs';
import es from 'dayjs/locale/es';

dayjs.locale('es');

const localizer = dayjsLocalizer(dayjs);

// CustomToolbar traduce los botones de la barra de los botones
const CustomToolbar = ({ label, onNavigate, onView }) => (
  <div className="rbc-toolbar">
    <span className="rbc-btn-group">
      <button type="button" onClick={() => onNavigate('TODAY')}>
        Hoy
      </button>
      <button type="button" onClick={() => onNavigate('PREV')}>
        Atrás
      </button>
      <button type="button" onClick={() => onNavigate('NEXT')}>
        Siguiente
      </button>
    </span>
    <span className="rbc-toolbar-label">{label}</span>
  </div>
);

const MyCalendar = () => {
//Evento que recibira el calendario
  const events = [{
    start: dayjs('2024-04-30T12:00:00').toDate(),
    end: dayjs('2024-04-30T13:00:00').toDate(),
    title: "prueba"
  },
  ]

  console.log(events);

  return (
    <div className="flex overflow-y-scroll md:h-screen">
      <Sidebar />
      <h1 className='text-white text-3xl text-justify ml-20 mt-14 font-bold uppercase'>Calendario</h1>
      <div className='flex justify-center items-center mt-24 '>
        <div className="max-w-7xl mx-auto bg-gray-blue">
          <Calendar
            localizer={localizer}
            events={events}
            components={{
              toolbar: CustomToolbar 
            }}
            startAccessor="start"
            endAccessor="end"
            style={{
              width: "130vh",
              height: "80vh"
            }}
            views={["month"]}

          />
        </div>
      </div>

    </div>
  )
}

export default MyCalendar