import { Link } from "react-router-dom";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { LiaTasksSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`bg-blue-ligth h-screen p-5  pt-8 ${open ? "w-56" : "w-20"} duration-300 relative`}>

        <GoArrowLeft className={`bg-white text-blue-ligth text-2xl rounded-full absolute -right-3 
      top-9 border border-blue-ligth cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className="inline-flex">
          <img src="/src/img/EasyWork.png" className="rounded-full w-9 cursor-pointer block" />
          <h1 className={`text-white origin-left font-bold text-2xl p-1 mr-2 ${!open && "scale-0"}`}>EasyWork</h1>
        </div>

        <ul className="pt-2">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-2">
            <span className="block float-left text-2xl">
              <IoHomeOutline />
            </span>
            <span className={`block duration-300 ${open ? 'visible' : 'hidden'}`}>
              <a href="/home" className="text-lg">Home</a>
            </span>
          </li>

          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-2">
            <span className="block float-left text-2xl">
            <LiaTasksSolid />
            </span>
            <span className={`block ${open ? 'visible' : 'hidden'}`}>
            <a href="/tareas" className="text-lg">Tareas</a>
            </span>
          </li>

          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-2">
            <span className="block float-left text-2xl">
            <SlChart />
            </span>
            <span className={`block ${open ? 'visible' : 'hidden'}`}>
            <a href="/progresos" className="text-lg">Progresos</a>
            </span>
          </li>

          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-2">
            <span className="block float-left text-2xl">
            <SlCalender />
            </span>
            <span className={`block ${open ? 'visible' : 'hidden'}`}>
            <a href="/calendario" className="text-lg">Calendario</a>
            </span>
          </li>

          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-72">
            <span className="block float-left text-2xl">
            <VscAccount />
            </span>
            <span className={`block ${open ? 'visible' : 'hidden'}`}>
            <a href="/cuenta" className="text-lg">Perfil</a>
            </span>
          </li>

          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-gray-blue rounded-md mt-2">
            <span className="block float-left text-2xl">
            <CiLogout />
            </span>
            <span className={`block ${open ? 'visible' : 'hidden'}`}>
            <a href="/login" className="text-lg">Cerrar Sesion</a>
            </span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar