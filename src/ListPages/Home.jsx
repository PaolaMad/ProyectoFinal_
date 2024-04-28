import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Card from "../projects/Card"
import NewProject from "../projects/NewProject"

const Home = () => {
  const navigate = useNavigate();

  const handleNewProject = () => {
    navigate('/crearProyecto')
  }

  return (
    <div className="flex h-screen bg-gray-blue">
      <Sidebar />
      <div className=" items-center p-4 text-white">

        <h1 className="text-3xl text-justify mt-14 ml-14 font-bold uppercase">Proyectos</h1>

        <button
          className="flex-grow flex absolute top-0 right-0 mt-14 mr-16 justify-end rounded-md
         bg-blue-ligth p-2 tracking-tight hover:scale-105 hover:shadow cursor-pointer"
         type="button" 
         onClick={handleNewProject}
        >
          Nuevo Proyecto
        </button>

        {/* Tarjetas de proyectos creados: iterar los titulos de los proyectos creados */}
        <div className="flex flex-wrap gap-4 p-8 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>



      </div>
    </div>
  )
}

export default Home