import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { DragDropContext } from "react-beautiful-dnd"
import Column from "../projects/Column";

const Tasks = () => {
   const [todo, setTodo] = useState([]);
   const [doing, setdoing] = useState([]);
   const [done, setdone] = useState([]);
  return (
    <div className="flex text-white">
      <Sidebar />
      <div>

        <DragDropContext>
          <h2 className="font-bold">Tareas</h2>

          <div className="flex justify-between items-center flex-row">
            <Column title={"TO DO"} task={incomplete} id={"1"} />
          </div>

        </DragDropContext>

      </div>
    </div>
  )
}

export default Tasks