import { Route, Routes } from "react-router-dom"
import Login from "../AuthPages/Login"
import Sidebar from "../components/Sidebar"
import Home from "../ListPages/Home"
import Tasks from "../ListPages/Tasks"
import Progress from "../ListPages/Progress"

import Account from "../ListPages/Account"
import NewProject from "../projects/NewProject"
import Register from "../AuthPages/Register"
import MyCalendar from "../ListPages/MyCalendar"

const AppRouter = () => {
  return (

    <Routes>
      <Route path='/login' element={
        <Login />
      } />

      {/* <Route
        path="/sidebar" element={
          <Sidebar />
        }
      />

      <Route
        path="/home" element={
          <Home />
        }
      />

      <Route
        path="/tareas" element={
          <Tasks />
        }
      />

      <Route
        path="/progresos" element={
          <Progress />
        }
      />

      <Route
        path="/calendario" element={
          <Calendar />
        }
      /> */}

      <Route path='/sidebar' element={<Sidebar />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/tareas' element={<Tasks />} />
        <Route path='/progresos' element={<Progress />} />
        <Route path='/calendario' element={<MyCalendar />} />
        <Route path='/cuenta' element={<Account />} />
        <Route path='/crearProyecto' element={<NewProject />} />
        <Route path='/registro' element={<Register />} />


    </Routes>

  )
}

export default AppRouter