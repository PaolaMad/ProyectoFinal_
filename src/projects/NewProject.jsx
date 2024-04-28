import { useState } from "react";
import Sidebar from "../components/Sidebar";

const NewProject = () => {
    const [nameProject, setNameProyect] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setfinishDate] = useState('');
    const [groups, setGroups] = useState('');
    const [creator, setCreator] = useState('');
    const [collaborators, setCollaborators] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="flex">
            <Sidebar />


            <div className="flex flex-col justify-center items-center p-3 w-full h-full overflow-y-scroll md:h-screen">
                <h1 className="text-3xl text-white font-bold mb-6">Nuevo proyecto</h1>
                <form className="bg-blue-ligth rounded-md w-8/12 p-6">
                    <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2">Nombre del proyecto</label>
                        <input
                            className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                            type="text"
                            placeholder="Nombre de nuevo proyecto" />
                    </div>

                    <div className="flex flex-row justify-between mb-4">
                        <div className="flex flex-col w-1/2 mr-2">
                            <label className="text-white font-semibold mb-2">Fecha de inicio</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                                type="date" />
                        </div>
                        <div className="flex flex-col w-1/2 ml-2">
                            <label className="text-white font-semibold mb-2">Fecha de finalización</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                                type="date" />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2">Grupos</label>
                        <input
                            className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                            type="text"
                            placeholder="Grupos" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2">Creador</label>
                        <input
                            className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                            type="text"
                            placeholder="Creador/Creadores" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2">Colaboradores</label>
                        <input
                            className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                            type="text"
                            placeholder="Colaboradores" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2">Descripcion</label>
                        <input
                            className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                            type="text"
                            placeholder="Descripcion" />
                    </div>

                    <div className="text-white mt-3 flex items-center justify-center">
                        <button className="bg-blue rounded-md p-2">
                            Crear Proyecto
                        </button>

                        <button
                            className="bg-blue rounded-md p-2 ml-7">
                            Cancelar
                        </button>

                    </div>
                </form>
            </div>




        </div>


    )
}

export default NewProject;
